import { TokenStorage } from "../../DataStructures/Security/TokenStorage";
import { loadProfile } from "../../DataStructures/Security/SecureStorage";

/**
 * Synchronous — reads from in-memory token + falls back to plain-text
 * localStorage("profile") for backward compatibility.
 * @deprecated Migrate callers to getUserDetailsAsync() which uses encrypted storage.
 */
export function getUserDetails() {
    let userDetails = {
        entity: 0,
        userConcept: 0,
        userId: 0,
        token: TokenStorage.BearerAccessToken,
    };

    // If in-memory token is available, try encrypted storage first (sync fallback)
    // Otherwise fall back to legacy plain-text localStorage
    try {
        const raw: string = localStorage?.getItem("profile") || "";
        if (raw) {
            const profileData = JSON.parse(raw);
            userDetails.entity = profileData?.entityId ?? 0;
            userDetails.userConcept = profileData?.userConcept ?? 0;
            userDetails.userId = profileData?.userId ?? 0;
            if (!userDetails.token) {
                userDetails.token = profileData?.token ?? "";
            }
        }
    } catch {
        // corrupted localStorage — ignore
    }

    return userDetails;
}

/**
 * Async version — prefers encrypted sessionStorage, falls back to
 * plain-text localStorage for backward compatibility.
 * This is the recommended replacement for getUserDetails().
 */
export async function getUserDetailsAsync() {
    // 1. Try encrypted storage first
    const profile = await loadProfile();
    if (profile) {
        return {
            entity: profile?.entityId ?? 0,
            userConcept: profile?.userConcept ?? 0,
            userId: profile?.userId ?? 0,
            token: TokenStorage.BearerAccessToken,
            roles: profile?.roles ?? [],
        };
    }

    // 2. Fall back to legacy plain-text localStorage
    try {
        const raw: string = localStorage?.getItem("profile") || "";
        if (raw) {
            const profileData = JSON.parse(raw);
            return {
                entity: profileData?.entityId ?? 0,
                userConcept: profileData?.userConcept ?? 0,
                userId: profileData?.userId ?? 0,
                token: TokenStorage.BearerAccessToken || profileData?.token || "",
                roles: [],
            };
        }
    } catch {
        // corrupted localStorage — ignore
    }

    return {
        entity: 0,
        userConcept: 0,
        userId: 0,
        token: TokenStorage.BearerAccessToken,
        roles: [],
    };
}
