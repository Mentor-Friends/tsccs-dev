import { Concept, Connection, CreateDefaultConcept, CreateTheConnectionLocal, InnerActions, LocalTransaction, MakeTheInstanceConceptLocal, MakeTheTypeConceptLocal } from "../app";
import { ConceptsToDraw } from "../DataStructures/ConceptsToDraw";
import { Prototype } from "../DataStructures/Prototype/Prototype";
import CreateTheConceptLocal from "../Services/Local/CreateTheConceptLocal";

export async function createPrototypeLocal(prototype:Prototype){

  let allConcepts:Concept[] = [];
  let mainPrototype:Concept = await addPrototype(prototype.prototype, prototype.isCompositional);


  let requiredConnections = await AddPrototypeConnections(prototype.required, mainPrototype, allConcepts, true);
  let optionalConnections = await AddPrototypeConnections(prototype.optional, mainPrototype, allConcepts);
  allConcepts.push(mainPrototype);

  if(prototype.childPrototypes.length > 0){
    for(let i=0; i< prototype.childPrototypes.length; i++){
        let ChildPrototypeWrapper = await createPrototypeLocal(prototype.childPrototypes[i]);
        let childPrototype:Concept = ChildPrototypeWrapper["mainConcept"];
        let connectionTypeString = typeSemantic(mainPrototype, true, true)
        let connectionType:Concept = await MakeTheTypeConceptLocal(connectionTypeString, 999,999,999);
        await CreateTheConnectionLocal(mainPrototype.id, childPrototype.id, connectionType.id, 1000, connectionTypeString,999);
    }
  }
  
  requiredConnections = [...requiredConnections, ...optionalConnections];

  prototype.concepts = [...allConcepts, ...prototype.addedConcepts];
  prototype.connections = [...requiredConnections, ...prototype.addedConnections];
  return{
    "concepts": allConcepts,
    "connections": requiredConnections,
    "mainConcept": mainPrototype
  }

}


export async function addPrototype(type:string, isComposition:boolean = false){
    let concept  = CreateDefaultConcept();
    if(isComposition){
        let mainPrototype = await MakeTheInstanceConceptLocal("the_composition", "", true, 999, 999, 999);
        let compositionalPrototypeConnection = await MakeTheTypeConceptLocal("the_composition_type", 999, 999, 999);
        let prototypeConcept = await MakeTheTypeConceptLocal(type, 999, 999, 999);
        await CreateTheConnectionLocal(mainPrototype.id, prototypeConcept.id, compositionalPrototypeConnection.id, 1000, "the_composition_type");
        concept = mainPrototype;
    }
    else{
        let prototypeOf = await MakeTheTypeConceptLocal("the_prototype_of", 999, 999, 999);
        let prototypeOfConcept = await MakeTheTypeConceptLocal(type, 999,999,999);
        concept  = await CreatePrototypeConcept(prototypeOf, prototypeOfConcept, 999);
    }

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

export function typeSemantic(mainPrototype:Concept, required:boolean = true, isComposition:boolean = false){
    let connectionType = mainPrototype.type?.characterValue + "_prototype";
    if(required){
        connectionType = connectionType + "_requires";

    }
    else{
        connectionType = connectionType + "_optional";
    }
    if(isComposition){
        connectionType = connectionType + "the_composition";
    }
    return connectionType;

}

export async function AddPrototypeConnections(types:string[], prototype:Concept, allConcepts:Concept[], required:boolean = false, isComposition:boolean = false){
    let concepts:Concept[] = [];
    let typeVariations:Concept[] = [];
    let userId:number = 999;
    let connections:Connection[] = [];
    let connectionType = typeSemantic(prototype, required, isComposition)



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
