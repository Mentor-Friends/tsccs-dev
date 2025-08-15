import { BaseUrl, Logger } from "../app";
import { UpdatePackageLogWithError } from "./Common/ErrorPosting";

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
    const formData = new FormData();
    let response: any;
    if (validDocumentFormats.includes(file.type)) {
      // File
      formData.append("file", file, file.name);
      response = await uploadFile(formData, token);
    } else if (validImageFormats.includes(file.type)) {
      // Image
      formData.append("image", file, file.name);
      response = await uploadImage(formData, token);
    } else {
      return { message: "Invalid File Format", success: false };
    }
    if (!response?.data) {
      return { message: "File Upload Failed", success: false };
    }
    Logger.logUpdate(logData);
    return { message: "Upload Success", success: true, url: response.data };
  } catch (err) {
    console.error(err);
    UpdatePackageLogWithError(logData, 'uploadAttachment', err);
    throw err;
  }
}

/**
 * Method to upload image to server
 * @param body FormData
 * @param token string?
 * @returns JSON | string | null
 */
export async function uploadImage(body: FormData, token: string = "") {
  const logData : any = Logger.logfunction("uploadImage");
  try {
    const response = await fetch(BaseUrl.uploadImageUrl(), {
      method: "POST",
      body,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      // Check content type before parsing
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("text/plain")) {
        console.info(response?.text());
      }
      const errorData = await response?.text();
      console.error(`${response.status} ${errorData}`); // Log error response data
      Logger.logUpdate(logData);
      return null;
    }
    return await response.json();
  } catch (err) {
    console.error(err);
    UpdatePackageLogWithError(logData, 'uploadImage', err);
    return null;
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
    const response = await fetch(BaseUrl.uploadImageUrlWithSmall(), {
      method: "POST",
      body,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      // Check content type before parsing
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("text/plain")) {
        console.info(response?.text());
      }
      const errorData = await response?.text();
      console.error(`${response.status} ${errorData}`); // Log error response data
      Logger.logUpdate(logData);
      return null;
    }
    return await response.json();
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
    const response = await fetch(BaseUrl.uploadFileUrl(), {
      method: "POST",
      body,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      // Check content type before parsing
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("text/plain")) {
        console.info(response.text());
      }
      const errorData = await response.text();
      console.error(`${response.status} ${errorData}`); // Log error response data
      return null;
    }
    Logger.logUpdate(logData);
    return await response.json();
  } catch (err) {
    console.error(err);
    UpdatePackageLogWithError(logData, 'uploadFile', err);
    return null;
  }
}
