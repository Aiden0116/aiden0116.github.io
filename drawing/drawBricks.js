function drawBricks (x,y, numBricks){
    // for loop
    for (var i = 0; i<numBricks; i++)  {
        //  in the first loop, i = 0.
        //  in the second loop, i = 1.
        //  in the third loop, i = 2.
        //  in the fourth loop.i = 3.
        //  in the fifth loop, i = 4.
        ctx.save();
        ctx.translate(i*10*UNIT+x*UNIT,y*UNIT);
        drawBrick();
        ctx.restore();
         ctx.save();
        ctx.translate(i*10*UNIT+x*UNIT,y*UNIT);
        ctx.restore();
    }
}

function drawBrick(){
    ctx.fillStyle = "#5BB348";
    ctx.fillRect(0,0,10*UNIT,10*UNIT);
    ctx.fillStyle = "#8C6542";
    ctx.fillRect(0,7*UNIT,10*UNIT,40*UNIT);

}
    

