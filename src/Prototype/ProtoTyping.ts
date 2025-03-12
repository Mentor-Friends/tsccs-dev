
/**
 * Prototype Concept with a specific type and its connections
 */
export class ProtoType {

    prototypeType : string;
    connections : { toTypeConcept: string; connectionType : string } [];

    /**
     * create a prototype instance
     * @param inputType - of : prototype
     */
    constructor(inputType:string){
        this.prototypeType = ProtoType.formatTypeConcept(inputType);
        this.connections = []
    }

    /**
     * Return a prototype id
     * @param inputType - Type Concept value 
     * @returns Formatted prototype string 
     */
    static formatTypeConcept(inputType: string) {
        if(!inputType.startsWith("the_")) {
            inputType = "the_" + inputType;
        }
        // Add suffix '_prototype'
        const prototype_suffix = '_prototype';
        inputType = `${inputType}_${prototype_suffix}`;
        return inputType
    }

    /**
     * Add a connection to the prototype concept
     * @param toTypeConcept - The name of the concept being connected
     * @param connectionType - The type of connection [ "requires" or "optional"]
     */
    addProtoTypeConnection(toTypeConcept: string, connectionType : "requires" | "optional") {
        const formattedToTypeConcept = ProtoType.formatTypeConcept(toTypeConcept);
        const formattedConnectionType = `${this.prototypeType}_${connectionType}`;
        this.connections.push(
            { 
                toTypeConcept : formattedToTypeConcept,
                connectionType : formattedConnectionType
            }
        )
    }

    /**
     * Retrieves the list of connections
     */
    getPrototypeConnections() {
        return this.connections;
    }


}