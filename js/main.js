import  { Concept } from './data_structures/Concept.js';
import { ConceptsData } from './data_structures/conceptsData.js';

var conceptObject = new Concept(1,1,1,1,1,1,1,1,1);
var conceptObject2 = new Concept(2,2,2,2,2,2,2,2,2);
var conceptObject3 = new Concept(3,3,3,3,3,3,3,3);
var array =  ConceptsData.conceptsArray;
ConceptsData.AddConcept(conceptObject);
ConceptsData.AddConcept(conceptObject2);
ConceptsData.AddConcept(conceptObject3);


