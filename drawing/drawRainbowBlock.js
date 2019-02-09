function drawRainbowBlocks (x,y, numBricks){
    // for loop
    for (var i = 0; i<numBricks; i++)  {
        //  in the first loop, i = 0.
        //  in the second loop, i = 1.
        //  in the third loop, i = 2.
        //  in the fourth loop.i = 3.
        //  in the fifth loop, i = 4.
        ctx.save();
        ctx.translate(i*10*UNIT+x*UNIT,y*UNIT);
        drawRainbowBlock();
        ctx.restore();
         ctx.save();
        ctx.translate(i*10*UNIT+x*UNIT,y*UNIT);
        ctx.restore();
    }
}

function drawRainbowBlock(){
    ctx.fillStyle = "E93F33";
    ctx.fillRect(0,0,UNIT,UNIT);
    ctx.fillRect(UNIT,UNIT,UNIT,UNIT);
    ctx.fillRect(2*UNIT,2*UNIT,UNIT,UNIT,);
    ctx.fillRect(3*UNIT,3*UNIT,UNIT,UNIT,);
    ctx.fillRect(4*UNIT,4*UNIT,UNIT,UNIT,);
    ctx.fillRect(5*UNIT,5*UNIT,UNIT,UNIT,);
    ctx.fillRect(6*UNIT,6*UNIT,UNIT,UNIT,);
    ctx.fillRect(7*UNIT,7*UNIT,UNIT,UNIT,);
    ctx.fillRect(8*UNIT,8*UNIT,UNIT,UNIT,);
    ctx.fillRect(9*UNIT,9*UNIT,UNIT,UNIT,);
    ctx.fillRect(10*UNIT,10*UNIT,UNIT,UNIT,);
    ctx.fillStyle = "F29C33";
    ctx.fillRect(0,0,UNIT,UNIT);
    ctx.fillRect(UNIT,0,UNIT,UNIT,);
    ctx.fillRect(UNIT,2*UNIT,UNIT,UNIT);
    ctx.fillRect(2*UNIT,UNIT,UNIT,UNIT);
    ctx.fillRect();
}
    