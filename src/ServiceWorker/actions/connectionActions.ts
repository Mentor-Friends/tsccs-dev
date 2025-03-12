import { Actions } from ".";
import { CreateConnectionBetweenTwoConcepts, CreateTheConnectionLocal, GetAllConnectionsOfCompositionBulk, GetConnectionBetweenTwoConceptsLinker, GetConnectionBulk, GetConnectionById, GetConnectionOfTheConcept } from "../../app";
import { CreateConnectionBetweenTwoConceptsLocal } from "../../Services/Local/CreateConnectionBetweenTwoConceptsLocal";
import { CreateConnection } from "../../Services/Local/CreateTheConnectionLocal";

export const connectionActions: Actions = {
    // get
  GetConnectionById: async (payload) => {
    const data = await GetConnectionById(payload.id)
    return { success: true, data }
  },
  GetConnectionBulk: async (payload) => {
    const data = await GetConnectionBulk(payload.connectionIds);
    return { success: true, data };
  },
  GetConnectionOfTheConcept: async (payload) => {
    const data = await GetConnectionOfTheConcept(payload.typeId, payload.ofTheConceptId, payload.userId, payload.inpage, payload.page)
    return { success:true, data }
  },
  GetAllConnectionsOfCompositionBulk: async (payload) => {
    const data = await GetAllConnectionsOfCompositionBulk(payload.composition_ids)
    return { success: true, data }
  },
    GetConnectionBetweenTwoConceptsLinker: async (payload) => {
        const data = await GetConnectionBetweenTwoConceptsLinker(payload.ofTheConcept, payload.toTheConcept, payload.linker, payload.fullLinker, payload.forward)
        return { success: true, data }
    },
    // create
    CreateConnectionBetweenTwoConcepts: async (payload) => {
        const data = await CreateConnectionBetweenTwoConcepts(payload.ofTheConcept, payload.toTheConcept, payload.linker, payload.both)
        return { success: true, data }
    },
    
    // local
    CreateConnectionBetweenTwoConceptsLocal: async (payload) => {
        const data = await CreateConnectionBetweenTwoConceptsLocal(payload.ofTheConcept, payload.toTheConcept, payload.linker, payload.both, payload.actions)
        return {success: true, data, actions: payload.actions}
    },
    CreateTheConnectionLocal: async (payload) => {
        const data = await CreateTheConnectionLocal(
            payload.ofTheConceptId, 
            payload.toTheConceptId, 
            payload.typeId, 
            payload.orderId, 
            payload.typeString, 
            payload.userId,
            payload.actions
        )
        return {success: true, data, actions: payload.actions}
    },
    CreateConnection: async (payload) => {
      const data = await CreateConnection(
          payload.ofTheConcept, 
          payload.toTheConcept, 
          payload.typeConcept, 
          payload.orderId, 
          payload.userId,
          payload.actions
      )
      return {success: true, data, actions: payload.actions}
  },
    
}