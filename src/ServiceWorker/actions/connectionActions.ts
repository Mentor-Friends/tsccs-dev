import { Actions } from ".";
import { CreateTheConnectionLocal } from "../../app";
import { CreateConnectionBetweenTwoConceptsLocal } from "../../Services/Local/CreateConnectionBetweenTwoConceptsLocal";

export const connectionActions: Actions = {
    CreateConnectionBetweenTwoConceptsLocal: async (payload) => {
        const data = await CreateConnectionBetweenTwoConceptsLocal(payload.ofTheConcept, payload.toTheConcept, payload.linker, payload.both)
        return {success: true, data}
    },
    
    // local
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