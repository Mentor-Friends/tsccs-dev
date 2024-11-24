import { expect, test} from '@jest/globals';
import {GetConcept} from '../src/Api/GetConcept';
import { BaseUrl, BinaryTree, Connection, CreateDefaultConcept, init } from '../src/app';
import { IdentifierFlags } from '../src/DataStructures/IdentifierFlags';
import { TokenStorage } from '../src/DataStructures/Security/TokenStorage';
import { GetConnection } from '../src/Api/GetConnection';
import { LocalId } from '../src/DataStructures/Local/LocalId';
import exp from 'constants';
import { mock } from 'node:test';
import { BinaryCharacterTree } from '../src/DataStructures/BinaryCharacterTree';
import { ConnectionBinaryTree } from '../src/DataStructures/ConnectionBinaryTree/ConnectionBinaryTree';
require("fake-indexeddb/auto");


let url = "http://192.168.10.2:7000";
let aiurl = "";
let nodeUrl = "https://theta.boomconcole.com";
let applicationName = "test";
let accessToken = "";
// describe('sum module', () => {
//   test('adds 1 + 2 to equal 3', () => {
//     expect(sum(1, 2)).toBe(3);
//   });
// });


test('init', async()=>{
    return init(url, "", "", nodeUrl, false, applicationName, false).then(data=>{
        expect(data).toBe(true);
    })
});

// test('get concept test', async() =>{
    

//     return GetConcept(20).then(data => {
//         expect(data.id).toBe(20);
//       }).catch((err)=>{
//         console.log("this is the error", err);
//       });


// });

// test('get connection test', async() =>{
//         return GetConnection(20).then(data => {
//             expect(data.id).toBe(20);
//           }).catch((err)=>{
//             console.log("this is the error", err);
//           });

// });

/**
 * This test is used to add concept to binary tree by fetching it and then checking if it can be fetched by memory
 */
test('add concept to binary tree and get it from binary tree', async() => {
  try{
    let mockId = 555;
    let mockCharacter = "SAMJHO";
    let concept = CreateDefaultConcept();
    concept.id = mockId;
    concept.characterValue = "SAMJHO";
    concept.typeId = 111;
    concept.categoryId = 4;
    BinaryTree.addConceptToTree(concept);
    let binaryConcept = await BinaryTree.getNodeFromTree(mockId);
    let characterConcept = await BinaryCharacterTree.getNodeFromTree("SAMJHO");
    expect(binaryConcept?.value.id).toBe(mockId);
    expect(characterConcept?.value.characterValue).toBe(mockCharacter);
  }
  catch(error){
    throw error;
  }

});

test('add concecpt to binary character tree and get it from binary character tree', async() => {
  try{
    let mockId = 555;
    let mockCharacter = "CHARTREE";
    let concept = CreateDefaultConcept();
    concept.id = mockId;
    concept.characterValue = mockCharacter;
    concept.typeId = 111;
    concept.categoryId = 4;
    BinaryCharacterTree.addConceptToTree(concept);
    let characterConcept = await BinaryCharacterTree.getNodeFromTree(mockCharacter);
    expect(characterConcept?.value.characterValue).toBe(mockCharacter);
  }
  catch(error){
    throw error;
  }
});

test('add random concepts to binary tree', async() => {
  let startCount = 10000;
  for(let i=0 ; i< startCount; i++){
    let conn = new Connection(i,1,2,999,1,1,1);
    await ConnectionBinaryTree.addConnectionToTree(conn);
  }

  let count = ConnectionBinaryTree.traverse();
  let connectionArray: Connection[] = [];
  ConnectionBinaryTree.getConnectionListFromIds([1,2,3], connectionArray, [] );
  console.log("This is the height of the tree and count of nodes", ConnectionBinaryTree.connectionroot?.height, count);
  console.log("this is the connections gathered from tree", connectionArray); 
  expect(startCount).toBe(count);
});







// test('get local id', async() =>{
    
//     Object.defineProperty(navigator, 'userAgent', {
//         get: () => undefined,
//         configurable: true
//       });
//         let a = await LocalId.getConceptId();

//         let b = await LocalId.getConceptId();
//         console.log("this is a and b", a, b);
//         expect(a-b).toBe(1);

    
// });


