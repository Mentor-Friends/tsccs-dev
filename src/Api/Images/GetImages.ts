import { BaseUrl } from "../../app";
import { HandleHttpError } from "../../Services/Common/ErrorPosting";

/**
 * Retrieves an image by name from the cached images endpoint.
 * Returns a readable stream for the image data.
 *
 * @param imageName - Name/identifier of the image to retrieve
 * @returns Promise resolving to ReadableStream of image data, or null/undefined on error
 * @throws Image stream on error (legacy behavior)
 *
 * @example
 * const imageStream = await GetImageApi("profile-pic-123.jpg");
 * if (imageStream) {
 *   // Process image stream
 * }
 */
export async function GetImageApi(imageName: string):Promise<ReadableStream<Uint8Array> | null | undefined>{
    let image;
    try{

        const response = await fetch(BaseUrl.GetCachedImage(imageName),{
              method: 'GET',
          });
          if(response.ok){
            image = response.body;
          }
          else{
            console.log("Error in Getting Image", response.status);
            HandleHttpError(response);
          }
          return image;


    }
    catch (error) {
        if (error instanceof Error) {
          console.log('Error in Getting Local concept by character value error message: ', error);
        } else {
          console.log('Error in Getting Local concept by character value unexpected error: ', error);
        }
        throw image;
      }
}