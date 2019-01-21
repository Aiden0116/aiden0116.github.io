function drawKirby() {
 drawOutline();
 drawBody();
}

function drawOutline() {
    //setting colour for fill
    ctx.fillStyle ="black";
    // createing a filled rectangle
    ctx.fillRect(0,2*UNIT,UNIT,6*UNIT);
    ctx.fillRect(UNIT,UNIT,UNIT,UNIT)
    ctx.fillRect(2*UNIT,0,2*UNIT,UNIT)
    ctx.fillRect(5*UNIT,0,5*UNIT,UNIT)
    ctx.fillRect(3*UNIT,2*UNIT,UNIT,UNIT)
    ctx.fillRect(4*UNIT,UNIT,UNIT,UNIT)
    ctx.fillRect(10*UNIT,UNIT,2*UNIT,UNIT)
    ctx.fillRect(12*UNIT,2*UNIT,UNIT,UNIT)
    ctx.fillRect(13*UNIT,3*UNIT,UNIT,2*UNIT)
    ctx.fillRect(14*UNIT,5*UNIT,UNIT,UNIT)
    ctx.fillRect(15*UNIT,6*UNIT,UNIT,3*UNIT)
    ctx.fillRect(12*UNIT,9*UNIT,3*UNIT,UNIT)
    ctx.fillRect(15*UNIT,10*UNIT,UNIT,3*UNIT)
    ctx.fillRect(14*UNIT,13*UNIT,UNIT,UNIT)
    ctx.fillRect(13*UNIT,14*UNIT,UNIT,UNIT)
    ctx.fillRect(10*UNIT,15*UNIT,3*UNIT,UNIT)
    ctx.fillRect(6*UNIT,14*UNIT,5*UNIT,UNIT);
    ctx.fillRect(9*UNIT,13*UNIT,UNIT,UNIT)
    ctx.fillRect(10*UNIT,11*UNIT,UNIT,2*UNIT)
    ctx.fillRect(11*UNIT,10*UNIT,UNIT,UNIT)
    ctx.fillRect(UNIT,15*UNIT,6*UNIT,UNIT)
    ctx.fillRect(0,14*UNIT,UNIT,UNIT)
    ctx.fillRect(UNIT,13*UNIT,UNIT,UNIT)
    ctx.fillRect(2*UNIT,12*UNIT,2*UNIT,UNIT)
    ctx.fillRect(2*UNIT,12*UNIT,UNIT,UNIT)
    ctx.fillRect(UNIT,8*UNIT,UNIT,3*UNIT)
    ctx.fillRect(4*UNIT,13*UNIT,2*UNIT,UNIT)
    ctx.fillRect(6*UNIT,3*UNIT,UNIT,3*UNIT)
    ctx.fillRect(8*UNIT,3*UNIT,UNIT,3*UNIT)
    ctx.fillRect(7*UNIT,7*UNIT,UNIT,2*UNIT)
    ctx.fillRect(2*UNIT,11*UNIT,UNIT,UNIT)

}

function drawBody(){
    ctx.fillStyle = "#F1ADD1";
    ctx.fillRect(2*UNIT,UNIT,UNIT,2*UNIT)
    ctx.fillRect(3*UNIT,UNIT,UNIT,UNIT)
    ctx.fillRect(UNIT,2*UNIT,UNIT,6*UNIT)
    ctx.fillRect(2*UNIT,2*UNIT,UNIT,9*UNIT)
    ctx.fillRect(3*UNIT,3*UNIT,UNIT,9*UNIT)
    ctx.fillRect(4*UNIT,2*UNIT,UNIT,4*UNIT)
    ctx.fillRect(4*UNIT,7*UNIT,UNIT,6*UNIT)
    ctx.fillRect(5*UNIT,2*UNIT,UNIT,4*UNIT)
    ctx.fillRect(5*UNIT,7*UNIT,UNIT,6*UNIT)
    ctx.fillRect(5*UNIT,UNIT,5*UNIT,UNIT)
    ctx.fillRect(5*UNIT,2*UNIT,5*UNIT,UNIT)
    ctx.fillRect(3*UNIT,7*UNIT,UNIT,4*UNIT)
    ctx.fillRect(6*UNIT,6*UNIT,UNIT,8*UNIT)
    ctx.fillRect(7*UNIT,3*UNIT,UNIT,4*UNIT)
    ctx.fillRect(7*UNIT,9*UNIT,UNIT,5*UNIT)
    ctx.fillRect(8*UNIT,6*UNIT,UNIT,8*UNIT)
    ctx.fillRect(8*UNIT,)

}