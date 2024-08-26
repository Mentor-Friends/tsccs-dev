import { Concept, Connection, CreateDefaultConcept, GetAllConnectionsOfComposition, GetTheConcept } from "../app";
import { drawCircle, drawTriangle, randomIntFromInterval } from "./helper";
import { ConceptCircleList } from "./ConceptCircleList";
import { ConnectionLine } from "./ConnectionLine";
import { checkIfExists } from "./drawExistingConcepts";
import { ConnectionLineList } from "./ConnectionLineList";

export class ConceptCircle{
    concept = CreateDefaultConcept();
    x = 30;
    y = 30;
    radius = 10;
    selected = false;
    detailsVisible = false;
    quadrant = 0;
    color = "green";
    isComposition = false;
    parent: ConceptCircle | null = null;
    isMoved = false;
    childCount = 0;
    order = 0;
    ctx = null;
    dataConnections: Connection[] = [];
    childrenConcepts: ConceptCircle[] = [];
    isGrouped = false;
    canvas: any ;
    active: boolean = true;



    constructor(concept: Concept,ctx: any){
        this.canvas = ctx.canvas
        this.ctx = ctx;
        this.concept = concept;
        this.parent  = null;
        this.x = randomIntFromInterval(this.radius,this.canvas.width - this.radius);
        this.y = randomIntFromInterval(this.radius,this.canvas.height - this.radius );
        this.radius = 15;
        this.active = false;    
        this.selected = false;
        this.getQuadrant(ctx);
        this.order = 1;
    }

    realign(){
        for(let i=0; i<this.childrenConcepts.length;i++){
            this.childrenConcepts[i].drawAsPerParent();
        }
        // this.x = randomIntFromInterval(this.radius,this.canvas.width - this.radius);
        // this.y = randomIntFromInterval(this.radius,this.canvas.height - this.radius );
    }

    addDataConnections(connections: Connection[]){
        this.dataConnections = connections;
    }




    setInPlace(newX: any,newY: any,ctx: any){
        let canvasCoords =  ctx.canvas.getBoundingClientRect();
        let rightWall = ctx.canvas.offsetWidth;
        let leftWall = ctx.canvas.offsetLeft;
        let topWall = ctx.canvas.offsetTop;
        let bottomWall = ctx.canvas.offsetHeight;
        let collision = false;

        let oldX = this.x;
        let oldY = this.y;
            if(newX - this.radius <  leftWall ){
                this.x = leftWall + this.radius;
            }
            else if( newX + this.radius > rightWall){
                this.x = rightWall - this.radius;
            }
            else{
                this.x = newX;
            }
    
            if(newY - this.radius < topWall){
                this.y = topWall + this.radius;
            }
            else if(newY + this.radius > bottomWall){
                this.y = bottomWall - this.radius;
            }
            else{
                this.y = newY;
            }
            this.getQuadrant(ctx);
            for(var i=0; i<ConceptCircleList.drawList.length; i++){
               //let isCollision = this.checkWithAnotherConcept(ConceptCircleList.drawList[i])
            //    if(isCollision){
            //         this.x = oldX;
            //         this.y = oldY;

            //    }
            //    if(isCollision){
            //     this.setInPlace(newX-this.radius, newY-this.radius,ctx);
            //    }
                // this.x = newX - this.radius;
                // this.y = newY - this.radius;
               }
        
       
    }

    draw(ctx: any){
            if(this.selected){
                this.color = "red";
            }
            else{
                if(this.isComposition){
                    this.color = "purple";
                }
                else{
                    this.color = "green";
    
                }
    
            }
    
            drawTriangle(ctx,this.x,this.y,this.radius,this.color);
    
            this.drawNumber(ctx);
            if(this.isGrouped){
                this.realign();
            }
    }

    drawAsPerParent(){
        if(this.parent){
          this.x = this.parent.x + (50 * Math.cos(this.order*15));
          this.y = this.parent.y + (50 * Math.sin((360 - this.order)*15));
        }
    }

    drawNumber(ctx: any){
        ctx.fillStyle = 'black';
        ctx.font = this.radius * 0.5 + "px arial";
        ctx.textBaseline = "middle";
        ctx.textAlign = "center";
        
        var regex = "the_";


        var localmainString = this.concept?.type?.characterValue ?? "";

        var localKey = localmainString.replace(regex, "");
        ctx.fillText(localKey + ": " + this.concept?.characterValue + " --" +  this.concept?.id.toString(), this.x, this.y);

        //ctx.fillText(this.concept.id.toString() + "-" + this.quadrant.toString() + this.concept.type.characterValue, this.x, this.y);
    }

    activate() {
        this.active = !this.active

    }

    select() {
        this.selected = !this.selected
        this.isMoved = true;

    }

    makeComposition(){
        this.isComposition = true;
        this.radius = 30;
    }

    async showDetails(){
        if(!this.detailsVisible){
            let id = this.concept.id;
            let ctx = this.ctx;
            if(ctx){
                var connections =  await GetAllConnectionsOfComposition(id);
                var conceptIds = [];
                conceptIds.push(id);
               for(let i=0 ; i< connections.length; i++){
                if(!checkIfExists(connections[i].ofTheConceptId, conceptIds))
                {
                    conceptIds.push(connections[i].ofTheConceptId);
                }
                if(!checkIfExists(connections[i].toTheConceptId,conceptIds)){
                    conceptIds.push(connections[i].toTheConceptId);
                }
            
               }
               for(let i=0;i<conceptIds.length; i++){
                    var concept = await GetTheConcept(conceptIds[i]);

                    if(concept){
                        if(concept.id == id){
                            this.makeComposition();
                            //printConcepts[id] = this;
                        }
                        else{

                        var conceptCircle = new ConceptCircle(concept,ctx);
                        ConceptCircleList.addNewConceptCircle(conceptCircle);


        
                        }
            
                    }
    
                }
                this.dataConnections = connections;
                for(let j=0;j<connections.length; j++){
                     new ConnectionLine(connections[j],ctx);
                     let toTheConceptCircle = ConceptCircleList.getConceptCircleFromList(connections[j].toTheConceptId);
                    let ofTheConceptCircle = ConceptCircleList.getConceptCircleFromList(connections[j].ofTheConceptId);
                     if(toTheConceptCircle && ofTheConceptCircle){
                        toTheConceptCircle.parent = ofTheConceptCircle;
                        toTheConceptCircle.order = ofTheConceptCircle.childCount;
                        ofTheConceptCircle.childCount = ofTheConceptCircle.childCount + 1;
                        toTheConceptCircle.drawAsPerParent();
                        this.childrenConcepts.push(toTheConceptCircle);
                     }
                     
                }
                for(let i=0; i<ConceptCircleList.drawList.length;i++){
                    ConceptCircleList.drawList[i].drawAsPerParent();
                }
            }
        }
        else{
            for(let i=0; i< this.childrenConcepts.length; i++){
                ConceptCircleList.removeConceptCircle(this.childrenConcepts[i]);
            }
            for(let j=0; j<this.dataConnections.length; j++){
                console.log("removing", this.dataConnections[j]);
               // ConnectionLineList.removeConnectionLine(this.dataConnections[j]);
            }
            this.childrenConcepts = [];
            this.dataConnections = [];
        }
      
        this.detailsVisible = !this.detailsVisible;
        

    }

    getQuadrant(ctx: any){
        let canvasCoords = ctx.canvas.getBoundingClientRect();
        let rightWall = canvasCoords.right;
        let leftWall = canvasCoords.left;
        let topWall = canvasCoords.top;
        let bottomWall = canvasCoords.bottom;
        let centerX = (leftWall + rightWall )/2;
        let centerY = (topWall + bottomWall)/2;
        if(this.x > centerX && this.y > centerY){
            this.quadrant = 4;
        }
        if(this.x > centerX && this.y < centerY){
            this.quadrant = 1;
        }
        if(this.x < centerX && this.y > centerY){
            this.quadrant = 3;
        }
        if(this.x < centerX && this.y < centerY){
            this.quadrant = 2;
        }
    }

    checkWithAnotherConcept(conceptToCheck:ConceptCircle){
        let colliding = false;
        if(conceptToCheck.quadrant == this.quadrant && conceptToCheck.concept.id != this.concept.id){
            const dx = this.x - conceptToCheck.x;
            const dy = this.y - conceptToCheck.y;
            const distance = Math.sqrt(dx*dx + dy*dy);
            if(distance < this.radius + conceptToCheck.radius){
                colliding = true;
            }
        }
        return colliding;
    }



    

}