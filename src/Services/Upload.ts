import { BaseUrl, Logger } from "../app";
import { UpdatePackageLogWithError } from "./Common/ErrorPosting";
import { GetRequestHeader, GetRequestHeaderWithAuthorization, fetchWithAuthRetry } from "./Security/GetRequestHeader";

export const validImageFormats = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];
export const validDocumentFormats = [
  "application/msword",
  "application/vnd.ms-excel",
  "application/vnd.ms-powerpoint",
  "text/plain",
  "application/pdf",
];

export interface R2UploadData {
  key: string;
  bucket: string;
  contentType: string;
  size: number;
  eTag: string;
  url: string;
}

export interface R2PresignedUploadUrlRequest {
  fileName: string;
  contentType: string;
  folder?: string;
  expiresInSeconds?: number;
}

export interface R2PresignedUploadUrlData {
  uploadUrl: string;
  key: string;
  bucket: string;
  contentType: string;
  expiresInSeconds: number;
  expiresAt: string;
  publicUrl: string;
}

export interface R2PresignedUploadOptions {
  fileName?: string;
  contentType?: string;
  folder?: string;
  expiresInSeconds?: number;
}

export interface R2PresignedUploadResult {
  message: string;
  success: boolean;
  url?: string;
  data?: R2PresignedUploadUrlData;
  eTag?: string | null;
}

export interface UploadResponse<T = string | R2UploadData> {
  message: string;
  success: boolean;
  data?: T;
}

type UploadFileParam = Blob & {
  name?: string;
  type?: string;
  uri?: string;
};

function getUploadResponseUrl(response: UploadResponse | R2PresignedUploadResult | any): string | undefined {
  const data = response?.data;
  if (typeof data === "string") return data;
  if (data && typeof data.url === "string") return data.url;
  if (typeof response?.url === "string") return response.url;
  return undefined;
}

function formDataHasField(body: FormData, fieldName: string) {
  return typeof body.has === "function" && body.has(fieldName);
}

function getFormDataField(body: FormData, fieldName: string) {
  return typeof body.get === "function" ? body.get(fieldName) : undefined;
}

function getUploadFileFromFormData(body: FormData) {
  return getFormDataField(body, "file") ?? getFormDataField(body, "image");
}

function appendFileField(body: FormData, value: FormDataEntryValue) {
  const fileName =
    typeof value === "object" && value ? (value as { name?: string }).name : undefined;
  if (fileName) {
    body.append("file", value as Blob, fileName);
  } else {
    body.append("file", value);
  }
}

function ensureR2FileField(body: FormData) {
  if (formDataHasField(body, "file")) return body;

  const imageField = getFormDataField(body, "image");
  if (imageField !== undefined && imageField !== null) {
    appendFileField(body, imageField);
  }

  return body;
}

async function postUploadFormData<T = string | R2UploadData>(
  url: string,
  body: FormData,
  token: string = ""
): Promise<UploadResponse<T> | null> {
  try {
    const headers = await GetRequestHeaderWithAuthorization(null, token);

    const response = await fetchWithAuthRetry(url, {
      method: "POST",
      body,
      headers,
    });
    if (!response.ok) {
      const errorData = await response.text();
      console.error(`${response.status} ${errorData}`);
      return null;
    }
    return await response.json();
  } catch (err) {
    console.error(err);
    return null;
  }
}

async function postUploadJson<T>(
  url: string,
  body: unknown,
  token: string = ""
): Promise<UploadResponse<T> | null> {
  try {
    const response = await fetchWithAuthRetry(url, {
      method: "POST",
      body: JSON.stringify(body),
      headers: await GetRequestHeaderWithAuthorization("application/json", token),
    });
    if (!response.ok) {
      const errorData = await response.text();
      console.error(`${response.status} ${errorData}`);
      return null;
    }
    return await response.json();
  } catch (err) {
    console.error(err);
    return null;
  }
}

function isBlobLike(file: unknown): file is Blob {
  return typeof Blob !== "undefined" && file instanceof Blob;
}

function getFileName(file: UploadFileParam | Blob | any, options: R2PresignedUploadOptions) {
  if (options.fileName) return options.fileName;
  if (typeof file?.name === "string" && file.name) return file.name;
  if (typeof file?.uri === "string") {
    const [path] = file.uri.split("?");
    const name = path.split("/").pop();
    if (name) return name;
  }
  return "upload";
}

function getFileContentType(file: UploadFileParam | Blob | any, options: R2PresignedUploadOptions) {
  return options.contentType || file?.type || "application/octet-stream";
}

async function getPresignedUploadBody(file: UploadFileParam | Blob | BodyInit | any): Promise<BodyInit> {
  if (isBlobLike(file) || typeof file === "string") return file as BodyInit;
  if (file instanceof ArrayBuffer) return file;
  if (typeof file?.uri === "string") {
    try {
      const response = await fetch(file.uri);
      if (response.ok) return await response.blob();
    } catch {
      // Some runtimes support { uri, name, type } directly as a fetch body.
    }
  }
  return file as BodyInit;
}

/**
 * Generic method to upload file or image
 * @param file File
 * @returns Promise<{message: string, success: boolean, url?: string}>
 */
export async function uploadAttachment(
  file: File,
  token?: string
): Promise<{ message: string; success: boolean; url?: string }> {
  const logData : any = Logger.logfunction("uploadAttachment");
  try {
    console.log("File Type", file.type);
    const isDocument =
      validDocumentFormats.includes(file.type) ||
      file.name.toLowerCase().endsWith(".md"); // fallback extension check
    const isImage = validImageFormats.includes(file.type);

    if (!isDocument && !isImage) {
      return { message: "Invalid File Format", success: false };
    }

    const response = await uploadWithR2PresignedUrl(file, {}, token);
    const uploadUrl = getUploadResponseUrl(response);
    if (!uploadUrl) {
      return { message: response.message || "File Upload Failed", success: false };
    }

    Logger.logUpdate(logData);
    return { message: response.message || "Upload Success", success: true, url: uploadUrl };
  } catch (err) {
    console.error(err);
    UpdatePackageLogWithError(logData, 'uploadAttachment', err);
    throw err;
  }
}

/**
 * Method to upload a file or image to R2 storage.
 * @param body FormData. Append the file under the "file" key.
 * @param token string?
 * @returns UploadResponse<R2UploadData> | null
 */
export async function uploadR2Storage(
  body: FormData,
  token: string = ""
): Promise<UploadResponse<R2UploadData> | null> {
  return postUploadFormData<R2UploadData>(BaseUrl.uploadR2StorageUrl(), ensureR2FileField(body), token);
}

/**
 * Method to request an R2 pre-signed upload URL from the backend.
 * @param body Request metadata for the file to upload.
 * @param token string?
 * @returns UploadResponse<R2PresignedUploadUrlData> | null
 */
export async function getR2PresignedUploadUrl(
  body: R2PresignedUploadUrlRequest,
  token: string = ""
): Promise<UploadResponse<R2PresignedUploadUrlData> | null> {
  return postUploadJson<R2PresignedUploadUrlData>(BaseUrl.r2PresignedUploadUrl(), body, token);
}

/**
 * Method to upload a file body to a pre-signed R2 URL.
 * @param uploadUrl URL returned by getR2PresignedUploadUrl
 * @param file Blob/File, raw body, or compatible file-like object
 * @param contentType Must match the contentType used when creating the signed URL.
 * @returns Response from R2
 */
export async function uploadToR2PresignedUrl(
  uploadUrl: string,
  file: UploadFileParam | Blob | BodyInit | any,
  contentType: string
) {
  return fetch(uploadUrl, {
    method: "PUT",
    headers: {
      "Content-Type": contentType,
    },
    body: await getPresignedUploadBody(file),
  });
}

/**
 * Full R2 pre-signed upload workflow: create URL, PUT file to R2, return public URL.
 * @param file Blob/File, raw body, or compatible file-like object
 * @param options Optional fileName/contentType/folder/expiresInSeconds overrides.
 * @param token string?
 * @returns R2PresignedUploadResult
 */
export async function uploadWithR2PresignedUrl(
  file: UploadFileParam | Blob | BodyInit | any,
  options: R2PresignedUploadOptions = {},
  token: string = ""
): Promise<R2PresignedUploadResult> {
  const contentType = getFileContentType(file, options);
  const presignedResponse = await getR2PresignedUploadUrl({
    fileName: getFileName(file, options),
    contentType,
    folder: options.folder ?? "",
    expiresInSeconds: options.expiresInSeconds ?? 900,
  }, token);

  if (!presignedResponse?.success || !presignedResponse.data?.uploadUrl) {
    return {
      message: presignedResponse?.message ?? "Unable to create pre-signed R2 upload URL.",
      success: false,
    };
  }

  const uploadResponse = await uploadToR2PresignedUrl(
    presignedResponse.data.uploadUrl,
    file,
    presignedResponse.data.contentType || contentType
  );

  if (!uploadResponse.ok) {
    let details = "";
    try {
      details = await uploadResponse.text();
    } catch {
      details = "";
    }
    return {
      message: `R2 upload failed with HTTP ${uploadResponse.status}${details ? `: ${details}` : ""}`,
      success: false,
      data: presignedResponse.data,
    };
  }

  return {
    message: "Upload Success",
    success: true,
    url: presignedResponse.data.publicUrl,
    data: presignedResponse.data,
    eTag: uploadResponse.headers.get("etag"),
  };
}

/**
 * Method to upload image to server
 * @param body FormData
 * @param token string?
 * @returns JSON | string | null
 */
export async function uploadImage(
  body: FormData,
  token: string = ""
): Promise<R2PresignedUploadResult> {
  const logData : any = Logger.logfunction("uploadImage");
  try {
    const file = getUploadFileFromFormData(body);
    if (file === undefined || file === null) {
      Logger.logUpdate(logData);
      return { message: "Missing image file", success: false };
    }
    const response = await uploadWithR2PresignedUrl(file, {}, token);
    Logger.logUpdate(logData);
    return response;
  } catch (err) {
    console.error(err);
    UpdatePackageLogWithError(logData, 'uploadImage', err);
    return { message: "File Upload Failed", success: false };
  }
}

/**
 * Method to upload image to server
 * @param body FormData
 * @param token string?
 * @returns JSON | string | null
 */
export async function uploadImageV2(body: FormData, token: string = "") {
  const logData : any = Logger.logfunction("uploadImageV2");
  try {
    const response = await postUploadFormData(BaseUrl.uploadImageUrlWithSmall(), body, token);
    Logger.logUpdate(logData);
    return response;
  } catch (err) {
    console.error(err);
    UpdatePackageLogWithError(logData, 'uploadImageV2', err);
    return null;
  }
}

/**
 * Method to upload file to server
 * @param body FormData
 * @param token string?
 * @returns JSON | string | null
 */
export async function uploadFile(body: FormData, token: string = "") {
  const logData : any = Logger.logfunction("uploadFile");
  try {
    const response = await uploadR2Storage(body, token);
    Logger.logUpdate(logData);
    return response;
  } catch (err) {
    console.error(err);
    UpdatePackageLogWithError(logData, 'uploadFile', err);
    return null;
  }
}


export async function getUploadFileLimit(){
  let header = await GetRequestHeader();
  let output = {};
  try{
    const response = await fetchWithAuthRetry(BaseUrl.UploadFileLimitUrl(),{
      method: 'GET',
      headers: header
    });
    if(response.ok){
      output = await response.json();
    }
  }
  catch(err){
    console.error(err);
    throw err;
  }
  return output;
}
