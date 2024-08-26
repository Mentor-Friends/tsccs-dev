import { GetTheConcept } from "./../app";
import { ConceptCircle } from "./ConceptCircle";

export class ConceptCircleList{
    static drawList:ConceptCircle[] = [];

    static addNewConceptCircle(conceptCircle: ConceptCircle){
        let exists = false;
        for(let i=0; i< this.drawList.length; i++){
            if(this.drawList[i].concept?.id == conceptCircle.concept?.id){
                exists = true;
            }
        }
        if(!exists){
            this.drawList.push(conceptCircle);
        }
        return exists;
    }

    static removeConceptCircle(conceptCircle: ConceptCircle){
        for(let i=0 ;i<this.drawList.length;i++){
            if(this.drawList[i].concept?.id == conceptCircle.concept?.id){
                this.drawList.splice(i,1);
            }
        }
    }

    static  async getConceptCircle(conceptId: number,ctx: any){
        let found = false;
        let output;
        for(let i=0; i<this.drawList.length;i++){
            if(conceptId == this.drawList[i]?.concept?.id){
                output = this.drawList[i];
                found = true;
            }
        }
        

        if(!found){
            output = await this.addConceptCircle(conceptId,ctx);
        }
        return output;
    }

    static  getConceptCircleFromList(conceptId: number){
        let output;
        for(let i=0; i<this.drawList.length;i++){
            if(conceptId == this.drawList[i]?.concept?.id){
                output = this.drawList[i];
                return output;
            }
        }
        return null;
    }

    static async addConceptCircle(conceptId: number,ctx: any){
        var concept = await GetTheConcept(conceptId);
        var conceptCircle = new ConceptCircle(concept,ctx);
        ConceptCircleList.drawList.push(conceptCircle);
        return conceptCircle;

    }
}