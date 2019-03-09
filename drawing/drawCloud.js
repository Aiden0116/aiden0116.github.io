function drawCloud(){
    ctx.save();
    ctx.translate(x*UNIT,y*UNIT);
    ctx.scale(scale,scale);
    ctx.fillStyle= "white";
    ctx.fillRect(UNIT,0,3*UNIT,UNIT);
    ctx.fillRect(0,UNIT,5*UNIT,UNIT);
    ctx.fillRect(UNIT,2*UNIT,3*UNIT,UNIT);
    ctx.restore();
    ctx.restore();

   
    
}