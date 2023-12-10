import { Concept } from "../DataStructures/Concept";
import { ConceptsToDraw } from "../DataStructures/ConceptsToDraw";


export function DrawingLoop(){
    FPS: Number;
    FRAMERATE: Number;
    
    var FPS = 60;
    var FRAME_RATE=1000/FPS;
    var canvas = document.querySelector('#myCanvas') as HTMLCanvasElement;
    var ctx = canvas.getContext('2d') as CanvasRenderingContext2D ;
    
    setInterval(function(){
        MainDraw();
    },500);
}

function MainDraw(){
    var canvas = document.querySelector('#myCanvas') as HTMLCanvasElement;
    var ctx= canvas.getContext('2d') as CanvasRenderingContext2D ;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    var array = ConceptsToDraw.conceptsArray;
    for(var i=0; i< array.length;i++){
        drawConcept(array[i]);
    }
}

function drawConcept(concept: Concept){
    width: Number;
    height: Number;
    x: Number;
    y: Number;
    var triangleHeight = 50;
    var canvas = document.querySelector('#myCanvas') as HTMLCanvasElement;
    var context= canvas.getContext('2d') as CanvasRenderingContext2D ;
    var width=50;
    if(concept.x == undefined  && concept.y == undefined){
        var x = randomIntFromInterval(50,950);
        var y = randomIntFromInterval(50,450);
        concept.x = x ;
        concept.y = y;
    }
    var height = triangleHeight * 2 * (Math.sqrt(3)/2);


    context.beginPath();
    context.moveTo(concept.x, concept.y);
    context.lineTo(concept.x+triangleHeight, concept.y+height);
    context.lineTo(concept.x-triangleHeight, concept.y+height);
    context.closePath();

    // the outline
    context.lineWidth = 10;
    context.strokeStyle = '#666666';
    context.stroke();

    // the fill color
    context.fillStyle = "#FFCC00";
    context.fill();

    
}

function randomIntFromInterval(min: number, max:number) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}