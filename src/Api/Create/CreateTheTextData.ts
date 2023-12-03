import { CreateTheTextDataUrl } from "../../Constants/ApiConstants";
import { TheTexts } from "../../DataStructures/TheTexts";

export async function CreateTextData(textData: TheTexts){
    try{

            const response = await fetch(CreateTheTextDataUrl,{
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
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
          console.log('error message: ', error.message);
          return error.message;
        } else {
          console.log('unexpected error: ', error);
          return 'An unexpected error occurred';
        }
      }
}