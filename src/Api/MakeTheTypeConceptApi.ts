import { BaseUrl } from "../DataStructures/BaseUrl";
import { GetRequestHeader } from "../Services/Security/GetRequestHeader";
import { Concept } from "../DataStructures/Concept";
import { CreateDefaultConcept } from "../Services/CreateDefaultConcept";
import { ConceptsData, GetConceptByCharacter } from "../app";
import { GetConceptByCharacterAndCategory } from "../Services/ConceptFinding/GetConceptByCharacterAndCategory";
import { HandleHttpError } from "../Services/Common/ErrorPosting";

const conceptCache = new Map<string, Promise<Concept>>();

// This function is used to check the type concpet of a passed string
// if the text is "the_person" then the function finds the related concept
export async function MakeTheTypeConceptApi(type:string, userId:number){
  // create  a default concept with all defaulting to zero
  let concept = CreateDefaultConcept();

  // check the cache
  if (conceptCache.has(type)) return conceptCache.get(type) || concept;

  const makeTypeConcept = (async () => {
    try{
      // get the concept by character and category from the api
      concept = await GetConceptByCharacterAndCategory(type);
      if(concept.id == 0 || concept.typeId == 4){
        var header = GetRequestHeader('application/x-www-form-urlencoded');
        const response = await fetch(BaseUrl.MakeTheTypeConceptUrl(),{
          method: 'POST',
          headers: header,
          body: `type=${type}`
        });
        if(!response.ok){
          HandleHttpError(response);
          throw new Error(`Error! status: ${response.status}`);
        }
        let result = await response.json();
        concept = result as Concept;
        if(concept.id > 0) ConceptsData.AddConcept(concept);
      }
      return concept;
    }
    catch (error) {
      if (error instanceof Error) console.log('Make The Type Concept Api error : ', error.message);
      else console.log('Make The Type Concept Api error : ', error);
      throw error;
    }
    finally {
      conceptCache.delete(type); // Remove from cache after fetching
    }
  })()
  // set the cache when fetching
  conceptCache.set(type, makeTypeConcept);
  return makeTypeConcept;
}
