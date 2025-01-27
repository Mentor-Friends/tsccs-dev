import { BaseUrl } from "../../DataStructures/BaseUrl";
import { HandleHttpError, HandleInternalError } from "../../Services/Common/ErrorPosting";
import { GetRequestHeader, GetRequestHeaderWithAuthorization } from "../../Services/Security/GetRequestHeader";
import { Concept, ConceptsData, CreateDefaultConcept, Logger } from "../../app";
export async function TranslateLocalToReal(conceptId: number){
  Logger.logfunction(TranslateLocalToReal, arguments);
  let result:Concept = CreateDefaultConcept();
    try{

            var header = GetRequestHeaderWithAuthorization('application/x-www-form-urlencoded');

            const response = await fetch(BaseUrl.GetRealConceptById(),{
              method: 'POST',
              headers: header,
              body: `id=${conceptId}`
          });
          if(response.ok){
            result = await response.json() as Concept;
            if(result.id > 0){
                ConceptsData.AddConcept(result);
            }
            return result;
          }
          else{
            console.log("Error in Getting Translating concept Error", response.status);
            HandleHttpError(response);
          }


    }
    catch (error) {
        if (error instanceof Error) {
          console.log('Error in Getting Translating concept error message: ', error);
        } else {
          console.log('Error in Getting Translating concept unexpected error: ', error);
        }
        HandleInternalError(error,BaseUrl.GetRealConceptById() );
      }

      return result;

}