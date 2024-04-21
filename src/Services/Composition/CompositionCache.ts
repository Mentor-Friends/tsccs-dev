
  import { Concept } from '../../DataStructures/Concept';
  import { Connection } from '../../DataStructures/Connection';
  import { ConceptsData } from '../../DataStructures/ConceptData';
  import { GetAllConnectionsOfComposition } from '../../Api/GetAllConnectionsOfComposition';
  import { GetConnectionBulk } from '../../Api/GetConnectionBulk';
  import { GetConcept } from '../../Api/GetConcept';
  import { recursiveFetchNew } from './BuildComposition'
  import { recursiveFetch } from '../GetComposition';
  import { Composition } from '../../DataStructures/Composition/Composition';
  import { CompositionBinaryTree } from '../../DataStructures/Composition/CompositionBinaryTree';
  import { BulkConceptGetterApi } from '../../Api/GetConceptBulk'
  
  // get the composition with the passed id
  // here an optional parameter is passed which will pass the internal connections if given
  // else the function is designed to get the internal connections itself
  export async function GetCompositionWithCache(
    id: number,
    connectionListPassed: Connection[] = [],
  ) {
    let connectionList: Connection[] = []
    const conceptIdList: number[] = []
    const returnOutput: any = {}
    let output: any = {}
    const x = await CompositionBinaryTree.getNodeFromTree(id)
    const compositionList: number[] = []
    let concept = await ConceptsData.GetConcept(id)
    if (concept.id == 0 && id != null && id != undefined) {
      const conceptString = await GetConcept(id)
      concept = conceptString as Concept
    }
    if (x == null) {
      let connectionListString: any = []
      if (connectionListPassed.length > 0) {
        connectionListString = getMyConnections(id, connectionListPassed)
      } else {
        connectionListString = await GetAllConnectionsOfComposition(id)
      }
      connectionList = connectionListString as Connection[]
      //connectionList = ConnectionData.GetConnectionsOfComposition(id);
  
      for (let i = 0; i < connectionList.length; i++) {
        if (!compositionList.includes(connectionList[i].ofTheConceptId)) {
          compositionList.push(connectionList[i].ofTheConceptId)
          conceptIdList.push(connectionList[i].ofTheConceptId)
        }
        if (!conceptIdList.includes(connectionList[i].toTheConceptId)) {
          conceptIdList.push(connectionList[i].toTheConceptId)
        }
      }
  
      SaveToCompositionCache(
        concept,
        connectionList,
        conceptIdList,
        compositionList,
      )
      output = await recursiveFetch(id, connectionList, compositionList)
    } else {
      output = x.value.cached
    }
  
    if (concept.id == 0) {
      return ''
    }
    const mainString = concept?.type?.characterValue ?? ''
    returnOutput[mainString] = output
    return returnOutput
  }
  
  // this gets the list of connections of a composition from a list of bulk connection pull
  function getMyConnections(id: number, connectionList: Connection[]) {
    const connections: Connection[] = []
    for (let i = 0; i < connectionList.length; i++) {
      if (connectionList[i].typeId == id) {
        connections.push(connectionList[i])
      }
    }
    return connections
  }
  
  // get the composition with the passed id
  // here an optional parameter is passed which will pass the internal connections if given
  // else the function is designed to get the internal connections itself
  // this function has a  format of data -- id
  export async function GetCompositionWithDataIdWithCache(
    id: number,
    connectionListPassed: Connection[] = [],
  ) {
    let connectionList: Connection[] = []
    const conceptIdList: number[] = []
    let output: any
    const returnOutput: any = {}
    const x = await CompositionBinaryTree.getNodeFromTree(id)
  
    const compositionList: number[] = []
    let concept = await ConceptsData.GetConcept(id)
    if (concept.id == 0 && id != null && id != undefined) {
      const conceptString = await GetConcept(id)
      concept = conceptString as Concept
    }
    if (x == null) {
      let connectionListString: any = []
      if (connectionListPassed.length > 0) {
        connectionListString = getMyConnections(id, connectionListPassed)
      } else {
        connectionListString = await GetAllConnectionsOfComposition(id)
      }
      connectionList = connectionListString as Connection[]
      //connectionList = ConnectionData.GetConnectionsOfComposition(id);
  
      for (let i = 0; i < connectionList.length; i++) {
        if (!compositionList.includes(connectionList[i].ofTheConceptId)) {
          compositionList.push(connectionList[i].ofTheConceptId)
          conceptIdList.push(connectionList[i].ofTheConceptId)
        }
        if (!conceptIdList.includes(connectionList[i].toTheConceptId)) {
          conceptIdList.push(connectionList[i].toTheConceptId)
        }
      }
  
      SaveToCompositionCache(
        concept,
        connectionList,
        conceptIdList,
        compositionList,
      )
      output = await recursiveFetch(id, connectionList, compositionList)
    } else {
      output = x.value.cached
    }
    if (concept.id == 0) {
      return ''
    }
    const mainString = concept?.type?.characterValue ?? ''
    returnOutput[mainString] = output
    const FinalReturn: any = {}
    FinalReturn['data'] = returnOutput
    FinalReturn['id'] = id
    return FinalReturn
  }
  
  // this function needs to be passed with bulk compositions and bulk internal connections of them
  // so that i can conver them to actual list of compositions
  export async function GetCompositionWithDataIdBulk(
    ids: number[],
    connections: number[],
  ) {
    let connectionList: Connection[] = []
    const compositions: any[] = []
    const newConnections = await GetConnectionBulk(connections)
    connectionList = newConnections as Connection[]
    for (let i = 0; i < ids.length; i++) {
      const output = await GetCompositionWithDataIdWithCache(ids[i], connectionList)
      if (output) {
        compositions.push(output)
      }
    }
    return compositions
  }
  
  async function SaveToCompositionCache(
    concept: Concept,
    connections: Connection[],
    conceptIdList: number[],
    numbers: number[],
  ) {
    const composition = new Composition()
    const concepts = await BulkConceptGetter(conceptIdList)
    composition.connections = connections
    composition.concepts = concepts
    composition.id = concept.id
    composition.subcompositions = numbers
    composition.mainConcept = concept
    const output = await recursiveFetchNew(
      concept.id,
      connections,
      concepts,
      numbers,
    )
    composition.cached = output
    CompositionBinaryTree.addCompositionToTree(composition)
  }
  
  async function BulkConceptGetter(conceptIds: number[]) {
    let conceptList: Concept[] = []
  
    const bulkConceptFetch: number[] = []
    for (let i = 0; i < conceptIds?.length; i++) {
      const conceptUse: Concept = await ConceptsData.GetConcept(conceptIds[i])
      if (conceptUse.id == 0) {
        bulkConceptFetch.push(conceptIds[i])
      } else {
        conceptList.push(conceptUse)
      }
    }
  
    if (bulkConceptFetch?.length == 0) {
      return conceptList
    } else {
      conceptList = await BulkConceptGetterApi(bulkConceptFetch)
    }
    return conceptList
  }
  