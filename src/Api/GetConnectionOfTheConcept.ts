import { ConceptsData } from "./../DataStructures/ConceptData";
import {  GetAllConnectionsOfConceptUrl } from './../Constants/ApiConstants';
import { Concept } from "../DataStructures/Concept";
import { TheCharacter } from "../DataStructures/TheCharacter";
import { Connection } from "../DataStructures/Connection";
import { BaseUrl } from "../DataStructures/BaseUrl";
import { GetRequestHeader } from "../Services/Security/GetRequestHeader";
import { HandleHttpError, HandleInternalError } from "../Services/Common/ErrorPosting";
import { sendMessage, serviceWorker } from "../app";

export async function GetConnectionOfTheConcept(typeId: number, ofTheConceptId:number, userId:number, inpage:number=10, page:number=1 ){
  if (serviceWorker) {
    const res: any = await sendMessage('GetConnectionOfTheConcept', {typeId, ofTheConceptId, userId, inpage, page})
    // console.log('data received from sw', res)
    return res.data
  }

  let connectionList:Connection[] = []; 
  try{
        let urlencoded = new URLSearchParams();
        urlencoded.append("typeId", `${typeId}`);
        urlencoded.append("ofTheConceptId", `${ofTheConceptId}`);
        urlencoded.append("userId", `${userId}`);
        urlencoded.append("inpage", `${inpage}`);
        urlencoded.append("page", `${page}`);
        let header = GetRequestHeader('application/x-www-form-urlencoded');
            const response = await fetch(BaseUrl.GetAllConnectionsOfConceptUrl(),{
                method: 'POST',
                headers: header,
                body: urlencoded
            });
            if(response.ok){
              connectionList = await response.json() as Connection[];
            }
            else{
              HandleHttpError(response);
              console.log("Get connection of concept error", response.status);
            }
            return connectionList;
    }
    catch (error) {
        if (error instanceof Error) {
          console.log('Get connection of concept  error message: ', error.message);
        } else {
          console.log('Get connection of concept unexpected error: ', error);
        }
       HandleInternalError(error, BaseUrl.GetAllConnectionsOfConceptUrl());
      }
}