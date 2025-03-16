import { 
    Concept,
    CreateConnectionBetweenEntityLocal, 
    CreateConnectionBetweenTwoConcepts, 
    CreateTheConnectionLocal, 
    FilterSearch, 
    FreeschemaQuery, 
    LocalSyncData, 
    MakeTheTypeConceptLocal 
} from "../app";

import { TokenStorage } from "../DataStructures/Security/TokenStorage";

/**
 * Prototype Concept with a specific type and its connections
 */
export class ProtoType {
    private prototypeTypeConcept: Concept;
    private prototypeTypeCharacter: string;

    /**
     * Creates a prototype instance and initializes it automatically
     * @param inputType - Type of prototype
     */
    private constructor(prototypeConcept: Concept) {
        this.prototypeTypeConcept = prototypeConcept;
        this.prototypeTypeCharacter = prototypeConcept.characterValue;
    }

    /**
     * Returns a formatted prototype ID as an object
     * @param inputType - Type Concept value 
     * @returns Formatted prototype object 
     */
    private static formatTypeConcept(inputType: string): string {
        let formattedName = inputType;
        if (!formattedName.startsWith("the_")) {
            formattedName = "the_" + formattedName;
        }

        return formattedName;
    }

    /**
     * Creates or returns a type concept prototype
     * @param ofTypeConcept - Type concept to create a prototype for
     * @returns The created prototype concept object
     */
    private static async createPrototypeTypeConcept(ofTypeConcept: string): Promise<Concept> {
        const sessionId = TokenStorage.sessionId ? Number(TokenStorage.sessionId) : NaN;
        const userId = 998;

        let formattedType = ProtoType.formatTypeConcept(ofTypeConcept);
        
        // Add suffix '_prototype'
        if (!formattedType.endsWith("_prototype")) {
            formattedType += "_prototype";
        }

        const conceptDetail: Concept = await MakeTheTypeConceptLocal(formattedType, sessionId, userId, userId);
        return conceptDetail;
    }

    /**
     * Initializes the prototype asynchronously and returns the instance
     * @returns The initialized ProtoType instance
     */
    static async create(inputType: string): Promise<ProtoType> {
        const conceptObject = await ProtoType.createPrototypeTypeConcept(inputType);
        return new ProtoType(conceptObject);
    }

    /**
     * Adds a connection to the prototype concept
     * @param toTypeConcept - The name of the concept being connected
     * @param connectionType - The type of connection [ "requires" or "optional"]
     */
    async addConnection(toTypeConcept: string, connectionType: "requires" | "optional"): Promise<void> {
        const sessionId = TokenStorage.sessionId ? Number(TokenStorage.sessionId) : NaN;
        const userId = 998;

        toTypeConcept = ProtoType.formatTypeConcept(toTypeConcept);
        const targetConcept: Concept = await MakeTheTypeConceptLocal(toTypeConcept, sessionId, userId, userId);
        const connectionTypeString:string = `${this.prototypeTypeCharacter}_${connectionType}`;

        // Validate the connection from of_the_concept type is already exist to to_the_concept type
        let validateSource: FreeschemaQuery = new FreeschemaQuery();
        validateSource.type = this.prototypeTypeCharacter;
        validateSource.name = "top"

        let filterDestination: FilterSearch = new FilterSearch();
        filterDestination.type = toTypeConcept;

        

        console.log("Source : ", this.prototypeTypeConcept);
        console.log("Destination : ", targetConcept);
        console.log("The Connection Type String is : ", connectionTypeString);
        const connectionConcept : Concept = await MakeTheTypeConceptLocal(connectionTypeString, sessionId, userId, userId);
        console.log("Linker : ", connectionConcept);

        await CreateTheConnectionLocal(this.prototypeTypeConcept.id, targetConcept.id, connectionConcept.id);
        // await LocalSyncData.SyncDataOnline();
    }

    /**
     * Retrieves the prototype details
     */
    getPrototypeDetails(): any {
        return this.prototypeTypeConcept;
    }


}
