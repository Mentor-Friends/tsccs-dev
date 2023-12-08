import { ConceptsData } from "../DataStructures/ConceptData";
import { getFromDatabaseWithTypeOld } from "../Database/indexeddb";

export  async function GetDataFromIndexDb(){
    console.log("mai mai");

    var conceptList = await getFromDatabaseWithTypeOld("concept");

    console.log(conceptList);

        if(Array.isArray(conceptList)){
            for(var i=0 ;i < conceptList.length ;i++){
                ConceptsData.AddConcept(conceptList[i]);
            }

            console.log(ConceptsData.conceptsArray);
        }
 }