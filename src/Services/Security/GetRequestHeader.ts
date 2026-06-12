import { BaseUrl } from "../../DataStructures/BaseUrl";
import { TokenStorage } from "../../DataStructures/Security/TokenStorage";

type RequestHeader = Record<string, string>;

const TOKEN_REFRESH_BUFFER_SECONDS = 60;

let refreshTokenPromise: Promise<string> | null = null;

export async function GetRequestHeader(
    contentType: string = 'application/json',
    Accept: string = 'application/json'
): Promise<RequestHeader> {
    const token = await getValidAccessToken();
    return buildRequestHeader(contentType, Accept, token);
}

export async function GetRequestHeaderWithAuthorization(
    contentType: string = 'application/json',
    token: string = "",
    Accept: string = 'application/json',
): Promise<RequestHeader> {
    const validToken = await getValidAccessToken(token);
    return buildRequestHeader(contentType, Accept, validToken);
}

export async function GetOnlyTokenHeader(): Promise<Headers> {
    const token = await getValidAccessToken();
    const sessionId = TokenStorage.sessionId?.toString() ?? "";
    const myHeaders = new Headers();

    if (token) {
        myHeaders.append('Authorization', 'Bearer ' + token);
    }
    myHeaders.append('X-Session-Id', sessionId);

    return myHeaders;
}

export async function getValidAccessToken(token: string = ""): Promise<string> {
    await TokenStorage.hydrateProfile();

    const activeToken = token || TokenStorage.BearerAccessToken;
    if (!activeToken && TokenStorage.refreshToken) {
        localStorage.clear();
        //return refreshAccessToken(activeToken);
    }

    if (activeToken && shouldRefreshToken(activeToken) && TokenStorage.refreshToken) {
        localStorage.clear();
        //return refreshAccessToken(activeToken);
    }

    return activeToken;
}

function buildRequestHeader(contentType: string, Accept: string, token: string = ""): RequestHeader {
    const sessionId = TokenStorage.sessionId?.toString() ?? "";
    const headers: RequestHeader = {
        'Content-Type': contentType,
        'Accept': Accept,
        'X-Session-id': sessionId
    };

    if (token) {
        headers.Authorization = "Bearer " + token;
    }

    return headers;
}

function shouldRefreshToken(token: string): boolean {
    const expiresAt = getJwtExpirationTime(token);
    if (!expiresAt) {
        return false;
    }

    const refreshAt = expiresAt - TOKEN_REFRESH_BUFFER_SECONDS * 1000;
    return Date.now() >= refreshAt;
}

function getJwtExpirationTime(token: string): number | null {
    try {
        const payload = token.split(".")[1];
        if (!payload) {
            return null;
        }

        const decoded = JSON.parse(base64UrlDecode(payload));
        if (typeof decoded.exp !== "number") {
            return null;
        }

        return decoded.exp * 1000;
    } catch {
        return null;
    }
}

function base64UrlDecode(value: string): string {
    const base64 = value.replace(/-/g, "+").replace(/_/g, "/");
    const padded = base64.padEnd(base64.length + (4 - base64.length % 4) % 4, "=");
    return atob(padded);
}

async function refreshAccessToken(accessToken: string = ""): Promise<string> {
    localStorage.clear();
    if (!refreshTokenPromise) {
        refreshTokenPromise = requestTokenRefresh(accessToken).finally(() => {
            refreshTokenPromise = null;
        });
    }

    return refreshTokenPromise;
}

async function requestTokenRefresh(accessToken: string = ""): Promise<string> {
    const currentRefreshToken = TokenStorage.refreshToken;
    if (!currentRefreshToken) {
        return TokenStorage.BearerAccessToken;
    }

    const response = await fetch(BaseUrl.RefreshTokenUrl(), {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({
            accessToken: accessToken || TokenStorage.BearerAccessToken,
            refreshToken: currentRefreshToken,
        }),
    });

    const output = await response.json().catch(() => ({}));
    if (!response.ok) {
        localStorage.clear();
        throw new Error(`Refresh token request failed with status ${response.status}`);
    }

    const data = output?.data ?? output;
    const refreshedAccessToken = data?.accessToken ?? data?.token ?? "";
    const refreshToken = data?.refreshToken ?? data?.refreshtoken ?? currentRefreshToken;

    if (!refreshedAccessToken) {
        localStorage.clear();
        throw new Error("Refresh token response did not include an access token");
    }

    await TokenStorage.updateTokens(refreshedAccessToken, refreshToken);
    return refreshedAccessToken;
}
