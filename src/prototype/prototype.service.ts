import { Concept, Connection, CreateDefaultConcept, CreateTheConnectionLocal, InnerActions, LocalTransaction, MakeTheInstanceConceptLocal, MakeTheTypeConceptLocal } from "../app";
import { ConceptsToDraw } from "../DataStructures/ConceptsToDraw";
import { Prototype } from "../DataStructures/Prototype/Prototype";
import { PrototypeOption } from "../DataStructures/Prototype/PrototypeOption";
import { QuerySelector } from "../DataStructures/Prototype/QuerySelector";
import { MergeTwoArrays } from "../Services/Common/MergeArrays";
import CreateTheConceptLocal from "../Services/Local/CreateTheConceptLocal";

export async function createPrototypeLocal(prototype:Prototype, passedTransaction:LocalTransaction|null = null){
  let allConcepts:Concept[] = [];
  let allConnections: Connection[] = [];
  let requiredConnections: Connection[] = [];
  let mainPrototype:Concept = CreateDefaultConcept();


  try{
    if(passedTransaction == null ){
      passedTransaction = new LocalTransaction()
      await passedTransaction.initialize();
    }
    let optionalConnections:Connection[] = [];
    if(prototype.isCompositional){
      mainPrototype = await addCompositionPrototype(prototype.prototype, allConcepts,allConnections, passedTransaction);
  
      if(prototype.isQueryType){
        let QueryconceptsConnections = await addPrototypeSelector(prototype.querySelector, mainPrototype, passedTransaction);
        let queryConcepts = QueryconceptsConnections["concepts"];
        let queryConnections = QueryconceptsConnections["connections"];
        MergeTwoArrays(requiredConnections, queryConnections);
        MergeTwoArrays(allConcepts, queryConcepts);
      }
      if(prototype.options.length > 0)
      {
        let conceptsConnections = await addOptions(prototype.options, mainPrototype, passedTransaction);
        let optionConcepts = conceptsConnections["concepts"];
        let optionConnections = conceptsConnections["connections"];
        MergeTwoArrays(requiredConnections, optionConnections);
        MergeTwoArrays(allConcepts, optionConcepts);
      }
  
  
  
  
    }
    else{
      mainPrototype = await addPrototype(prototype.prototype, passedTransaction);
      requiredConnections = await AddPrototypeConnections(prototype.required, mainPrototype, allConcepts, passedTransaction, true);
      optionalConnections = await AddPrototypeConnections(prototype.optional, mainPrototype, allConcepts, passedTransaction);
      allConcepts.push(mainPrototype);
  
    }
  
  
  
    let connectionTypeString = typeSemantic(mainPrototype, true, true);
    let connectionType:Concept = await passedTransaction.MakeTheTypeConceptLocal(connectionTypeString, 999,999,999);
  
    allConcepts.push(connectionType);
  
    if(prototype.childPrototypes.length > 0){
      for(let i=0; i< prototype.childPrototypes.length; i++){
          let ChildPrototypeWrapper = await createPrototypeLocal(prototype.childPrototypes[i]);
          let childPrototype:Concept = ChildPrototypeWrapper["mainConcept"];
          let childConnections:Connection[] = ChildPrototypeWrapper["connections"];
          let childConcepts:Concept[] = ChildPrototypeWrapper["concepts"];
          let childConnection = await passedTransaction.CreateTheConnectionLocal(mainPrototype.id, childPrototype.id, connectionType.id, 1000, connectionTypeString,999);
          requiredConnections.push(childConnection);
          MergeTwoArrays(requiredConnections, childConnections);
          MergeTwoArrays(allConcepts, childConcepts);
          allConcepts.push(childPrototype);
      }
    }
    
    MergeTwoArrays(requiredConnections, optionalConnections);
    MergeTwoArrays(requiredConnections, allConnections);
    MergeTwoArrays(allConcepts, prototype.addedConcepts);
    MergeTwoArrays(requiredConnections, prototype.addedConnections);
    prototype.concepts = allConcepts;
    prototype.connections = requiredConnections;
    console.log("this is the connections", requiredConnections);

  }
  catch(err){
    // Revert all the actions performed
    passedTransaction?.rollbackTransaction()
  }
 
  return{
    "concepts": allConcepts,
    "connections": requiredConnections,
    "mainConcept": mainPrototype
  }
}


export async function addOptions(options:PrototypeOption[], mainPrototype:Concept, passedTransaction:LocalTransaction){
  
  let OptionConcepts:Concept[] = [];
  let OptionConnections:Connection[] = [];
  let connectionType = compositionalTypeSemantic(mainPrototype, true);
  let optionConnectionType:Concept = await passedTransaction.MakeTheTypeConceptLocal(connectionType, 999, 999, 999);
  for (let i=0; i<options.length; i++) {
      let key = options[i].type;
      let value = options[i].value;
      let concept = await passedTransaction.MakeTheInstanceConceptLocal(key, value, false, 999, 999, 999);
      OptionConcepts.push(concept);
      let connection = await passedTransaction.CreateTheConnectionLocal(mainPrototype.id, concept.id, optionConnectionType.id, 1000, connectionType,999);
      OptionConnections.push(connection);
  }


  return {
    "concepts": OptionConcepts,
    "connections": OptionConnections
  }
}


export async function addPrototypeSelector(selector:QuerySelector|null, mainPrototype:Concept,passedTransaction:LocalTransaction){

  let OptionConcepts:Concept[] = [];
  let OptionConnections:Connection[] = [];
  let filterConnectionTypeString = filterTypeSemantic(mainPrototype, true);
  let selectorConnectionTypeString = selectorTypeSemantic(mainPrototype, true);
  let filterConnectionType:Concept = await passedTransaction.MakeTheTypeConceptLocal(filterConnectionTypeString, 999, 999, 999);
  let selectorConnectionType:Concept = await passedTransaction.MakeTheTypeConceptLocal(selectorConnectionTypeString, 999, 999, 999);

  if(selector !=null){

    let selectorType = await passedTransaction.MakeTheTypeConceptLocal(selector.selector,999,999,999 );
    OptionConcepts.push(selectorType);
    let filterType = await passedTransaction.MakeTheTypeConceptLocal(selector.filterType, 999, 999,999);
    OptionConcepts.push(selectorType);
    OptionConcepts.push(filterType);
    let selectorConnection = await passedTransaction.CreateTheConnectionLocal(mainPrototype.id, selectorType.id, selectorConnectionType.id, 1000, selectorConnectionTypeString,999);
    OptionConnections.push(selectorConnection);
    let filterConnection = await passedTransaction.CreateTheConnectionLocal(mainPrototype.id, filterType.id, filterConnectionType.id, 1000, filterConnectionTypeString,999);
    OptionConnections.push(filterConnection);


  }


  return {
    "concepts": OptionConcepts,
    "connections": OptionConnections
  }
}


export async function addPrototype(type:string, passedTransaction:LocalTransaction){
        let prototypeOf = await passedTransaction.MakeTheTypeConceptLocal("the_prototype_of", 999, 999, 999);
        let prototypeOfConcept = await passedTransaction.MakeTheTypeConceptLocal(type, 999,999,999);
        let concept  = await CreatePrototypeConcept(prototypeOf, prototypeOfConcept, 999, passedTransaction);
        return concept;
}

export async function addCompositionPrototype(type:string, concepts:Concept[] , connections:Connection[], passedTransaction: LocalTransaction){
        let concept  = CreateDefaultConcept();
        let mainPrototype = await passedTransaction.MakeTheInstanceConceptLocal("the_composition", "", true, 999, 999, 999);
        let compositionalPrototypeConnection = await passedTransaction.MakeTheTypeConceptLocal("the_composition_type", 999, 999, 999);
        let prototypeConcept = await passedTransaction.MakeTheTypeConceptLocal(type, 999, 999, 999);
        let typeCompositionConnection = await passedTransaction.CreateTheConnectionLocal(mainPrototype.id, prototypeConcept.id, compositionalPrototypeConnection.id, 1000, "the_composition_type");
        concept = mainPrototype;
        concepts.push(compositionalPrototypeConnection);
        concepts.push(prototypeConcept);
        connections.push(typeCompositionConnection);
        return concept;
}

export async function CreatePrototypeConcept(prototypeConcept:Concept, typeConcept:Concept, userId:number, passedTransaction:LocalTransaction){
    let concept =  await passedTransaction.CreateTheConceptLocal("","",999, prototypeConcept.id, typeConcept.id, 4, false);
    concept.characterValue = typeConcept.characterValue;
    concept.typeCharacter = typeConcept.characterValue;
    concept.isComposition = true;
    concept.type = typeConcept;
    return concept;

}

export function typeSemantic(mainPrototype:Concept, required:boolean = true, isComposition:boolean = false){
    let connectionType = "the_prototype_of_" + mainPrototype.type?.characterValue ;
    if(required){
        connectionType = connectionType + "_requires";

    }
    else{
        connectionType = connectionType + "_optional";
    }
    if(isComposition){
        connectionType = connectionType + "_the_composition";
    }
    return connectionType;

}

export function compositionalTypeSemantic(mainPrototype:Concept, isOption:boolean = false){
  let connectionType = "the_composition_s_option";
  return connectionType;

}

export function filterTypeSemantic(mainPrototype:Concept, isOption:boolean = false){
  let connectionType = "the_composition_filter_type";
  return connectionType;

}

export function selectorTypeSemantic(mainPrototype:Concept, isOption:boolean = false){
  let connectionType = "the_composition_selector";
  return connectionType;

}

export async function AddPrototypeConnections(types:string[], prototype:Concept, allConcepts:Concept[], passedTransaction:LocalTransaction, required:boolean = false, isComposition:boolean = false){
    let concepts:Concept[] = [];
    let typeVariations:Concept[] = [];
    let userId:number = 999;
    let connections:Connection[] = [];
    let connectionType = typeSemantic(prototype, required, isComposition)



    let prototypeConnectionType:Concept = await passedTransaction.MakeTheTypeConceptLocal(connectionType, 999, 999, 999);
    allConcepts.push(prototypeConnectionType);
    for(let i=0;i<types.length; i++){
        let typeConcept:Concept = await passedTransaction.MakeTheTypeConceptLocal(types[i], 999, 999,999);
        typeVariations.push(typeConcept);


    } 

    for(let i=0; i<typeVariations.length; i++){
      let connection = await passedTransaction.CreateTheConnectionLocal(prototype.id, typeVariations[i].id, prototypeConnectionType.id, 1000, connectionType, 999);
      connections.push(connection);
    }

    for(let i=0; i<typeVariations.length; i++){
        allConcepts.push(typeVariations[i]);
    }

    return connections;

}
