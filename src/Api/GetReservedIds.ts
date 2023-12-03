import { ConceptsData } from "./../DataStructures/ConceptData";
import { GetReservedIdUrl } from './../Constants/ApiConstants';
import { Concept } from "../DataStructures/Concept";
import { ReservedIds } from "../DataStructures/ReservedIds";
export async function GetReservedIds(){
    try{

            const response = await fetch(GetReservedIdUrl,{
                method: 'GET',
                headers:{
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            });
            if(!response.ok){
                throw new Error(`Error! status: ${response.status}`);
            }
             const result = await response.json();
             for(var i=0; i< result.length; i++){
                ReservedIds.AddId(result[i]);
             }
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