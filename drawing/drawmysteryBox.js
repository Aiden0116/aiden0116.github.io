function drawMysteryBox (x,y){
    ctx.save();
   ctx.translate(x * UNIT, y * UNIT);
    drawOutline();
    drawyellow();
    drawBrown();
    ctx.restore();
}

function drawOutline(){
    ctx.fillStyle="black";
    ctx.fillRect(0,2*UNIT,UNIT,12*UNIT);
    ctx.fillRect(1*UNIT,1*UNIT,UNIT,UNIT);
    ctx.fillRect(2*UNIT,0,12*UNIT,UNIT);
    ctx.fillRect(1*UNIT,14*UNIT,UNIT,UNIT);
    ctx.fillRect(2*UNIT,15*UNIT,12*UNIT,UNIT);
    ctx.fillRect(14*UNIT,14*UNIT,UNIT,UNIT);
    ctx.fillRect(15*UNIT,1*UNIT,UNIT,UNIT);
    ctx.fillRect(15*UNIT,2*UNIT,UNIT,12*UNIT);
    ctx.fillRect(4*UNIT,2*UNIT,7*UNIT,UNIT);
    ctx.fillRect(3*UNIT,3*UNIT,UNIT,UNIT);
    ctx.fillRect(2*UNIT,4*UNIT,UNIT,2*UNIT);
    ctx.fillRect(3*UNIT,6*UNIT,6*UNIT,UNIT);
    ctx.fillRect(6*UNIT,5*UNIT,3*UNIT,UNIT);
    ctx.fillRect(5*UNIT,7*UNIT,UNIT,2*UNIT);
    ctx.fillRect(6*UNIT,9*UNIT,3*UNIT,UNIT);
    ctx.fillRect(5*UNIT,10*UNIT,UNIT,2*UNIT);
    ctx.fillRect(6*UNIT,12*UNIT,3*UNIT,UNIT);
    ctx.fillRect(9*UNIT,10*UNIT,UNIT,2*UNIT);
    ctx.fillRect(9*UNIT,8*UNIT,2*UNIT,UNIT);
    ctx.fillRect(11*UNIT,7*UNIT,UNIT,UNIT);
    ctx.fillRect(12*UNIT,4*UNIT,UNIT,3*UNIT);
    ctx.fillRect(11*UNIT,3*UNIT,UNIT,UNIT);
}
function drawyellow (){
    ctx.fillStyle="#FCD733";
    ctx.fillRect(2*UNIT,2*UNIT,2*UNIT,UNIT);
    ctx.fillRect(2*UNIT,3*UNIT,UNIT,UNIT);
    ctx.fillRect(2*UNIT,6*UNIT,UNIT,6*UNIT);
    ctx.fillRect(3*UNIT,7*UNIT,UNIT,6*UNIT);
    ctx.fillRect(4*UNIT,7*UNIT,UNIT,6*UNIT);
    ctx.fillRect(5*UNIT,9*UNIT,UNIT,UNIT);
    ctx.fillRect(5*UNIT,12*UNIT,UNIT,UNIT);
    ctx.fillRect(9*UNIT,12*UNIT,3*UNIT,UNIT);
    ctx.fillRect(10*UNIT,11*UNIT,3*UNIT,UNIT);
    ctx.fillRect(10*UNIT,10*UNIT,3*UNIT,UNIT);
    ctx.fillRect(9*UNIT,9*UNIT,4*UNIT,UNIT);
    ctx.fillRect(11*UNIT,8*UNIT,2*UNIT,UNIT);
    ctx.fillRect(12*UNIT,7*UNIT,UNIT,UNIT);
    ctx.fillRect(12*UNIT,3*UNIT,UNIT,UNIT);
    ctx.fillRect(11*UNIT,2*UNIT,UNIT,UNIT);
    
    
}
function drawBrown(){
    ctx.fillStyle=""
}