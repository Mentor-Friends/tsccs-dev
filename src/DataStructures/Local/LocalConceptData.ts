/**
 * @fileoverview Local Concepts Data management for the Concept Connection System.
 * This module provides static methods for managing local concept data, including
 * adding, retrieving, and querying concepts from local binary trees and memory.
 * @module DataStructures/Local/LocalConceptData
 */

import { GetConcept } from "../../Api/GetConcept";
import { LConcept } from "./../Local/LConcept";
import {  storeToDatabase } from "../../Database/NoIndexDb";
import { BinaryTree } from "./../BinaryTree";
import { LocalBinaryTree } from "./LocalBinaryTree";
import { LocalBinaryCharacterTree } from "./LocalBinaryCharacterTree";
import { LocalBinaryTypeTree } from "./LocalBinaryTypeTree";
import { CreateDefaultLConcept } from "../../Services/Local/CreateDefaultLConcept";

/**
 * Manages local concept data storage and retrieval.
 * Provides static methods for managing concepts in memory and across multiple
 * binary tree structures for efficient querying.
 *
 * @class LocalConceptsData
 * @export
 */
export class LocalConceptsData{
    /**
     * Name identifier for this data structure.
     * @type {string}
     */
    name: string;

    /**
     * Creates a new LocalConceptsData instance.
     *
     * @constructor
     */
    constructor(){
        this.name = "conceptsArray";
    }

    /**
     * Static array storing all local concepts in memory.
     * @type {LConcept[]}
     * @static
     */
    static  localconceptsArray:LConcept[] = [];



    /**
     * Adds a concept to the local storage system.
     * Stores the concept in the database and adds it to all relevant binary trees.
     *
     * @static
     * @method AddConcept
     * @param {LConcept} concept - The concept to add
     * @returns {void}
     */
    static AddConcept(concept: LConcept){
        if(concept.id > 0){
             storeToDatabase("localconcept",concept);
            LocalBinaryTree.addConceptToTree(concept);
            LocalBinaryCharacterTree.addConceptToTree(concept);
            LocalBinaryTypeTree.addConceptToTree(concept);
            this.localconceptsArray.push(concept);
        }

    }

    /**
     * Adds a concept to memory only (without database storage).
     * Updates all relevant binary trees for fast lookups.
     *
     * @static
     * @method AddConceptToMemory
     * @param {LConcept} concept - The concept to add to memory
     * @returns {void}
     */
    static AddConceptToMemory(concept: LConcept){
        if(concept.id > 0){
            LocalBinaryTree.addConceptToTree(concept);
            LocalBinaryCharacterTree.addConceptToTree(concept);
            LocalBinaryTypeTree.addConceptToTree(concept);
        }

    }





    /**
     * Retrieves a concept by its ID from the local binary tree.
     *
     * @static
     * @async
     * @method GetConcept
     * @param {number} id - The ID of the concept to retrieve
     * @returns {Promise<LConcept>} The concept if found, otherwise a default concept
     */
    static async GetConcept(id: number){
       var  myConcept: LConcept = CreateDefaultLConcept();
       var node = await LocalBinaryTree.getNodeFromTree(id);
       if(node?.value){
           var returnedConcept = node.value;
           if(returnedConcept){
               myConcept = returnedConcept as LConcept;
           }
       }

        return myConcept;
    }

    /**
     * Retrieves a concept by its character value.
     *
     * @static
     * @async
     * @method GetConceptByCharacter
     * @param {string} characterValue - The character value to search for
     * @returns {Promise<LConcept>} The concept if found, otherwise a default concept
     */
    static async GetConceptByCharacter(characterValue: string){
        var concept: LConcept = CreateDefaultLConcept();
        //  for(var i=0; i<this.conceptsArray.length; i++){
        //      if(this.conceptsArray[i].characterValue == characterValue){
        //         concept = this.conceptsArray[i];
        //      }
        //  }

        var Node = LocalBinaryCharacterTree.getNodeFromTree(characterValue);
        if(Node){
            concept  = Node.value;
        }
         return concept;
     }

     /**
      * Retrieves a concept by both character value and type ID.
      * Useful for finding specific concepts when multiple concepts share the same character value.
      *
      * @static
      * @async
      * @method GetConceptByCharacterAndTypeLocal
      * @param {string} character_value - The character value to search for
      * @param {number} typeId - The type ID to match
      * @returns {Promise<LConcept>} The concept if found, otherwise a default concept
      */
     static async GetConceptByCharacterAndTypeLocal(character_value:string, typeId: number){
        var concept: LConcept = CreateDefaultLConcept();
        // let conceptList:Concept[] = await this.GetConceptsByTypeId(typeId);
        // for(var i=0;i<conceptList.length; i++){

        //     if(character_value == conceptList[i].characterValue){
        //         concept = conceptList[i];
        //     }
        // }

        var Node = await LocalBinaryCharacterTree.getCharacterAndTypeFromTree(character_value,typeId);
        if(Node){

            concept =  Node.value;
        }
        return concept;

     }

     /**
      * Retrieves all concepts of a specific type.
      *
      * @static
      * @method GetConceptsByTypeId
      * @param {number} typeId - The type ID to filter by
      * @returns {LConcept[]} Array of concepts with the specified type
      */
     static  GetConceptsByTypeId(typeId: number){
        var  myConcept: LConcept|null;
        let ConceptList: LConcept[] = [];
        myConcept = null;
         for(var i=0; i<this.localconceptsArray.length; i++){
             if(this.localconceptsArray[i].typeId == typeId){
                 ConceptList.push(this.localconceptsArray[i]);
             }
         }
         return ConceptList;
     }

     /**
      * Retrieves concepts filtered by both type ID and user ID.
      * Useful for multi-user environments.
      *
      * @static
      * @async
      * @method GetConceptsByTypeIdAndUser
      * @param {number} typeId - The type ID to filter by
      * @param {number} userId - The user ID to filter by
      * @returns {Promise<LConcept[]>} Array of concepts matching both criteria
      */
     static async  GetConceptsByTypeIdAndUser(typeId: number, userId: number){
        var  myConcept: LConcept|null;
        let ConceptList: LConcept[] = [];
        // myConcept = null;
        //  for(var i=0; i<this.conceptsArray.length; i++){
        //      if(this.conceptsArray[i].typeId == typeId && this.conceptsArray[i].userId == userId){
        //          ConceptList.push(this.conceptsArray[i]);
        //      }
        //  }
        ConceptList = await LocalBinaryTypeTree.getTypeVariantsFromTreeWithUserId(typeId, userId);
         return ConceptList;
     }




    /**
     * Gets the name of this data structure.
     *
     * @method getName
     * @returns {string} The name identifier
     */
    getName(){
        return this.name;
    }
}
