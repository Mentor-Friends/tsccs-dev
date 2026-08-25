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
            const token = data?.token ?? data?.accessToken ?? TokenStorage.BearerAccessToken ?? "";
            const refreshToken = data?.refreshtoken ?? data?.refreshToken ?? "";
            const existingProfile = TokenStorage.profileCache ?? {};

            // Primary: keep tokens in memory only
            TokenStorage.BearerAccessToken = token;
            TokenStorage.refreshToken = refreshToken || TokenStorage.refreshToken;

            // Build profile object (tokens included — encrypted at rest)
            // Support both raw API response format and flat IUser format
            const profile = {
                token,
                refreshToken: TokenStorage.refreshToken,
                email: data?.email ?? existingProfile.email ?? "",
                userId: data?.entity?.[0]?.userId ?? data?.userId ?? data?.theUserId ?? existingProfile.userId ?? 0,
                userConcept: data?.userConcept ?? existingProfile.userConcept ?? 0,
                entityId: data?.entityDetails?.id ?? data?.entityId ?? existingProfile.entityId ?? 0,
                roles: data?.roles ?? existingProfile.roles ?? [],
                amcode: data?.amcode ?? existingProfile.amcode ?? btoa(JSON.stringify(data?.roles ?? existingProfile.roles ?? [])),
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

    static async updateTokens(accessToken: string = "", refreshToken: string = ""): Promise<void> {
        if (accessToken) {
            TokenStorage.BearerAccessToken = accessToken;
        }
        if (refreshToken) {
            TokenStorage.refreshToken = refreshToken;
        }

        if (TokenStorage.profileCache) {
            TokenStorage.profileCache = {
                ...TokenStorage.profileCache,
                token: TokenStorage.BearerAccessToken,
                refreshToken: TokenStorage.refreshToken,
            };

            await saveProfile(TokenStorage.profileCache);
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
                // Only hydrate tokens if they aren't already set (e.g. by init's updateAccessToken)
                if (!TokenStorage.BearerAccessToken) {
                    TokenStorage.BearerAccessToken = profile.token ?? "";
                }
                if (!TokenStorage.refreshToken) {
                    TokenStorage.refreshToken = profile.refreshToken ?? "";
                }
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
