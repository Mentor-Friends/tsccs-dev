/**
 * Concept Events Module for Concept Connection System (CCS-JS)
 *
 * This module handles user interaction events with visual concepts on the canvas.
 * It provides hit detection and selection functionality for concepts rendered as triangles.
 *
 * @module Drawing/ConceptEvents
 * @see https://documentation.freeschema.com for interaction reference
 */

import { ConceptsData } from "../DataStructures/ConceptData";

/**
 * Detects and returns a concept at the given mouse coordinates.
 *
 * @param mouse_x_coordinate - The x-coordinate of the mouse position
 * @param mouse_y_coordinate - The y-coordinate of the mouse position
 * @returns The concept at the mouse position, or null if no concept was clicked
 *
 * @example
 * ```typescript
 * canvas.addEventListener('click', (event) => {
 *   const rect = canvas.getBoundingClientRect();
 *   const x = event.clientX - rect.left;
 *   const y = event.clientY - rect.top;
 *   const selected = selectConceptObject(x, y);
 *   if (selected) {
 *     console.log('Clicked concept:', selected.id);
 *   }
 * });
 * ```
 *
 * @remarks
 * Hit detection uses a rectangular bounding box approach:
 * - Width: 100 pixels (50 pixels on each side from center)
 * - Height: 100 pixels (from y coordinate downward)
 *
 * Boundary calculations:
 * - Left: concept.x - 50
 * - Right: concept.x + 50
 * - Top: concept.y
 * - Bottom: concept.y + 100
 *
 * Note: Although concepts are drawn as triangles, the hit detection uses
 * a rectangular area for simplicity. This means clicks near the corners
 * of the rectangle but outside the actual triangle will still register.
 *
 * @see {@link ConceptsData} for the data store being searched
 */
export function selectConceptObject(mouse_x_coordinate: number, mouse_y_coordinate: number){
    var conceptArray = ConceptsData.conceptsArray;
    var offset = 50;
    for(var i=0; i<conceptArray.length; i++){
        var left_boundary_of_object = conceptArray[i].x - offset;
        var right_boundary_of_object = conceptArray[i].x + offset;
        var up_boundary_of_object = conceptArray[i].y - 0;
        var low_boundary_of_object = conceptArray[i].y + 100;

        if (mouse_x_coordinate >  left_boundary_of_object && mouse_x_coordinate < right_boundary_of_object
            && mouse_y_coordinate > up_boundary_of_object && mouse_y_coordinate < low_boundary_of_object) {
            return conceptArray[i];
          }
    }
    return null;
}



    


