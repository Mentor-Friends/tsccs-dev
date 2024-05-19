import { BaseUrl } from "../DataStructures/BaseUrl";
import { GetRequestHeader } from "../Services/Security/GetRequestHeader";
import { Concept } from "../DataStructures/Concept";
import { CreateDefaultConcept } from "../Services/CreateDefaultConcept";
import { GetConceptByCharacter } from "../app";
export async function MakeTheTypeConceptApi(type:string, userId:number){
    let concept = CreateDefaultConcept();
    try{
        concept = await GetConceptByCharacter(type);
        if(concept.id == 0 || concept.typeId == 4){
            var header = GetRequestHeader('application/x-www-form-urlencoded');
            const response = await fetch(BaseUrl.MakeTheTypeConceptUrl(),{
              method: 'POST',
              headers: header,
              body: `type=${type}`
            });
            if(!response.ok){
                throw new Error(`Error! status: ${response.status}`);
            }
            let result = await response.json();
            concept = result as Concept;
      
        }
        return concept;




      }
      catch (error) {
        if (error instanceof Error) {
          console.log('Make The Type Concept Api error : ', error.message);
        } else {
          console.log('Make The Type Concept Api error : ', error);
        }
        return concept;
      }
}