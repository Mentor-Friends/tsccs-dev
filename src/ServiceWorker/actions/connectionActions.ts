import { Actions } from ".";
import { CreateConnectionBetweenTwoConcepts, CreateTheConnectionLocal } from "../../app";
import { CreateConnectionBetweenTwoConceptsLocal } from "../../Services/Local/CreateConnectionBetweenTwoConceptsLocal";

export const connectionActions: Actions = {
    CreateConnectionBetweenTwoConcepts: async (payload) => {
        const data = await CreateConnectionBetweenTwoConcepts(payload.ofTheConcept, payload.toTheConcept, payload.linker, payload.both)
        return { success: true, data }
    },
    // local
    CreateConnectionBetweenTwoConceptsLocal: async (payload) => {
        const data = await CreateConnectionBetweenTwoConceptsLocal(payload.ofTheConcept, payload.toTheConcept, payload.linker, payload.both)
        return {success: true, data}
    },
    CreateTheConnectionLocal: async (payload) => {
        const data = await CreateTheConnectionLocal(
            payload.ofTheConceptId, 
            payload.toTheConceptId, 
            payload.typeId, 
            payload.orderId, 
            payload.typeString, 
            payload.userId
        )
        return {success: true, data}
    },
    
}