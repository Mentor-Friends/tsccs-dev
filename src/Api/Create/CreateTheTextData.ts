import { CreateTheTextDataUrl } from "../../Constants/ApiConstants";
import { TheTexts } from "../../DataStructures/TheTexts";
import { BaseUrl } from "../../DataStructures/BaseUrl";
import { GetRequestHeader } from "../../Services/Security/GetRequestHeader";
import { HandleHttpError } from "../../Services/Common/ErrorPosting";

/**
 * Creates text data on the backend server via API.
 *
 * Stores long-form text content (>255 characters) separately from concepts.
 * Used for text values that exceed the characterValue field length limit.
 *
 * @param textData - TheTexts object containing text data to store
 * @returns Created TheTexts object with server-assigned ID
 * @throws Error if HTTP request fails or server returns error status
 *
 * @example
 * const longText = await CreateTextData({
 *   data: "Very long text content that exceeds 255 characters...",
 *   userId: 42
 * });
 */
export async function CreateTextData(textData: TheTexts){
    try{
            var header = GetRequestHeader();
            const response = await fetch(BaseUrl.CreateTheTextDataUrl(),{
                method: 'POST',
                headers:header,
                body: JSON.stringify(textData),
            });
            if(!response.ok){
                HandleHttpError(response);
                throw new Error(`Error! status: ${response.status}`);
            }
             const resultString = await response.json();
            const result = resultString as TheTexts;

            return result;
    }
    catch (error) {
        if (error instanceof Error) {
          console.log('Create the text error message: ', error.message);
        } else {
          console.log('Create the text unexpected error: ', error);
        }
        throw error;
      }
}