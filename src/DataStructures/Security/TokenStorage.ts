import { saveProfile, loadProfile, clearProfile } from "./SecureStorage";

export class TokenStorage {
    static BearerAccessToken: string = "";
    static refreshToken: string = "";
    static sessionId = 998;

    /** In-memory cache of the decrypted profile — populated by saveUserProfile or hydrateProfile */
    static profileCache: Record<string, any> | null = null;

    static setSession(sessionId: any) {
        if (sessionId) {
            TokenStorage.sessionId = sessionId;
        }
    }

    /**
     * Stores user profile securely (encrypted in sessionStorage)
     * and keeps the token in memory for API calls.
     * Also populates profileCache so getUserDetails() works synchronously.
     */
    static async saveUserProfile(signinResponse: any): Promise<boolean> {
        try {
            // Support both { data: { token, ... } } and flat { token, ... }
            const data = signinResponse?.data ?? signinResponse;
            const token = data?.token ?? "";
            const refreshToken = data?.refreshtoken ?? data?.refreshToken ?? "";

            // Primary: keep tokens in memory only
            TokenStorage.BearerAccessToken = token;
            TokenStorage.refreshToken = refreshToken;

            // Build profile object (tokens included — encrypted at rest)
            const profile = {
                token,
                refreshToken,
                email: data?.email ?? "",
                userId: data?.entity?.[0]?.userId ?? 0,
                userConcept: data?.userConcept ?? 0,
                entityId: data?.entityDetails?.id ?? 0,
                roles: data?.roles ?? [],
                amcode: btoa(JSON.stringify(data?.roles ?? [])),
            };

            // Cache in memory for sync access
            TokenStorage.profileCache = profile;

            // Encrypt and persist to sessionStorage
            await saveProfile(profile);
            return true;
        } catch {
            return false;
        }
    }

    /**
     * Call once at app startup (e.g. in init()) to decrypt the stored profile
     * into memory so that getUserDetails() can read it synchronously.
     */
    static async hydrateProfile(): Promise<void> {
        if (!TokenStorage.profileCache) {
            const profile = await loadProfile();
            if (profile) {
                TokenStorage.profileCache = profile;
                TokenStorage.BearerAccessToken = profile.token ?? "";
                TokenStorage.refreshToken = profile.refreshToken ?? "";
            }
        }
    }

    /**
     * Clears all stored credentials and profile data.
     */
    static logout(): void {
        TokenStorage.BearerAccessToken = "";
        TokenStorage.refreshToken = "";
        TokenStorage.profileCache = null;
        clearProfile();
    }
}
