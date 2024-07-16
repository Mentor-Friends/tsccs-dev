import { BaseUrl } from "../../DataStructures/BaseUrl";
import { GetRequestHeader, GetRequestHeaderWithAuthorization } from "../../Services/Security/GetRequestHeader";
import { Concept, ConceptsData, CreateDefaultConcept } from "../../app";
export async function TranslateLocalToReal(conceptId: number){
  let result = CreateDefaultConcept();
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
          }
          return result;


    }
    catch (error) {
        if (error instanceof Error) {
          console.log('Error in Getting Translating concept error message: ', error);
        } else {
          console.log('Error in Getting Translating concept unexpected error: ', error);
        }
        return result;
      }
}