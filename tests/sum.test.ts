import { expect, test} from '@jest/globals';
import {GetConcept} from '../src/Api/GetConcept';
import { BaseUrl, init } from '../src/app';
import { IdentifierFlags } from '../src/DataStructures/IdentifierFlags';
import { TokenStorage } from '../src/DataStructures/Security/TokenStorage';
import { GetConnection } from '../src/Api/GetConnection';
import { LocalId } from '../src/DataStructures/Local/LocalId';
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

test('get concept test', async() =>{
    

    return GetConcept(20).then(data => {
        expect(data.id).toBe(20);
      }).catch((err)=>{
        console.log("this is the error", err);
      });


});

test('get connection test', async() =>{
        return GetConnection(20).then(data => {
            expect(data.id).toBe(20);
          }).catch((err)=>{
            console.log("this is the error", err);
          });

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


