
import { ConceptsData } from "../DataStructures/ConceptData";

export function selectConceptObject(mouse_x_coordinate: number, mouse_y_coordinate: number){
    var conceptArray = ConceptsData.conceptsArray;
    var offset = 50;
    console.log(conceptArray.length);
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



    


