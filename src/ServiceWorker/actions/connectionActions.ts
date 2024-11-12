import { Actions } from ".";
import { CreateConnectionBetweenTwoConceptsLocal } from "../../Services/Local/CreateConnectionBetweenTwoConceptsLocal";

export const connectionActions: Actions = {
    CreateConnectionBetweenTwoConceptsLocal: async (payload) => {
        const data = await CreateConnectionBetweenTwoConceptsLocal(payload.ofTheConcept, payload.toTheConcept, payload.linker, payload.both)
        return {success: true, data}
    }
}