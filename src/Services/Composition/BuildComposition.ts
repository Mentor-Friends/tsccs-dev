
  import { ConceptsData } from '../../DataStructures/ConceptData';
  import { Connection } from '../../DataStructures/Connection';
  import { Concept } from '../../DataStructures/Concept';
  import { CreateDefaultConcept } from '../../Services/CreateDefaultConcept';
  import {default as GetTheConcept} from '../../Services/GetTheConcept';
  // this is a different type of recurisve fetch because here all the concepts and connections are passed as it is
  // so there is no need to query the connections and concepts from outside
  // if the concept connection is not found then it will go to the backend to fetch it
  export async function recursiveFetchNew(
    id: number,
    connectionList: Connection[],
    conceptList: Concept[],
    compositionList: number[],
    visitedConcepts: number[] = []
  ) {
    let output: any = {};
    const arroutput: any = []
    if (id == 0) {
      return ''
    }
  
    // get concept from a list of concepts
    let concept = getConceptFromList(conceptList, id)
  
    // if we cannot find the concept from the concept list then find it from the backend
    if ((concept == null || concept.id == 0) && id != null && id != undefined) {
      // get the concepts tries to find it from the binary tree else from the backend if cannot find it then
      // it will become null
      const conceptString = await GetTheConcept(id)
      concept = conceptString as Concept
    }
    if (concept.id != 0) {
      // if the concept type is non existent then you have to get the type from the backend
      if (concept.type == null) {
        // get the concept type id from the concept which is stored in typeId
        const toConceptTypeId: number = concept.typeId
  
        //
        let toConceptType = getConceptFromList(conceptList, toConceptTypeId)
  
        concept.type = toConceptType
        if (
          toConceptType == null &&
          toConceptTypeId != null &&
          toConceptTypeId != undefined
        ) {
          const conceptString = await GetTheConcept(toConceptTypeId)
          toConceptType = conceptString as Concept
          concept.type = toConceptType
        }
      }
    }
  
    //let mainString = concept?.type?.characterValue ?? ''
  
    if (!compositionList.includes(id)) {
      return concept?.characterValue
    } else {
      if(visitedConcepts.includes(id)){
        return "";
      }
      else{
        visitedConcepts.push(id);
      }
      // loop over all the connections
      for (let i = 0; i < connectionList.length; i++) {
        // if the connection has the id that has been passed in the recursion
        // oftheconceptId -----> toTheConceptId
        // this only gives the valid concept id that are inside of this id
        if (connectionList[i].ofTheConceptId == id) {
          // then take out the toTheConceptId from the connection
          const toConceptId = connectionList[i].toTheConceptId
  
          // convert the toTheConceptId to a real Concept Object
          let toConcept = getConceptFromList(conceptList, toConceptId)
  
          // get the concept
          if (
            (toConcept == null || toConcept.id == 0) &&
            toConceptId != null &&
            toConceptId != undefined
          ) {
            const conceptString = await GetTheConcept(toConceptId)
            toConcept = conceptString as Concept
          }
          // if the toConcept is valid
          if (toConcept.id != 0) {
            if (toConcept?.type == null) {
              // get the type in casee type is not defined
              const toConceptTypeId: number = toConcept.typeId
              let toConceptType = await ConceptsData.GetConcept(toConceptTypeId)
  
              toConcept.type = toConceptType
              if (
                toConceptType == null &&
                toConceptTypeId != null &&
                toConceptTypeId != undefined
              ) {
                const conceptString = await GetTheConcept(toConceptTypeId)
                toConceptType = conceptString as Concept
                toConcept.type = toConceptType
              }
            }
          }
  
          // the regex to filter out the the_ from the type concepts
          const regex = 'the_'
  
          // then create the key of the key value pair that is the type of the concept
          const localmainString = toConcept?.type?.characterValue ?? ''
  
          // replace the the_ with an empty string
          const localKey = localmainString.replace(regex, '')
  
          // if the  type  is a number then put it inside of an object
          if (isNaN(Number(localKey))) {
            if (localKey) {
              const result = await recursiveFetchNew(
                toConceptId,
                connectionList,
                conceptList,
                compositionList,
                visitedConcepts
              )
              output[localKey] =  result

            }
          } else {
            // if the type is a number then put it inside an array
            const result = await recursiveFetchNew(
              toConceptId,
              connectionList,
              conceptList,
              compositionList,
              visitedConcepts
            )
            arroutput[localKey] =  result
            output = arroutput

          }

        }
      }
    }
    return output;
  
  }
  
  // gets the concept from the list of concepts using the conceptId
  function getConceptFromList(conceptList: Concept[], conceptId: number) {
    let concept: Concept = CreateDefaultConcept()
    for (let i = 0; i < conceptList.length; i++) {
      if (conceptId == conceptList[i].id) {
        concept = conceptList[i]
        return concept
      }
    }
    return concept
  }
  