import { saveProfile, loadProfile, clearProfile } from "./SecureStorage";

export class TokenStorage {
    static BearerAccessToken: string = "";
    static refreshToken: string = "";
    static sessionId = 998;

    static setSession(sessionId: any) {
        if (sessionId) {
            TokenStorage.sessionId = sessionId;
        }
    }

    /**
     * Stores user profile securely (encrypted in sessionStorage)
     * and keeps the token in memory for API calls.
     */
    static async saveUserProfile(signinResponse: any): Promise<boolean> {
        try {
            const data = signinResponse?.data;
            const token = data?.token ?? "";
            const refreshToken = data?.refreshtoken ?? "";

            // Primary: keep tokens in memory only
            TokenStorage.BearerAccessToken = token;
            TokenStorage.refreshToken = refreshToken;

            // Secondary: encrypt non-sensitive profile data for persistence
            const profile = {
                email: data?.email ?? "",
                userId: data?.entity?.[0]?.userId ?? 0,
                userConcept: data?.userConcept ?? 0,
                entityId: data?.entityDetails?.id ?? 0,
                roles: data?.roles ?? [],
            };
            await saveProfile(profile);
            return true;
        } catch {
            return false;
        }
    }

    /**
     * Restores profile metadata from encrypted sessionStorage.
     * Tokens are NOT persisted — they must come from a fresh login or refresh.
     */
    static async restoreProfile(): Promise<Record<string, any> | null> {
        return loadProfile();
    }

    /**
     * Clears all stored credentials and profile data.
     */
    static logout(): void {
        TokenStorage.BearerAccessToken = "";
        TokenStorage.refreshToken = "";
        clearProfile();
    }
}
