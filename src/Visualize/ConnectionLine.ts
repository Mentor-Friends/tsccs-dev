import { Connection, CreateDefaultConcept,Concept } from "../app";
import { ConceptCircle } from "./ConceptCircle";
import { ConceptCircleList } from "./ConceptCircleList";
import { ConnectionLineList } from "./ConnectionLineList";
import { drawCircle, drawLine, randomIntFromInterval, drawArrow, drawArc } from "./helper";

export class ConnectionLine{
    concept: Concept = CreateDefaultConcept();
    ofConcept: ConceptCircle | undefined  = new ConceptCircle(this.concept, null);
    toConcept:ConceptCircle | undefined =new ConceptCircle(this.concept, null);
    selected = false;
    quadrant = 0;
    type = null;
    id = 0;
    canvas: any;
    ctx: any;
    connection: Connection;
    active: boolean;


    constructor(connection: Connection,ctx:any){
        this.canvas = ctx.canvas;
        this.ctx = ctx;
        this.connection = connection;
        this.active = false;    
        this.selected = false;
        this.updateConcept(connection);
        this.id = connection.id;
        ConnectionLineList.addNewConnectionLine(this);


    }

   async updateConcept(connection: Connection){

        if(!this.ofConcept){
            this.ofConcept = await ConceptCircleList.getConceptCircle(connection.ofTheConceptId,this.ctx);
        }
        if(!this.toConcept){
            
            this.toConcept =await  ConceptCircleList.getConceptCircle(connection.toTheConceptId,this.ctx);
        }
    }




    draw(ctx: any){
        if(this.ofConcept && this.toConcept){
            drawArrow(ctx,this.ofConcept.x,this.ofConcept.y,this.toConcept.x, this.toConcept.y, 1,"black");
            this.drawNumber(ctx);
        }
            
    }

    drawNumber(ctx: any){
        if(this.ofConcept && this.toConcept){
            let xmid = (this.ofConcept.x + this.toConcept.x)/2;
            let ymid = (this.ofConcept.y + this.toConcept.y)/2;
            if(this.connection.type){
    
                ctx.fillStyle = 'red';
                ctx.font = this.ofConcept.radius * 0.5 + "px arial";
                ctx.textBaseline = "middle";
                ctx.textAlign = "center";
                ctx.fillText(this.connection.type.characterValue, xmid, ymid);
    
            }
            else{
                ctx.fillStyle = 'green';
                ctx.font = this.ofConcept.radius  * 0.2 + "px arial";
                ctx.textBaseline = "middle";
                ctx.textAlign = "center";
                ctx.fillText(this.connection.id.toString(), xmid, ymid);
            }
        }

    }

    activate() {
        this.active = !this.active
    }

    select() {
        this.selected = !this.selected
    }

  



    

}