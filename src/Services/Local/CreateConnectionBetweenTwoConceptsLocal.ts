import { CreateTheConnectionLocal, LConcept, MakeTheInstanceConceptLocal } from "../../app";

export async function CreateConnectionBetweenTwoConceptsLocal(ofTheConcept: LConcept, toTheConcept: LConcept, linker:string, both:boolean = false){

    var userId:number = ofTheConcept.userId;

    if(both){
        let prefix1: string = toTheConcept.type?.characterValue + "_s";
        let linkerAdd1 = linker + "_by";
        let backwardLinker = prefix1 + "_" + linkerAdd1;  
        // if(count){
        //    await CountRelationship(linkerAdd1, toTheConcept, userId);
        //   }
        var connectionConceptReverse = await MakeTheInstanceConceptLocal("connection",backwardLinker,false,999,999,999);
        let pewCon = CreateTheConnectionLocal(toTheConcept.id, ofTheConcept.id, connectionConceptReverse.id, 1000)
    }
    let prefix: string = ofTheConcept.type?.characterValue + "_s";
    let linkerAdd = linker + "_s";
    let forwardLinker = prefix + "_" + linkerAdd;
    // if(count){
    // // await CountRelationship(linkerAdd, ofTheConcept, userId);
    // }
    var connectionConcept = await MakeTheInstanceConceptLocal("connection",forwardLinker,false,999,999,999);
    let newConnection = CreateTheConnectionLocal(ofTheConcept.id, toTheConcept.id, connectionConcept.id, 1000)
    return newConnection;
    }
