import jwt, {
    JwtPayload,
    TokenExpiredError,
    NotBeforeError,
    SignOptions,
    VerifyOptions
} from 'jsonwebtoken';
import { TokenStorage } from '../../DataStructures/Security/TokenStorage';

export const getServerJwtToken = (): string => {
    const payload = {
        server: true,
        timestamp: Date.now(),
        unique_name: '999',
        email: 'info@boomconsole.com',
        upn: '100144987',
        primarysid: '102321705',
        sub: 'node-server',
    };
    const token = jwt.sign(payload, TokenStorage.JwtSecret, {
        algorithm: 'HS256',
        expiresIn: '1h',
      })

    return token;
}