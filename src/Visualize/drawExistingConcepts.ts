import { GetAllConnectionsOfComposition, GetLinkerConnectionFromConcepts, GetTheConcept } from "../app";
import { ConceptCircle } from "./ConceptCircle";
import { ConceptCircleList } from "./ConceptCircleList";
import { ConnectionLine } from "./ConnectionLine";
import { Concept, Connection, CreateDefaultConcept } from "../app";
export async function printAllConcepts(ctx:any){

for(let i=1;i<20; i++){
    var concept = await GetTheConcept(i);
    var conceptCircle = new ConceptCircle(concept,ctx);
    ConceptCircleList.drawList.push(conceptCircle);
}
}

export async function getLinkData(connection: Connection,ctx: any){
    await printConcept(ctx, connection.toTheConceptId);
    //await printAllConceptsOfIdWithoutData(ctx,connection.toTheConceptId);
    new ConnectionLine(connection,ctx);
}

export async function getLinkDataOf(connection:Connection,ctx: any){
    await printConcept(ctx, connection.ofTheConceptId);
    //await printAllConceptsOfIdWithoutData(ctx,connection.toTheConceptId);
    new ConnectionLine(connection,ctx);
}




export async function printAllConceptsOfIdWithoutData(ctx:any,id:number){
    var connections =  await GetAllConnectionsOfComposition(id);
     var printConnections = [];
     var printConcepts: any = {};
     var conceptIds = [];
     conceptIds.push(id);
     let fakeConcept = CreateDefaultConcept();
     let mainConceptCircle = new ConceptCircle(fakeConcept, ctx);
     console.log("this is the concept id", conceptIds);
    for(let i=0 ; i< connections.length; i++){
     if(!checkIfExists(connections[i].ofTheConceptId, conceptIds))
     {
         conceptIds.push(connections[i].ofTheConceptId);
     }
     if(!checkIfExists(connections[i].toTheConceptId,conceptIds)){
         conceptIds.push(connections[i].toTheConceptId);
     }
 
    }
    for(let i=0;i<conceptIds.length; i++){
         var concept = await GetTheConcept(conceptIds[i]);
         var conceptCircle = new ConceptCircle(concept,ctx);
         if(concept){
             if(concept.id == id){
                 conceptCircle.makeComposition();
                 mainConceptCircle = conceptCircle;
              //  ConceptCircleList.drawList.push(conceptCircle);
              ConceptCircleList.addNewConceptCircle(conceptCircle);

             }
         printConcepts[concept.id] = conceptCircle;
 
         }
     }
     var conceptCount = {};
     mainConceptCircle.dataConnections = connections;
    //  for(let i=0; i<ConceptCircleList.drawList.length;i++){
    //      ConceptCircleList.drawList[i].drawAsPerParent();
    //      console.log(ConceptCircleList.drawList[i]);
    //  }
 
 }

 export async function printConcept(ctx:any, id:number){
    var concept = await GetTheConcept(id);
    var conceptCircle = new ConceptCircle(concept,ctx);
    if(concept){
        if(concept.id == id){
            conceptCircle.makeComposition();
          let  mainConceptCircle = conceptCircle;
         //  ConceptCircleList.drawList.push(conceptCircle);
         console.log(mainConceptCircle);
         ConceptCircleList.addNewConceptCircle(conceptCircle);

        }
 }
}

export async function printAllConceptsOfId(ctx:any,id:number){
   var connections =  await GetAllConnectionsOfComposition(id);
    var printConnections = [];
    var printConcepts:any = {};
    var conceptIds = [];
    conceptIds.push(id);
    console.log("this is the concept id", conceptIds);
   for(let i=0 ; i< connections.length; i++){
    if(!checkIfExists(connections[i].ofTheConceptId, conceptIds))
    {
        conceptIds.push(connections[i].ofTheConceptId);
    }
    if(!checkIfExists(connections[i].toTheConceptId,conceptIds)){
        conceptIds.push(connections[i].toTheConceptId);
    }

   }
   for(let i=0;i<conceptIds.length; i++){
        var concept = await GetTheConcept(conceptIds[i]);
        var conceptCircle = new ConceptCircle(concept,ctx);
        if(concept){
            if(concept.id == id){
                conceptCircle.makeComposition();
            }
        printConcepts[concept.id] = conceptCircle;

        }
        ConceptCircleList.drawList.push(conceptCircle);
    }
    var conceptCount = {};
    for(let j=0;j<connections.length; j++){
         new ConnectionLine(connections[j],ctx);
         var toTheConceptCircle = printConcepts[connections[j].toTheConceptId];
         var ofTheConceptCircle = printConcepts[connections[j].ofTheConceptId]
         if(toTheConceptCircle && ofTheConceptCircle){
            toTheConceptCircle.parent = ofTheConceptCircle;
            toTheConceptCircle.order = ofTheConceptCircle.childCount;
            ofTheConceptCircle.childCount = ofTheConceptCircle.childCount + 1;
         }
    }
    for(let i=0; i<ConceptCircleList.drawList.length;i++){
        ConceptCircleList.drawList[i].drawAsPerParent();
        console.log(ConceptCircleList.drawList[i]);
    }




}

export function checkIfExists(id:number,conceptIds:number[]){
    for(let i=0; i<conceptIds.length;i++ ){
        if(id == conceptIds[i]){
            return true;
        }
    }
    return false;
}





