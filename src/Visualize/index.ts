import {BASE_URL, Concept, ConceptsData, ConnectionData, CreateConnectionBetweenTwoConcepts, CreateTheConnection, CreateTheConnectionLocal, DeleteConceptById, DeleteConnectionById, GetComposition, GetCompositionList, GetCompositionListWithId, GetConnectionById, GetLink, GetLinkerConnectionFromConcepts, GetLinkerConnectionToConcepts, GetTheConcept, init, LocalSyncData, LoginToBackend, MakeTheInstanceConcept,MakeTheTimestamp,MakeTheTypeConcept,MakeTheTypeConceptLocal,SyncData, updateAccessToken} from 'mftsccs-browser';
import { cursorInRect, drawCircle, getMouseCoords, getOffsetCoords } from "./helper";

import { getLinkData, getLinkDataOf, printAllConcepts,printAllConceptsOfId,printAllConceptsOfIdWithoutData, printConcept } from './drawExistingConcepts';
import { ConceptCircleList } from './ConceptCircleList';
import { ConnectionLineList } from './ConnectionLineList';
var globalLinkerConnections = [];

// var list = await GetCompositionList("custom_email_template", 10465);

// console.log(list);

//  function stripeCheckout(){
//     console.log("This is redirecting");
// const stripe = window.Stripe('pk_test_51NCagPCYltk9c3pngzkmRRMlANJlqUS32kiqzTsPXEjNOdFPA3RjVCIjj8YhglCrBvzT9te3cXkWuCx6RwaTJWJG00FZ8ojC4w');

//     let sessionId = "cs_test_a1tHcVDiK1yretZ5kUNaVALL5GkzDMq0ihFRlzEoy6uTmb3fIY8HL7UuIK";
//     console.log("This is redirecting");
//     return stripe.redirectToCheckout({ sessionId: sessionId });
// }

//  //stripeCheckout();
// var stripeButton = document.getElementById("stripe-button");
// stripeButton.addEventListener('click', function () {
//     console.log("clicking");
//     // Call your server to create a Checkout Session
//     return stripeCheckout();
//   });



const canvas = document.getElementById("conceptCanvas");
const ctx = canvas.getContext("2d");
const canvasContainer = document.getElementById("canvas-container");
let w = canvas.height = canvasContainer.scrollHeight;
let h = canvas.width = canvasContainer.scrollWidth;
var inputElement = document.getElementById("compositionId");
var buttonContainer = document.getElementById("button-container");
let clearButton = document.getElementById("clear");
let conceptButton = document.getElementById("create-concept");
let connectionButton = document.getElementById('create-connection');
let modal = document.getElementById("myModal");
let login = document.getElementById("login");
// Get the <span> element that closes the modal
var closeButton = document.getElementsByClassName("close")[0];
let globaltoken = localStorage.getItem("token");
if(globaltoken){
    let parsedJson = verifyJwt(globaltoken);
    if(parsedJson){
        updateAccessToken(globaltoken);
    }
    else{
        connectionButton.style.display = "none";
        conceptButton.style.display = "none";
    }
}
else{
    connectionButton.style.display = "none";
    conceptButton.style.display = "none";
}

function verifyJwt(token){
    let parsedJson = parseJwt(globaltoken);
    let currentDate = new Date();
    const unixTimestamp = Math.floor(currentDate.getTime() / 1000);
    console.log("this is the unix timestamp", unixTimestamp);
    if(parsedJson.exp > unixTimestamp){
        return true;
    }
    return false;
}

function parseJwt (token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
}


login.onclick = function(e){
    modal.style.display = "block";
    var f = document.createElement("form");
    let modalContent = document.getElementById('modal-body');
    var email = document.createElement("input"); //input element, text
    email.setAttribute('type',"email");
    email.setAttribute('name',"email");
    email.setAttribute("placeholder", "email");

    var password = document.createElement("input"); //input element, text
    password.setAttribute('type',"password");
    password.setAttribute('name',"password");
    password.setAttribute("placeholder", "password");

    var s = document.createElement("button"); //input element, Submit button
    s.setAttribute('value',"Login");
    s.innerText = "Login";
    f.appendChild(email);
    f.appendChild(password);
    f.appendChild(s);
    modalContent.appendChild(f);
    s.onclick= async(e) =>{
        e.preventDefault();
       let response =  await LoginToBackend(email.value, password.value);
       let accessToken = response?.data?.token;
       
        localStorage.setItem("token", accessToken);
        await updateAccessToken(accessToken);
        f.remove();
        modal.style.display = "none";
        window.location.reload();


    }



}
conceptButton.onclick = function(e){
    modal.style.display = "block";
    let modalContent = document.getElementById('modal-body');
    var f = document.createElement("form");

        var referent = document.createElement("input"); //input element, text
        referent.setAttribute('type',"text");
        referent.setAttribute('name',"referent");
        referent.setAttribute("placeholder", "referent");

        var  type = document.createElement("input"); //input element, text
        type.setAttribute('type',"text");
        type.setAttribute('name',"type");
        type.setAttribute("placeholder", "type");
        
        var  userId = document.createElement("input"); //input element, text
        userId.setAttribute('type',"number");
        userId.setAttribute('name',"userId");
        userId.setAttribute("placeholder", "userId");


        let compositionlabel = document.createElement("label");
        compositionlabel.innerText = "composition ? ";
        var  composition = document.createElement("input"); //input element, text
        composition.setAttribute("type", "checkbox");
        composition.setAttribute('name',"composition");


        var s = document.createElement("button"); //input element, Submit button
        s.setAttribute('value',"Create Concept");
        s.innerText = "Create Concept";


        f.appendChild(referent);
        f.appendChild(type);
        f.appendChild(userId);
        f.appendChild(compositionlabel);
        f.appendChild(composition);
        f.appendChild(s);
        modalContent.appendChild(f);
        s.onclick= async(e) =>{
            e.preventDefault();
            console.log("this is the composition value", composition.checked);
            if(type.value && userId.value){
                let concept =  await MakeTheInstanceConcept(type.value, referent.value, composition.checked, userId.value, 4, 999);
                await SyncData.SyncDataOnline(); 
                console.log("this is the concept", concept);
                f.remove();
                 modal.style.display = "none";
                 printConcept(ctx,concept.id);
            }
            else{
                alert("Cannot create connection");
            }


        }

}

connectionButton.onclick = function(e){
    modal.style.display = "block";
    let modalContent = document.getElementById('modal-body');
    var f = document.createElement("form");

        var ofTheConcept = document.createElement("input"); //input element, text
        ofTheConcept.setAttribute('type',"number");
        ofTheConcept.setAttribute('name',"of_the_concepts_id");
        ofTheConcept.setAttribute("placeholder", "of the concepts id");

        var  toTheConcept = document.createElement("input"); //input element, text
        toTheConcept.setAttribute('type',"number");
        toTheConcept.setAttribute('name',"to_the_concepts_id");
        toTheConcept.setAttribute("placeholder", "to the  concepts id");
        
        var  userId = document.createElement("input"); //input element, text
        userId.setAttribute('type',"number");
        userId.setAttribute('name',"userId");
        userId.setAttribute("placeholder", "userId");

        var  typeConnection = document.createElement("input"); //input element, text
        typeConnection.setAttribute('type',"text");
        typeConnection.setAttribute('name',"type_connection");
        typeConnection.setAttribute("placeholder", "type connection");

        var  order = document.createElement("input"); //input element, text
        order.setAttribute('type',"number");
        order.setAttribute('name',"order");
        order.setAttribute("placeholder", "order");




        var s = document.createElement("button"); //input element, Submit button
        s.innerText = "Create Connection";


        f.appendChild(ofTheConcept);
        f.appendChild(toTheConcept);
        f.appendChild(userId);
        f.appendChild(typeConnection);
        f.appendChild(order);
        f.appendChild(s);
        modalContent.appendChild(f);
        s.onclick= async(e) =>{
            e.preventDefault();
            if(ofTheConcept.value > 0 && toTheConcept.value > 0 && ofTheConcept.value != toTheConcept.value){
                let type = await MakeTheTypeConceptLocal(typeConnection.value, 999, 999, 999);
                let connection = await CreateTheConnectionLocal(ofTheConcept.value, toTheConcept.value, type.id, order.value, type.value);
               await LocalSyncData.SyncDataOnline(); 
               console.log("this is the connection", concept);
               f.remove();
                modal.style.display = "none";
                printConcept(ctx,ofTheConcept.value);
                GetAllConceptsAndItsRelations(ofTheConcept.value);
            }
            else{
                alert("Cannot create connection");
            }


        }
}

// When the user clicks on <span> (x), close the modal
closeButton.onclick = function() {
let modalContent = document.getElementById('modal-body');
modalContent.replaceChildren();

modal.style.display = "none";

}
  
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
if (event.target == modal) {
    let modalContent = document.getElementById('modal-body');
    modalContent.replaceChildren();
    modal.style.display = "none";

}
}

function GetAllConceptsAndItsRelations(id){
    let value = id;
    if(value != 0 || value != 1 ){

        
        const newContainer = document.createElement('div');
        newContainer.style.overflow = "scroll";
        newContainer.style.height = "100px";
        newContainer.style.marginTop = "10px";
        const textContainer = document.createElement('span');
        textContainer.style.display = "block";
        textContainer.style.paddingLeft = "5px";
        textContainer.innerHTML = value;
        newContainer.appendChild(textContainer);
        buttonContainer.appendChild(newContainer);

        GetLinkerConnectionFromConcepts(value).then((linkerConnections)=>{
            globalLinkerConnections.push(...linkerConnections);

            for(let i=0;i<linkerConnections.length;i++){
                const newButton = document.createElement('button');
                newButton.textContent = linkerConnections[i].type.characterValue;
                newButton.setAttribute('data-id', linkerConnections[i].id);
                newButton.addEventListener('click',function(event,myconnection){
                    let buttonId = this.getAttribute('data-id');
                    for(let i=0;i < globalLinkerConnections.length;i++){
                        if(globalLinkerConnections[i].id == buttonId){
                            GetAllConceptsAndItsRelations(globalLinkerConnections[i].toTheConceptId);
                            getLinkData(globalLinkerConnections[i],ctx);


                        }
                    }
                })
                newContainer.appendChild(newButton);
            }
        })

        GetLinkerConnectionToConcepts(value).then((linkerConnections)=>{
            globalLinkerConnections.push(...linkerConnections);

            for(let i=0;i<linkerConnections.length;i++){
                const newButton = document.createElement('button');
                newButton.textContent = "Rev_" + linkerConnections[i].type.characterValue;
                newButton.setAttribute('data-id', linkerConnections[i].id);
                newButton.style.background = "red";
                newButton.addEventListener('click',function(event,myconnection){
                    let buttonId = this.getAttribute('data-id');
                    for(let i=0;i < globalLinkerConnections.length;i++){
                        if(globalLinkerConnections[i].id == buttonId){
                            GetAllConceptsAndItsRelations(globalLinkerConnections[i].ofTheConceptId);
                            getLinkDataOf(globalLinkerConnections[i],ctx);


                        }
                    }
                })
                newContainer.appendChild(newButton);
            }
        })
    }
}
inputElement.onchange = function(e){
    ConceptCircleList.drawList = [];
    ConnectionLineList.drawList = [];
    printConcept(ctx,this.value);
    GetAllConceptsAndItsRelations(this.value);
};


canvas.addEventListener('mousedown', e => {
    let mouse = getMouseCoords(canvas,e);
    ConceptCircleList.drawList.forEach(e => {
        if (cursorInRect(mouse.x, mouse.y, e.x, e.y, e.radius)) {
            e.selected = true;
            e.offset = getOffsetCoords(mouse, e);
        } else {
            e.selected = false
        }
    });

});

// window.addEventListener('resize', () => {
//     w = canvas.width = canvasContainer.scrollWidth ;
//     h = canvas.height =  canvasContainer.scrollHeight;
//     for(let i=0;i < ConceptCircleList.drawList.length;i++){
//         ConceptCircleList.drawList[i].realign();
//     }
// })

canvas.addEventListener('mouseup', e => {
    ConceptCircleList.drawList.forEach(e => e.selected = false)
});

canvas.addEventListener('mousemove', e => {
    let mouse = getMouseCoords(canvas,e)

    let arr = ConceptCircleList.drawList.map(e => cursorInRect(mouse.x, mouse.y, e.x, e.y, e.radius))
    !arr.every(e => e === false) ? canvas.classList.add('pointer') : canvas.classList.remove('pointer')

    ConceptCircleList.drawList.forEach(e => {

        if (e.selected) {
            let x = mouse.x - e.offset.x;
            let y = mouse.y - e.offset.y;
            e.setInPlace(x,y,ctx);

        }

        cursorInRect(mouse.x, mouse.y, e.x, e.y, e.radius) ?
            e.active != true ? e.activate() : false
            : e.active = false
    })



});

clearButton.addEventListener("click", e=>{
    window.location.reload();
})

canvas.addEventListener("dblclick", e => {
    let mouse = getMouseCoords(canvas,e)

    let arr = ConceptCircleList.drawList.map(e => cursorInRect(mouse.x, mouse.y, e.x, e.y, e.radius))
    !arr.every(e => e === false) ? canvas.classList.add('pointer') : canvas.classList.remove('pointer')

    ConceptCircleList.drawList.forEach(e => {

        if (e.selected) {
            let x = mouse.x - e.offset.x;
            let y = mouse.y - e.offset.y;
            e.setInPlace(x,y,ctx);

        }

        cursorInRect(mouse.x, mouse.y, e.x, e.y, e.radius) ? e.showDetails() : null

    })
});



function animate() {
    ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight)
    ctx.fillStyle = 'black';
    ConceptCircleList.drawList.forEach(e => {
        e.draw(ctx)
    });
    ConnectionLineList.drawList.forEach(e => {
        e.draw(ctx)
    });
    window.requestAnimationFrame(animate)
}


 animate();