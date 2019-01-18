function drawKirby() {
 drawOutline();
 drawBody();
}

function drawOutline() {
    //setting colour for fill
    ctx.fillStyle ="black";
    // createing a filled rectangle
    ctx.fillRect(0,2*unit,unit,6*unit);
    ctx.fillRect(unit,unit,unit,unit)
    ctx.fillRect(2*unit,0,2*unit,unit)
    ctx.fillRect(5*unit,0,5*unit,unit)
}

function drawBody(){
    ctx.fillStyle = "#F1ADD1";
    ctx.fillRect(2*unit,unit,2*unit,unit);

}