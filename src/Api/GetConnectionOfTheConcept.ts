import { ConceptsData } from "./../DataStructures/ConceptData";
import {  GetAllConnectionsOfConceptUrl } from './../Constants/ApiConstants';
import { Concept } from "../DataStructures/Concept";
import { TheCharacter } from "../DataStructures/TheCharacter";
import { Connection } from "../DataStructures/Connection";
export async function GetConnectionOfTheConcept(typeId: number, ofTheConceptId:number, userId:number, inpage:number=10, page:number=1 ){
    try{
        var urlencoded = new URLSearchParams();
        urlencoded.append("typeId", `${typeId}`);
        urlencoded.append("ofTheConceptId", `${ofTheConceptId}`);
        urlencoded.append("userId", `${userId}`);
        urlencoded.append("inpage", `${inpage}`);
        urlencoded.append("page", `${page}`);
            const response = await fetch(GetAllConnectionsOfConceptUrl,{
                method: 'POST',
                headers:{
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: urlencoded
            });
            if(!response.ok){
                throw new Error(`Error! status: ${response.status}`);
            }
             const result = await response.json() as Connection[];
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