import { BaseUrl } from "../../app";
import { HandleHttpError } from "../../Services/Common/ErrorPosting";

export async function GetImageApi(imageName: string){
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