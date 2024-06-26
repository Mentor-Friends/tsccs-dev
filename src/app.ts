export {init, updateAccessToken};

import { SyncData } from './DataStructures/SyncData';
import CreateBinaryTreeFromData from './Services/CreateBinaryTreeFromData';
import {CreateCharacterBinaryTreeFromData} from './Services/CreateCharacterBinaryTreeFromData';

import { IdentifierFlags } from './DataStructures/IdentifierFlags';

export { SplitStrings} from './Services/SplitStrings'; 
export { GetCompositionList,GetCompositionListWithId }  from './Services/GetCompositionList';
export { GetCompositionListLocal, GetCompositionListLocalWithId} from './Services/Local/GetCompositionListLocal';
export {GetAllConnectionsOfComposition} from './Api/GetAllConnectionsOfComposition';
export {GetComposition,GetCompositionWithId} from './Services/GetComposition';
export {GetCompositionLocal, GetCompositionLocalWithId} from './Services/Local/GetCompositionLocal';
export {default as CreateComposition} from './Services/CreateTheComposition';
export { CreateTheCompositionLocal } from './Services/Local/CreateTheCompositionLocal';
export {CreateConnectionBetweenTwoConcepts} from './Services/CreateConnectionBetweenTwoConcepts';
export { default as GetTheConcept} from './Services/GetTheConcept';
export { default as MakeTheInstanceConcept} from './Services/MakeTheInstanceConcept';
export { MakeTheInstanceConceptLocal} from './Services/Local/MakeTheInstanceConceptLocal';
export { storeToDatabase,getFromDatabaseWithType,getFromDatabaseWithTypeOld } from './Database/indexeddb';
export {default as CreateTheConnection} from './Services/CreateTheConnection';
export { default as GetConceptByCharacter } from './Services/GetConceptByCharacter';
export { GetLink } from './Services/GetLink';
export { GetLinkerConnectionFromConcepts} from './Services/GetLinkerConnectionFromConcept';
export { DeleteConceptById } from './Services/DeleteConcept';
export { DeleteConnectionById } from './Services/DeleteConnection';
export { GetConnectionById } from './Services/GetConnections';
export {MakeTheTimestamp} from './Services/MakeTheTimestamp';
export {RecursiveSearchApi} from './Api/RecursiveSearch';
export {GetCompositionBulkWithDataId,GetCompositionBulk} from './Services/GetCompositionBulk';
export {GetConceptBulk} from './Api/GetConceptBulk';

export { LoginToBackend } from './Api/Login';

export {  } from './Api/GetConceptByCharacterAndType';

export {SyncData} from './DataStructures/SyncData';
export {Concept} from './DataStructures/Concept';
export {ConceptsData} from './DataStructures/ConceptData';
export { ConnectionData } from './DataStructures/ConnectionData';

import {GetDataFromIndexDb,GetDataFromIndexDbLocal} from './Services/GetDataFromIndexDb';
import { BinaryTree } from './DataStructures/BinaryTree';
import { BinaryCharacterTree } from './DataStructures/BinaryCharacterTree';
import CreateLocalBinaryTreeFromData from './Services/Local/CreateLocalBinaryTreeFromData';
import { LocalBinaryTree } from './DataStructures/Local/LocalBinaryTree';
import { CreateTypeTreeFromData } from './Services/CreateTypeTreeFromData';
import { BinaryTypeTree } from './DataStructures/BinaryTypeTree';
import { CreateLocalCharacterBinaryTreeFromData } from './Services/Local/CreateLocalCharacterBinaryTree';
import { CreateLocalBinaryTypeTreeFromData } from './Services/Local/CreateLocalBinaryTypeTreeFromData';
import { GetAiData } from './Api/GetAiData';
import { GetStatsFromDatabase } from './Database/indexeddb';
import InitializeSystem from './Services/InitializeSystem';
import { BaseUrl } from './DataStructures/BaseUrl';
import { TokenStorage } from './DataStructures/Security/TokenStorage';
export {BaseUrl} from './DataStructures/BaseUrl';

function updateAccessToken(accessToken:string = ""){
   TokenStorage.BearerAccessToken = accessToken;
}

function init(url:string = "", aiurl:string="", accessToken:string = ""){
   BaseUrl.BASE_URL = url;
   BaseUrl.AI_URL = aiurl;
   TokenStorage.BearerAccessToken = accessToken;
   InitializeSystem().then(()=>{
      const start = new Date().getTime();
      CreateBinaryTreeFromData().then(()=>{
         IdentifierFlags.isDataLoaded= true;
         IdentifierFlags.isCharacterLoaded= true;
         IdentifierFlags.isTypeLoaded= true;
         let elapsed = new Date().getTime() - start;
         console.log("The time taken to prepare concept  data is  ", elapsed);
      });

      
      // CreateCharacterBinaryTreeFromData().then(()=>{
      //    IdentifierFlags.isCharacterLoaded= true;
      //    let elapsed = new Date().getTime() - start;
      //    console.log("The time taken to prepare character data is  ", elapsed);
      // });
      
      // CreateTypeTreeFromData().then(()=>{
      //    IdentifierFlags.isTypeLoaded= true;
      //    let elapsed = new Date().getTime() - start;
      //    console.log("The time taken to prepare data is ", elapsed);
      // });
      
      CreateLocalBinaryTreeFromData().then(()=>{
         IdentifierFlags.isLocalDataLoaded = true;
         IdentifierFlags.isLocalTypeLoaded = true;
         IdentifierFlags.isLocalCharacterLoaded = true;
         let elapsed = new Date().getTime() - start;
         console.log("The time taken to prepare local concept  ", elapsed);
      });
      
      // CreateLocalCharacterBinaryTreeFromData().then(()=>{
      //    IdentifierFlags.isLocalCharacterLoaded = true;
      // });
      
      // CreateLocalBinaryTypeTreeFromData().then(()=>{
      //    IdentifierFlags.isLocalTypeLoaded = true;
      //    console.log("type",IdentifierFlags.isLocalTypeLoaded);
      // });
      
      GetDataFromIndexDbLocal().then(()=>{
         IdentifierFlags.isLocalConnectionLoaded = true;
      });
      GetDataFromIndexDb().then(()=>{
         IdentifierFlags.isConnectionLoaded = true;
         IdentifierFlags.isConnectionTypeLoaded = true;
         let elapsed = new Date().getTime() - start;
         console.log("The time taken to prepare connections  ", elapsed);
      });


   });
}





//  GetDataFromIndexDb(); 
 

// const form = document.querySelector('#myForm') as HTMLFormElement;
// //const form2 = document.querySelector('#userForm') as HTMLFormElement;
// const form3 = document.querySelector('#compositionForm') as HTMLFormElement;
// const jsonForm = document.querySelector('#jsonForm') as HTMLFormElement;
// const nameForm = document.querySelector('#nameform') as HTMLFormElement;
// const getname = document.querySelector('#getname') as HTMLFormElement;


// var json = {
//     "asdgsaddff": {
//         "adgasdfsdf": {
//             "asdg": "tame",
//             "briderarr": ["hello", "tre"]
//         }
//     }
// };



// setInterval(function(){
//     console.log("syncing");
//     SyncData.SyncDataOnline()

// }, 5000);



// form.addEventListener('submit', (event) => {
//    event.preventDefault();
//    const conceptIdElement = document.querySelector('#conceptid') as HTMLInputElement;
//    const conceptId = conceptIdElement.value;
//    GetComposition(Number(conceptId)).then(output=>{
//     const jsonElemnt = document.querySelector('#jsonoutput') as HTMLInputElement;
//     var json = JSON.stringify(output);
//     console.log(json);

//     jsonElemnt.innerHTML = json;


//    });
// });


// getname.addEventListener('submit', (event) => {
//     event.preventDefault();
//     const conceptIdElement = document.querySelector('#nameconceptid') as HTMLInputElement;
//     const conceptId = conceptIdElement.value;
//     GetComposition(Number(conceptId)).then(output=>{
//         const firstNameElement = document.querySelector('#firstname') as HTMLInputElement;
//         const lastNameElement = document.querySelector('#lastname') as HTMLInputElement;
//         console.log(output);
//         firstNameElement.value = output.namedata.firstname;
//         lastNameElement.value = output.namedata.lastname;
 
//     });
//  });

// nameForm.addEventListener('submit', (event) => {
//     event.preventDefault();
//     const firstNameElement = document.querySelector('#firstname') as HTMLInputElement;
//     const firstname = firstNameElement.value;
//     const lastNameElement = document.querySelector('#lastname') as HTMLInputElement;
//     const lastname = lastNameElement.value;
//     var json = {
//         "namedata":{
//             "firstname": firstname,
//             "lastname": lastname
//         }

//     }
//     console.log(json);

//     CreateTheComposition(json).then((value)=>{
//         const outputid = document.querySelector('#outputid') as HTMLInputElement;
//         var concept = value as Concept;
//         outputid.innerHTML = concept.id.toString();
//         console.log('this is the test for final');
//         console.log(value);
//     });
 
 
//     });

// jsonForm.addEventListener('submit', (event) =>{
//     event.preventDefault();
//     const compositionNameElement = document.querySelector("#jsondata") as HTMLInputElement;
//     const compositionName = compositionNameElement.value;
//     console.log("this is the composition name");
//     console.log(compositionName);
//     var jon = JSON.parse(compositionName);
//     CreateTheComposition(jon).then((value)=>{
//         const outputid = document.querySelector('#outputid') as HTMLInputElement;
//         var concept = value as Concept;
//         outputid.innerHTML = concept.id.toString();
//         console.log('this is the test for final');
//         console.log(value);
//     });
// });

// form3.addEventListener('submit', (event) => {
//     event.preventDefault();
//     const compositionNameElement = document.querySelector("#composition_name") as HTMLInputElement;
//     const compositionName = compositionNameElement.value;
//     GetCompositionList(compositionName).then(output=>{
//         const jsonElemnt = document.querySelector('#jsonoutput') as HTMLInputElement;
//         var json = JSON.stringify(output);
//         console.log(json);
    
//         jsonElemnt.innerHTML = JSON.stringify(json);
//     });
// });



// // form2.addEventListener('submit', (event) => {
// //     event.preventDefault();
// //     const userIdElement = document.querySelector("#userid") as HTMLInputElement;
// //     const userId = userIdElement.value;
// //     GetAllUserConcepts(Number(userId));
// //     GetAllUserConnections(Number(userId)).then(()=>{
// //         console.log("got all the data");
// //     });

// //  });

// window.onmousedown = (ev: MouseEvent): any => {
//     var isMouseDown = true;
//     var canvas = document.querySelector('#myCanvas') as HTMLCanvasElement;
//     var ctx = canvas.getContext('2d') as CanvasRenderingContext2D ;
//     var _difference_from_window = canvas.getBoundingClientRect();
//     var width_difference = 0;
//     var height_difference = 0;
//     //Update mouse position at time of down
//     var mouse_x_coordinate = ev.x - _difference_from_window.left + window.scrollX;
//     var mouse_y_coordinate = ev.y - _difference_from_window.top + window.scrollY;

//     var selected_concept_object = selectConceptObject(mouse_x_coordinate, mouse_y_coordinate);
//     window.onmousemove = (ev: MouseEvent): any => {
//         var previous_mouse_x = mouse_x_coordinate;
//         var previous_mouse_y = mouse_y_coordinate;
//         var new_mouse_x_coordinate = ev.x - _difference_from_window.left + window.scrollX;
//         var new_mouse_y_coordinate = ev.y - _difference_from_window.top + window.scrollY;
//         //how much did the mouse move
//         var mouse_x_difference = new_mouse_x_coordinate - previous_mouse_x;
//         var mouse_y_difference = new_mouse_y_coordinate - previous_mouse_y;

//         if(selected_concept_object){
//             if(isMouseDown){
//                 selected_concept_object.x = new_mouse_x_coordinate;
//                 selected_concept_object.y = new_mouse_y_coordinate;
//             }
//         }
//     }

//     window.onmouseup = (ev: MouseEvent): any => {
//         isMouseDown = false;
//         selected_concept_object  = null;
//     }


//}
