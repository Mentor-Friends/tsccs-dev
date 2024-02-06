import { GetCompositionConnectionsBetweenTwoConcepts } from "../Api/GetCompositionConnectionsBetweenTwoConcepts";
import { Concept } from "../DataStructures/Concept";

export default function PatchComposition(ofConcept:Concept, MainConcept:Concept, toConcept:Concept){
  var connection =   GetCompositionConnectionsBetweenTwoConcepts(ofConcept.id, toConcept.id, MainConcept.id);
}