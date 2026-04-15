const STORAGE_KEY = "ccs_profile";
const CRYPTO_ALGO = "AES-GCM";

/**
 * Derives a CryptoKey from a passphrase using PBKDF2.
 * The passphrase is built from the origin + user-agent to tie storage to this browser/domain.
 */
async function deriveKey(salt: Uint8Array): Promise<CryptoKey> {
    const passphrase = location.origin + navigator.userAgent;
    const encoder = new TextEncoder();
    const rawKey = encoder.encode(passphrase);
    const keyMaterial = await crypto.subtle.importKey(
        "raw",
        rawKey.buffer as ArrayBuffer,
        "PBKDF2",
        false,
        ["deriveKey"]
    );
    return crypto.subtle.deriveKey(
        { name: "PBKDF2", salt: salt.buffer as ArrayBuffer, iterations: 100_000, hash: "SHA-256" },
        keyMaterial,
        { name: CRYPTO_ALGO, length: 256 },
        false,
        ["encrypt", "decrypt"]
    );
}

/**
 * Encrypts and stores a profile object in sessionStorage.
 * Uses AES-GCM with a browser-bound derived key so the ciphertext
 * is not portable to other origins or browsers.
 */
export async function saveProfile(profile: Record<string, any>): Promise<void> {
    const encoder = new TextEncoder();
    const salt = crypto.getRandomValues(new Uint8Array(16));
    const iv = crypto.getRandomValues(new Uint8Array(12));
    const key = await deriveKey(salt);

    const plaintext = encoder.encode(JSON.stringify(profile));
    const ciphertext = await crypto.subtle.encrypt(
        { name: CRYPTO_ALGO, iv: iv.buffer as ArrayBuffer },
        key,
        plaintext.buffer as ArrayBuffer
    );

    // Pack salt + iv + ciphertext into a single base64 string
    const packed = new Uint8Array(salt.length + iv.length + new Uint8Array(ciphertext).length);
    packed.set(salt, 0);
    packed.set(iv, salt.length);
    packed.set(new Uint8Array(ciphertext), salt.length + iv.length);

    sessionStorage.setItem(STORAGE_KEY, arrayToBase64(packed));
}

/**
 * Decrypts and returns the stored profile, or null if absent/tampered.
 */
export async function loadProfile(): Promise<Record<string, any> | null> {
    const stored = sessionStorage.getItem(STORAGE_KEY);
    if (!stored) return null;

    try {
        const packed = base64ToArray(stored);
        const salt = packed.slice(0, 16);
        const iv = packed.slice(16, 28);
        const ciphertext = packed.slice(28);

        const key = await deriveKey(salt);
        const plainBuf = await crypto.subtle.decrypt(
            { name: CRYPTO_ALGO, iv: iv.buffer as ArrayBuffer },
            key,
            ciphertext.buffer as ArrayBuffer
        );
        return JSON.parse(new TextDecoder().decode(plainBuf));
    } catch {
        // Tampered or corrupted — wipe it
        clearProfile();
        return null;
    }
}

/**
 * Removes the stored profile.
 */
export function clearProfile(): void {
    sessionStorage.removeItem(STORAGE_KEY);
}

// --- helpers ---
function arrayToBase64(bytes: Uint8Array): string {
    let binary = "";
    for (let i = 0; i < bytes.length; i++) {
        binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary);
}

function base64ToArray(b64: string): Uint8Array {
    const binary = atob(b64);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) {
        bytes[i] = binary.charCodeAt(i);
    }
    return bytes;
}
