import { Concept, Connection, GetTheConcept, LocalSyncData, LocalTransaction } from "../../app";

export class VisualTree{
    static concepts:Concept[] = [];
    static connections: Connection[] = [];

    static transactions: LocalTransaction [] ;

    public static  setTransaction(transaction: LocalTransaction){
        VisualTree.transactions.push(transaction);
    }

    static renderVisualTree(){
    }

    static async getLocalConcepts(){
        this.concepts  = LocalSyncData.conceptsSyncArray;
        this.connections = LocalSyncData.connectionSyncArray;
        for (let i = 0; i < this.connections.length; i++) {
            const of_the_concepts = this.connections[i].ofTheConceptId;
            const concept = await GetTheConcept(of_the_concepts);

            if (!this.concepts.some(c => c.id === concept.id)) {
                this.concepts.push(concept);
            }
        }
        console.log("this is the test", this.concepts, this.connections);

        this.renderVisualTree(); 
    }

    
}