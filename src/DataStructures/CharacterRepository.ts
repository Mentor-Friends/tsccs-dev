import { TheCharacter } from "./TheCharacter";

export class CharacterRepository{
    name: string;
    constructor(){
        this.name = "character Repository";
    }

    static  characterData:TheCharacter[] = [];

    static AddCharacter(character: TheCharacter){
        this.characterData[character.id] = character;
     }

     static GetCharacter(value: string){
        var theCharacter: TheCharacter = new TheCharacter(0,"0",0,0,0,0,0,0,"0",false);
        for(var i=0 ;i <this.characterData.length; i++){
            if(this.characterData[i].data == value){
                theCharacter = this.characterData[i];
            }
        }
        return theCharacter;
     }
}