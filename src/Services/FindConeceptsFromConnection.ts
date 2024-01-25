import { Connection } from "../DataStructures/Connection";
import { Concept } from "../DataStructures/Concept";
import { GetConceptBulk } from "../Api/GetConceptBulk";

export  async function FindConceptsFromConnections(connectionList:Connection[] = []){
    var ConceptList:number[] = [];
    if(connectionList.length > 0){
        for(let i=0;i < connectionList.length; i++){

          if(!ConceptList.includes(connectionList[i].ofTheConceptId )){
            ConceptList.push(connectionList[i].ofTheConceptId);
          }
          if(!ConceptList.includes(connectionList[i].toTheConceptId)){
            ConceptList.push(connectionList[i].toTheConceptId);
          }

        }
        await GetConceptBulk(ConceptList);

    }

}