import { TokenStorage } from "../../DataStructures/Security/TokenStorage";

/**
 * Returns user details synchronously.
 * Priority: in-memory profileCache (encrypted) → legacy localStorage("profile") fallback.
 */
export function getUserDetails() {
    let userDetails: Record<string, any> = {
        entity: 0,
        userConcept: 0,
        userId: 0,
        token: TokenStorage.BearerAccessToken,
        email: "",
        amcode: "",
        roles: [],
    };

    // 1. Prefer the in-memory cache (populated by saveUserProfile or hydrateProfile)
    const cached = TokenStorage.profileCache;
    if (cached) {
        userDetails.entity = cached.entityId ?? 0;
        userDetails.userConcept = cached.userConcept ?? 0;
        userDetails.userId = cached.userId ?? 0;
        userDetails.email = cached.email ?? "";
        userDetails.amcode = cached.amcode ?? "";
        userDetails.roles = cached.roles ?? [];
        return userDetails;
    }

    // 2. Legacy fallback — plain-text localStorage (for backward compatibility)
    try {
        const raw: string = localStorage?.getItem("profile") || "";
        if (raw) {
            const profileData = JSON.parse(raw);
            userDetails.entity = profileData?.entityId ?? 0;
            userDetails.userConcept = profileData?.userConcept ?? 0;
            userDetails.userId = profileData?.userId ?? 0;
            userDetails.email = profileData?.email ?? "";
            userDetails.amcode = profileData?.amcode ?? "";
            if (!userDetails.token) {
                userDetails.token = profileData?.token ?? "";
            }
        }
    } catch {
        // corrupted localStorage — ignore
    }

    return userDetails;
}
