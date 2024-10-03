import { Concept, Connection } from "../app";
import { UpdateToDatabase } from "./indexeddb";

/**
 * This class is a buffer class that is used to write to the indexdb. We cannot willy nilly write to indexdb because
 * it will cause the system to crash. We must also in future only allow certain types of concepts and connections 
 * to be stored because a large indexdb is more problem than a blessing.
 */
export class IndexDbUpdate{
   static concepts: Concept[] = [];
   static connections: Connection[] = [];

    /**
    * This is the maximum number of concepts or connections that needs to be in the buffer before flusing them
    * to index db
    */
   static INDEX_DB_BUFFER_MAX = 2;

   /**
    * This means that indexdb is in use.
    */
   static IN_USE = false;


   /**
    * This is a delay that you introduce between two updates to indexdb.
    */
   static DELAY_BETWEEN_INDEX_UPDATES = 100;

   /**
    * This is a varaible that defines how many times a concept or connection should be used before putting
    * it to indexdb.
    */
   static MIN_USE_FOR_INDEX_DB = 3;


   /**
    * This is a variable that defines that any concept / connection with count greater than this should not 
    * be added to indexdb because probably this already is in the indexdb.
    */
   static MAX_USE_FOR_INDEX_DB = 5;

   /**
    * This function holds the buffer to the indexdb. Only things that pass through here can be stored to the indexdb
    * This function holds the concepts in the buffer and puts them in indexdb once the INDEX_DB_BUFFER_MAX is exceeded.
    * @param concept Concept that needs to be passed on to the indexdb
    * 
    */
   public  static async UpdateConceptIndexDb(concept: Concept){
    try{
        if(concept.count < IndexDbUpdate.MAX_USE_FOR_INDEX_DB){
            IndexDbUpdate.concepts.push(concept);
            if(IndexDbUpdate.concepts.length > IndexDbUpdate.INDEX_DB_BUFFER_MAX){
                let toUpdateConcepts = IndexDbUpdate.concepts.slice();
                IndexDbUpdate.concepts = [];
                if(IndexDbUpdate.IN_USE == false){
                    IndexDbUpdate.IN_USE = true;
                    for(let i =0; i< toUpdateConcepts.length; i++){
                        await UpdateToDatabase("concept",toUpdateConcepts[i]);
                    }
                }
    
                IndexDbUpdate.IN_USE = false;
            }
        }
    }
    catch(error){
        console.log("This is the error in the concept indexdb update", error);
        IndexDbUpdate.IN_USE =false;
    }


   }

    /**
    * This function holds the buffer to the indexdb. Only things that pass through here can be stored to the indexdb
    * This function holds the connections in the buffer and puts them in indexdb once the INDEX_DB_BUFFER_MAX is exceeded.
    * @param connection Connection that needs to be passed on to the indexdb
    * 
    */
   public static async UpdateConnectionIndexDb(connection: Connection){
    try{
        if(connection.count < IndexDbUpdate.MAX_USE_FOR_INDEX_DB){
            IndexDbUpdate.connections.push(connection);
            if(IndexDbUpdate.connections.length > IndexDbUpdate.INDEX_DB_BUFFER_MAX){
                let toUpdateConnections = IndexDbUpdate.connections.slice();
                IndexDbUpdate.connections = [];
                if(IndexDbUpdate.IN_USE == false){
                    IndexDbUpdate.IN_USE = true;
                for(let i =0; i< toUpdateConnections.length; i++){
                    await UpdateToDatabase("connection",toUpdateConnections[i]);
                }
                }
                IndexDbUpdate.IN_USE = false;
            }
        }
    }
    catch(error){
        console.log("indexdb update error", error);
        IndexDbUpdate.IN_USE = false;
    }


   }

}