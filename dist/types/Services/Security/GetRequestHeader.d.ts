export declare function GetRequestHeader(contentType?: string, Accept?: string): {
    'Content-Type': string;
    Authorization: string;
    Accept: string;
};
export declare function GetRequestHeaderWithAuthorization(contentType?: string, token?: string, Accept?: string): {
    'Content-Type': string;
    Authorization: string;
    Accept: string;
};