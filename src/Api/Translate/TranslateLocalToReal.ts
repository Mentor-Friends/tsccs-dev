import { BaseUrl } from "../../DataStructures/BaseUrl";
import { HandleHttpError, HandleInternalError, UpdatePackageLogWithError } from "../../Services/Common/ErrorPosting";
import { GetRequestHeader, GetRequestHeaderWithAuthorization } from "../../Services/Security/GetRequestHeader";
import { Concept, ConceptsData, CreateDefaultConcept, Logger } from "../../app";

/**
 * Translates a local concept ID to its real backend concept.
 * Fetches the actual concept from backend and caches it in ConceptsData.
 *
 * @param conceptId - Local concept ID to translate
 * @returns Real Concept object from backend, or default concept on error
 *
 * @example
 * const realConcept = await TranslateLocalToReal(123);
 */
export async function TranslateLocalToReal(conceptId: number){
  const logData : any = Logger.logfunction("TranslateLocalToReal", arguments);
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

          Logger.logUpdate(logData);


    }
    catch (error) {
        if (error instanceof Error) {
          console.log('Error in Getting Translating concept error message: ', error);
        } else {
          console.log('Error in Getting Translating concept unexpected error: ', error);
        }
        HandleInternalError(error,BaseUrl.GetRealConceptById() );
        UpdatePackageLogWithError(logData, 'TranslateLocalToReal', error);
      }

      return result;

}