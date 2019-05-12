function drawBlocks (x,y,numBricks,scale){
   
    for (var i = 0; i<numBricks; i++)  {
  
        ctx.save();
        ctx.translate(i*10*UNIT+x*UNIT,y*UNIT);
        ctx.scale(scale,scale)
        drawBlock();
        ctx.restore();
    }
}

function drawBlock(x,y){
    ctx.fillStyle ="#CB4F0E"
    ctx.fillRect(UNIT,0,8*UNIT,9*UNIT);
    ctx.fillStyle="black"
    ctx.fillRect(UNIT,0,8*UNIT,UNIT);
    ctx.fillRect(0,UNIT,UNIT,8*UNIT);
    ctx.fillRect(UNIT,9*UNIT,8*UNIT,UNIT);
    ctx.fillRect(2*UNIT, 2*UNIT, UNIT,UNIT);
    ctx.fillRect(7*UNIT,2*UNIT,UNIT,UNIT);
    ctx.fillRect(2*UNIT,7*UNIT,UNIT,UNIT);
    ctx.fillRect(7*UNIT,7*UNIT,UNIT,UNIT);
    ctx.fillRect(9*UNIT,UNIT,UNIT,8*UNIT);
    ctx.translate(x*UNIT,y*UNIT);
    ctx.save();
    ctx.restore();
}