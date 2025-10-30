/**
 * Concept Draw Module for Concept Connection System (CCS-JS)
 *
 * This module handles the visual rendering of concepts on an HTML5 canvas.
 * It provides a drawing loop that continuously renders concepts as triangles
 * with automatic positioning and animation capabilities.
 *
 * @module Drawing/ConceptDraw
 * @see https://documentation.freeschema.com for visualization reference
 */

import { Concept } from "../DataStructures/Concept";
import { ConceptsToDraw } from "../DataStructures/ConceptsToDraw";

/**
 * Initializes and starts the main drawing loop for rendering concepts.
 *
 * @example
 * ```typescript
 * // Start the drawing loop
 * DrawingLoop();
 * ```
 *
 * @remarks
 * Sets up a continuous drawing loop using setInterval that:
 * - Targets 60 FPS (though currently draws at 2 FPS with 500ms interval)
 * - Queries the canvas element with ID 'myCanvas'
 * - Continuously calls MainDraw() to render concepts
 *
 * Note: The FPS and FRAME_RATE variables are declared but not currently used.
 * The actual draw rate is 500ms (2 times per second), not 60 FPS.
 */
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

/**
 * Main drawing function that renders all concepts in the drawing queue.
 *
 * @remarks
 * This function:
 * - Clears the entire canvas before redrawing
 * - Retrieves all concepts from ConceptsToDraw.conceptsArray
 * - Iterates through and draws each concept individually
 *
 * Called repeatedly by DrawingLoop() to create animation.
 * Not exported as it's an internal helper for the drawing system.
 */
function MainDraw(){
    var canvas = document.querySelector('#myCanvas') as HTMLCanvasElement;
    var ctx= canvas.getContext('2d') as CanvasRenderingContext2D ;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    var array = ConceptsToDraw.conceptsArray;
    for(var i=0; i< array.length;i++){
        drawConcept(array[i]);
    }
}

/**
 * Draws a single concept as a triangle on the canvas.
 *
 * @param concept - The concept to draw
 *
 * @remarks
 * Visual properties:
 * - Shape: Equilateral triangle pointing upward
 * - Base width: 100 pixels (50 pixels on each side from center)
 * - Height: ~86.6 pixels (calculated using sqrt(3)/2 ratio)
 * - Fill color: Gold (#FFCC00)
 * - Outline: Gray (#666666) with 10px width
 *
 * Positioning behavior:
 * - If concept.x and concept.y are undefined, assigns random position:
 *   - x: random between 50 and 950
 *   - y: random between 50 and 450
 * - Random position is persisted to the concept object
 *
 * Triangle geometry:
 * - Top vertex: (concept.x, concept.y)
 * - Bottom right: (concept.x + 50, concept.y + height)
 * - Bottom left: (concept.x - 50, concept.y + height)
 *
 * @see {@link randomIntFromInterval}
 */
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

/**
 * Generates a random integer within a specified range (inclusive).
 *
 * @param min - The minimum value (inclusive)
 * @param max - The maximum value (inclusive)
 * @returns A random integer between min and max, including both endpoints
 *
 * @example
 * ```typescript
 * const random = randomIntFromInterval(1, 10);
 * // Returns a random integer from 1 to 10 (inclusive)
 * ```
 *
 * @remarks
 * Uses Math.random() and Math.floor() to generate inclusive random integers.
 * Both min and max values are included in the possible results.
 * Used internally for randomly positioning concepts when they don't have coordinates.
 */
function randomIntFromInterval(min: number, max:number) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min)
}