function drawCloud(x,y){
    ctx.save();
    ctx.translate(x*UNIT,y*UNIT);
    ctx.scale(5,5);
    ctx.fillStyle= "white";
    ctx.fillRect(UNIT,0,3*UNIT,UNIT);
    ctx.fillRect(0,UNIT,5*UNIT,UNIT);
    ctx.fillRect(UNIT,2*UNIT,3*UNIT,UNIT);
    ctx.restore();

   

}