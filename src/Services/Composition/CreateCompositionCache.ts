
import { Concept } from '../../DataStructures/Concept';
import { Connection } from '../../DataStructures/Connection';
import { CreateDefaultConcept } from '../CreateDefaultConcept';
import { Composition } from '../../DataStructures/Composition/Composition';
import MakeTheInstanceConcept from '../MakeTheInstanceConcept';
import { createTheConnection } from '../../Services/CreateTheConnection';

// create a composition with caching mechanism
export  async function CreateTheCompositionWithCache(
  json: any,
  ofTheConceptId: number | null = null,
  ofTheConceptUserId: number | null = null,
  mainKey: number | null = null,
  userId: number | null = null,
  accessId: number | null = null,
  sessionInformationId: number | null = null,
  composition: Composition | null = null,
) {
  const localUserId: number = userId ?? 999
  const localAccessId: number = accessId ?? 4
  const localSessionId: number = sessionInformationId ?? 999
  let MainKeyLocal: number = mainKey ?? 0
  let MainConcept = CreateDefaultConcept()
  if (composition == null) {
    // if no composition is passed then create a new composition
    composition = new Composition()
  }
  for (const key in json) {
    if( typeof json[key] == 'object' || Array.isArray(json[key])){
      const conceptString = await MakeTheInstanceConcept(
        key,
        '',
        true,
        localUserId,
        localAccessId,
        localSessionId,
      )
      const concept = conceptString as Concept
   // if (typeof json[key] != 'string' && typeof json[key] != 'number') {
      if (ofTheConceptId == null && ofTheConceptUserId == null) {
        // if there is no parent conceptId and conceptUserId passed then we know this is the main concept
        // everything is related to this concept.
        let localMainKey = MainKeyLocal
        MainConcept = concept
        localMainKey = concept.id
        MainKeyLocal = concept.id
        composition.concepts.push(concept)
        composition.id = concept.id
        await CreateTheCompositionWithCache(
          json[key],
          concept.id,
          concept.userId,
          localMainKey,
          userId,
          accessId,
          sessionInformationId,
          composition,
        )

      } else {
        // this is the concept which has parent passed onto it and this is a subcomposition
        const ofThe: number = ofTheConceptId ?? 999
        const ofTheUser: number = ofTheConceptUserId ?? 999
        const localMainKey = MainKeyLocal

        MainConcept = concept;
        composition.concepts.push(concept)
        const connectionString = await createTheConnection(
          ofThe,
          ofTheUser,
          concept.id,
          localMainKey

        )
        const connection = connectionString as Connection
        composition.connections.push(connection)
        await CreateTheCompositionWithCache(
          json[key],
          concept.id,
          concept.userId,
          localMainKey,
          userId,
          accessId,
          sessionInformationId,
          composition,
        )
      }
      if(json[key] != null && json[key] != undefined){
        composition.subcompositions.push(concept.id)
      }
    } else {
      // this is the part where the concept is now a key value pair and has the actual data
      const ofThe: number = ofTheConceptId ?? 999
      const ofTheUser: number = ofTheConceptUserId ?? 999
      const localMainKey = MainKeyLocal
      const conceptString = await MakeTheInstanceConcept(
        key,
        json[key],
        false,
        localUserId,
        localAccessId,
        localSessionId,
      )
      const concept = conceptString as Concept
      composition.concepts.push(concept)
      const connectionString = await createTheConnection(
        ofThe,
        ofTheUser,
        concept.id,
        localMainKey
      )
      const connection = connectionString as Connection
      composition.connections.push(connection)

    }
  }
  // return the main concept
  return MainConcept
}
