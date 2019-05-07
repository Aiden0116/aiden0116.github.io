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
    ctx.translate(x*UNIT,y*UNIT);
    ctx.save();
    ctx.fillRect(0,0,14*UNIT,14*UNIT);
    ctx.restore();
}