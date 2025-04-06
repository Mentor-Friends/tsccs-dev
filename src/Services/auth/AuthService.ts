import jwt, {
    JwtPayload,
    TokenExpiredError,
    NotBeforeError,
    SignOptions,
    VerifyOptions
} from 'jsonwebtoken';

export interface TokenPayload {
    userId: number;
    email?: string;
    role?: string;
    [key: string]: any;
}

// Update the types for the expiresIn properties
interface AuthConfig {
    jwtSecret: string;
    refreshTokenSecret: string;
    accessTokenExpiresIn?: number;  // use seconds
    refreshTokenExpiresIn?: number;
    jwtSignOptions?: SignOptions;
    jwtVerifyOptions?: VerifyOptions;
}

// Default config with numeric expiration values
let config: {
    jwtSecret: string;
    refreshTokenSecret: string;
    accessTokenExpiresIn: number;
    refreshTokenExpiresIn: number;
    jwtSignOptions: SignOptions;
    jwtVerifyOptions: VerifyOptions;
} = {
    jwtSecret: '',
    refreshTokenSecret: '',
    accessTokenExpiresIn: 900,   // 15 minutes in seconds
    refreshTokenExpiresIn: 604800, // 7 days in seconds
    jwtSignOptions: {},
    jwtVerifyOptions: {}
};

export const initAuth = (userConfig: AuthConfig) => {
    config = {
        accessTokenExpiresIn: 900,
        refreshTokenExpiresIn: 604800,
        jwtSignOptions: {},
        jwtVerifyOptions: {},
        ...userConfig
    };
};

export const generateTokens = (payload: TokenPayload): {
    accessToken: string;
    refreshToken: string;
} => {
    const accessToken = jwt.sign(payload, config.jwtSecret, {
        ...config.jwtSignOptions,
        expiresIn: config.accessTokenExpiresIn
    });

    const refreshToken = jwt.sign(payload, config.refreshTokenSecret, {
        ...config.jwtSignOptions,
        expiresIn: config.refreshTokenExpiresIn
    });

    return { accessToken, refreshToken };
};

export const verifyAccessToken = (authHeader: string): {
    decoded: JwtPayload;
    token: string;
} => {
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        throw new Error('Authorization header missing or malformed.');
    }

    const token = authHeader.split(' ')[1];
    if (!token || token.split('.').length !== 3) {
        throw new Error('Invalid token format.');
    }

    try {
        const decoded = jwt.verify(token, config.jwtSecret, config.jwtVerifyOptions);
        if (typeof decoded !== 'object' || decoded === null) {
            throw new Error('Invalid token payload.');
        }

        return { decoded: decoded as JwtPayload, token };
    } catch (err) {
        if (err instanceof TokenExpiredError || err instanceof NotBeforeError) {
            throw new Error('Token is invalid or expired.');
        }
        throw new Error('Failed to verify token.');
    }
};

export const verifyRefreshToken = (refreshToken: string): JwtPayload => {
    try {
        const decoded = jwt.verify(refreshToken, config.refreshTokenSecret, config.jwtVerifyOptions);
        if (typeof decoded !== 'object' || decoded === null) {
            throw new Error('Invalid refresh token payload.');
        }

        return decoded as JwtPayload;
    } catch (err) {
        if (err instanceof TokenExpiredError || err instanceof NotBeforeError) {
            throw new Error('Refresh token expired or invalid.');
        }
        throw new Error('Failed to verify refresh token.');
    }
};

export const getNewAccessToken = (refreshToken: string): string => {
    try {
        const decoded = verifyRefreshToken(refreshToken);
        const { userId, email, role, ...rest } = decoded;

        const newAccessToken = jwt.sign(
            { userId, email, role, ...rest },
            config.jwtSecret,
            {
                ...config.jwtSignOptions,
                expiresIn: config.accessTokenExpiresIn
            }
        );

        return newAccessToken;
    } catch (err) {
        throw new Error('Unable to generate new access token: ' + (err as Error).message);
    }
};