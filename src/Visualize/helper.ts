export function drawCircle(ctx:any,x:any,y:any,radius:any,color:any) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0 , 2 * Math.PI);
    ctx.fillStyle = color;
    //  const grd = ctx.createRadialGradient(x, y, x+5, x + 10 , y+10 , x+ 20);
    // grd.addColorStop(0, color);
    // grd.addColorStop(1, "white");
    //  ctx.fillStyle = grd;
    ctx.fill();
  }

  export function drawTriangle(ctx:any,x:any,y:any,radius:any,color:any) {

    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.moveTo(x, y + (radius/3));
    ctx.lineTo(x-((2/3)*radius), y+(radius/3));
    ctx.lineTo(x, y - (radius *(2/3)));
    ctx.lineTo(x+((2/3)*radius), y + (radius / 3));
    ctx.lineTo(x, y + radius/3);
    ctx.fill();
    // // path.moveTo((sWidth/2)+50,sHeight/2);
    // // path.lineTo((sWidth/2),(sHeight/2)-50);
    // // path.lineTo((sWidth/2)-50,sHeight/2);
    // // ctx.fill(path);
    // // ctx.beginPath();
    // // ctx.arc(x, y, radius, 0 , 2 * Math.PI);
    // // ctx.fillStyle = color;
    //  const grd = ctx.createRadialGradient(x, y, x+5, x + 10 , y+10 , x+ 20);
    // grd.addColorStop(0, color);
    // grd.addColorStop(1, "white");
    //  ctx.fillStyle = grd;
    ctx.fill();
  }


  export function drawLine(ctx:any, x1:any, y1:any, x2:any, y2:any, color:any){
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color;
    ctx.stroke();
  }

  export function drawArrow(ctx:any, fromx:any, fromy:any, tox:any, toy:any, arrowWidth:any, color:any){
    //variables to be used when creating the arrow
    var headlen = 10;
    var angle = Math.atan2(toy-fromy,tox-fromx);
 
    ctx.save();
    ctx.strokeStyle = color;
 
    //starting path of the arrow from the start square to the end square
    //and drawing the stroke
    ctx.beginPath();
    ctx.moveTo(fromx, fromy);
    ctx.lineTo(tox, toy);
    ctx.lineWidth = arrowWidth;
    ctx.stroke();
 
    //starting a new path from the head of the arrow to one of the sides of
    //the point
    ctx.beginPath();
    ctx.moveTo(tox, toy);
    ctx.lineTo(tox-headlen*Math.cos(angle-Math.PI/7),
               toy-headlen*Math.sin(angle-Math.PI/7));
 
    //path from the side point of the arrow, to the other side point
    ctx.lineTo(tox-headlen*Math.cos(angle+Math.PI/7),
               toy-headlen*Math.sin(angle+Math.PI/7));
 
    //path from the side point back to the tip of the arrow, and then
    //again to the opposite side point
    ctx.lineTo(tox, toy);
    ctx.lineTo(tox-headlen*Math.cos(angle-Math.PI/7),
               toy-headlen*Math.sin(angle-Math.PI/7));
 
    //draws the paths created above
    ctx.stroke();
    ctx.restore();
}

  export function drawArc(ctx:any, x1:any, y1:any, x2:any, y2:any, color:any){
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.arcTo(x1, y1,x2, y2, 5);
    ctx.strokeStyle = color;
    ctx.stroke();
  }


export function getMouseCoords(canvas:any, event:any){
    let canvasCoords = canvas.getBoundingClientRect();
    var left = canvasCoords.left;
    var top = canvasCoords.top;
    // if(canvasCoords.left > 0){
    //   left = canvasCoords.left;
    // }
    if(canvasCoords.top > 0){
      top = canvasCoords.top;
    }
    else{
      top = Math.abs(canvasCoords.top) - canvas.offsetTop;
    }
    return {

        x: event.pageX - left,
        y: event.pageY - canvas.offsetTop
    }
}

export function randomIntFromInterval(min:any, max:any) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

export function getOffsetCoords(mouse:any, conceptCircle:any){

    return {
        x: mouse.x - conceptCircle.x,
        y: mouse.y - conceptCircle.y
    }
}

export function cursorInRect(mouseX:any, mouseY:any, rectX:any, rectY:any, radius:any) {
    let xLine = mouseX < rectX + radius && mouseX > rectX - radius;
    let yLine = mouseY < rectY + radius && mouseY > rectY - radius;
    // console.log("mouseX",mouseX);
    // console.log("mouseY", mouseY);
    // console.log("rectX", rectX);
    // console.log("rectY", rectY);
    // console.log("radius", radius);
    // console.log(xLine,yLine);
    return xLine && yLine
}