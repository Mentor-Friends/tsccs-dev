import { CreateTheTextDataUrl } from "../../Constants/ApiConstants";
import { TheTexts } from "../../DataStructures/TheTexts";
import { BaseUrl } from "../../DataStructures/BaseUrl";
import { GetRequestHeader } from "../../Services/Security/GetRequestHeader";
export async function CreateTextData(textData: TheTexts){
    try{
            var header = GetRequestHeader();
            const response = await fetch(BaseUrl.CreateTheTextDataUrl(),{
                method: 'POST',
                headers:header,
                body: JSON.stringify(textData),
            });
            if(!response.ok){
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
        return {};
      }
}