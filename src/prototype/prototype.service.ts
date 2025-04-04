import { Concept, Connection, CreateTheConnectionLocal, InnerActions, MakeTheTypeConceptLocal } from "../app";
import { ConceptsToDraw } from "../DataStructures/ConceptsToDraw";
import { Prototype } from "../DataStructures/Prototype/Prototype";
import CreateTheConceptLocal from "../Services/Local/CreateTheConceptLocal";

export async function createPrototypeLocal(prototype:Prototype){
    let allConcepts:Concept[] = [];
  let mainPrototype:Concept = await addPrototype(prototype.prototype);

  let requiredConnections = await AddPrototypeConnections(prototype.required, mainPrototype, allConcepts, true);
  let optionalConnections = await AddPrototypeConnections(prototype.optional, mainPrototype, allConcepts);
  allConcepts.push(mainPrototype);

  if(prototype.childPrototypes.length > 0){
    for(let i=0; i< prototype.childPrototypes.length; i++){
        await createPrototypeLocal(prototype.childPrototypes[i]);
        
    }
  }
  
  requiredConnections = [...requiredConnections, ...optionalConnections];

  prototype.concepts = [...allConcepts, ...prototype.addedConcepts];
  prototype.connections = [...requiredConnections, ...prototype.addedConnections];
  return{
    "concepts": allConcepts,
    "connections": requiredConnections
  }

}


export async function addPrototype(type:string){
    let prototypeOf = await MakeTheTypeConceptLocal("the_prototype_of", 999, 999, 999);
    let prototypeOfConcept = await MakeTheTypeConceptLocal(type, 999,999,999);
    let concept  = await CreatePrototypeConcept(prototypeOf, prototypeOfConcept, 999);
    return concept;
}

export async function CreatePrototypeConcept(prototypeConcept:Concept, typeConcept:Concept, userId:number){
    let concept =  await CreateTheConceptLocal("","",999, prototypeConcept.id, typeConcept.id, 4, false);
    concept.characterValue = typeConcept.characterValue;
    concept.typeCharacter = typeConcept.characterValue;
    concept.isComposition = true;
    concept.type = typeConcept;
    return concept;

}

export async function AddPrototypeConnections(types:string[], prototype:Concept, allConcepts:Concept[], required:boolean = false){
    let concepts:Concept[] = [];
    let typeVariations:Concept[] = [];
    let userId:number = 999;
    let connections:Connection[] = [];
    let connectionType = prototype.type?.characterValue + "_prototype";
    if(required){
        connectionType = connectionType + "_requires";

    }
    else{
        connectionType = connectionType + "_optional";
    }

    let prototypeConnectionType:Concept = await MakeTheTypeConceptLocal(connectionType, 999, 999, 999);
    allConcepts.push(prototypeConnectionType);
    for(let i=0;i<types.length; i++){
        let typeConcept:Concept = await MakeTheTypeConceptLocal(types[i], 999, 999,999);
        typeVariations.push(typeConcept);


    } 

    for(let i=0; i<typeVariations.length; i++){
      let connection = await CreateTheConnectionLocal(prototype.id, typeVariations[i].id, prototypeConnectionType.id, 1000, connectionType, 999);
      connections.push(connection);
    }

    for(let i=0; i<typeVariations.length; i++){
        allConcepts.push(typeVariations[i]);
    }

    return connections;

}