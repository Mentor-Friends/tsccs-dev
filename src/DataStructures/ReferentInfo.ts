export class ReferentInfo{
    conceptDataId: number;
    conceptDataUserId: number;
    characterDataId: number;
    characterDataUserId: number;

    constructor(conceptDataId:number, conceptDataUserId:number, characterDataId:number, characterDataUserId:number){
        this.conceptDataId = conceptDataId;
        this.conceptDataUserId = conceptDataUserId;
        this.characterDataId = characterDataId;
        this.characterDataUserId = characterDataUserId;
    }
}