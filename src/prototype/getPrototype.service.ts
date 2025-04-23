import { CreatePrototypeApi } from "../Api/Prototype/CreatePrototype";
import { Prototype } from "../DataStructures/Prototype/Prototype";

// This function is used the get the prototype of the type
export function CreatePrototype(prototype: Prototype){

    let output = CreatePrototypeApi(prototype);

    return output;
}