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
        //  ctx.save();
        // ctx.translate(i*10*UNIT+x*UNIT,y*UNIT);
        // ctx.restore();
    }
}

function drawWoodBlock(){
    ctx.fillStyle="#BC9862";
ctx.fillRect(11*UNIT,6*UNIT,5*UNIT,1*UNIT);
ctx.fillRect(0*UNIT,8*UNIT,5*UNIT,1*UNIT);
ctx.fillRect(7*UNIT,8*UNIT,2*UNIT,1*UNIT);
ctx.fillRect(12*UNIT,8*UNIT,3*UNIT,1*UNIT);
ctx.fillRect(5*UNIT,9*UNIT,1*UNIT,1*UNIT);
ctx.fillRect(12*UNIT,9*UNIT,1*UNIT,1*UNIT);
ctx.fillRect(0*UNIT,10*UNIT,1*UNIT,1*UNIT);
ctx.fillRect(4*UNIT,10*UNIT,2*UNIT,1*UNIT);
ctx.fillRect(0*UNIT,12*UNIT,5*UNIT,1*UNIT);
ctx.fillRect(6*UNIT,12*UNIT,1*UNIT,1*UNIT);
ctx.fillRect(13*UNIT,12*UNIT,3*UNIT,1*UNIT);
ctx.fillRect(3*UNIT,13*UNIT,4*UNIT,1*UNIT);
ctx.fillRect(8*UNIT,13*UNIT,1*UNIT,1*UNIT);
ctx.fillRect(0*UNIT,14*UNIT,2*UNIT,1*UNIT);
ctx.fillRect(5*UNIT,14*UNIT,2*UNIT,1*UNIT);
ctx.fillRect(8*UNIT,14*UNIT,2*UNIT,1*UNIT);
ctx.fillRect(12*UNIT,14*UNIT,4*UNIT,1*UNIT);
ctx.fillRect(0*UNIT,0*UNIT,1*UNIT,1*UNIT);
ctx.fillRect(5*UNIT,0*UNIT,2*UNIT,1*UNIT);
ctx.fillRect(9*UNIT,0*UNIT,6*UNIT,1*UNIT);
ctx.fillRect(0*UNIT,1*UNIT,2*UNIT,1*UNIT);
ctx.fillRect(14*UNIT,1*UNIT,1*UNIT,1*UNIT);
ctx.fillRect(0*UNIT,2*UNIT,2*UNIT,1*UNIT);
ctx.fillRect(9*UNIT,2*UNIT,2*UNIT,1*UNIT);
ctx.fillRect(12*UNIT,2*UNIT,3*UNIT,1*UNIT);
ctx.fillRect(0*UNIT,4*UNIT,1*UNIT,1*UNIT);
ctx.fillRect(5*UNIT,4*UNIT,2*UNIT,1*UNIT);
ctx.fillRect(8*UNIT,4*UNIT,1*UNIT,1*UNIT);
ctx.fillRect(15*UNIT,4*UNIT,1*UNIT,1*UNIT);
ctx.fillRect(6*UNIT,5*UNIT,1*UNIT,1*UNIT);
ctx.fillRect(0*UNIT,6*UNIT,3*UNIT,1*UNIT);
ctx.fillRect(4*UNIT,6*UNIT,3*UNIT,1*UNIT);
ctx.fillStyle="#9F844D";
ctx.fillRect(7*UNIT,6*UNIT,3*UNIT,1*UNIT);
ctx.fillRect(6*UNIT,8*UNIT,1*UNIT,1*UNIT);
ctx.fillRect(15*UNIT,8*UNIT,1*UNIT,1*UNIT);
ctx.fillRect(0*UNIT,9*UNIT,5*UNIT,1*UNIT);
ctx.fillRect(8*UNIT,9*UNIT,3*UNIT,1*UNIT);
ctx.fillRect(13*UNIT,9*UNIT,3*UNIT,1*UNIT);
ctx.fillRect(6*UNIT,10*UNIT,4*UNIT,1*UNIT);
ctx.fillRect(15*UNIT,10*UNIT,1*UNIT,1*UNIT);
ctx.fillRect(5*UNIT,12*UNIT,1*UNIT,1*UNIT);
ctx.fillRect(7*UNIT,12*UNIT,2*UNIT,1*UNIT);
ctx.fillRect(10*UNIT,12*UNIT,2*UNIT,1*UNIT);
ctx.fillRect(1*UNIT,13*UNIT,1*UNIT,1*UNIT);
ctx.fillRect(7*UNIT,13*UNIT,1*UNIT,1*UNIT);
ctx.fillRect(11*UNIT,13*UNIT,4*UNIT,1*UNIT);
ctx.fillRect(2*UNIT,14*UNIT,3*UNIT,1*UNIT);
ctx.fillRect(7*UNIT,14*UNIT,1*UNIT,1*UNIT);
ctx.fillRect(10*UNIT,14*UNIT,1*UNIT,1*UNIT);
ctx.fillRect(1*UNIT,0*UNIT,4*UNIT,1*UNIT);
ctx.fillRect(8*UNIT,0*UNIT,1*UNIT,1*UNIT);
ctx.fillRect(15*UNIT,0*UNIT,1*UNIT,1*UNIT);
ctx.fillRect(6*UNIT,1*UNIT,5*UNIT,1*UNIT);
ctx.fillRect(12*UNIT,1*UNIT,1*UNIT,1*UNIT);
ctx.fillRect(15*UNIT,1*UNIT,1*UNIT,1*UNIT);
ctx.fillRect(2*UNIT,2*UNIT,4*UNIT,1*UNIT);
ctx.fillRect(15*UNIT,2*UNIT,1*UNIT,1*UNIT);
ctx.fillRect(1*UNIT,4*UNIT,4*UNIT,1*UNIT);
ctx.fillRect(7*UNIT,4*UNIT,1*UNIT,1*UNIT);
ctx.fillRect(9*UNIT,4*UNIT,2*UNIT,1*UNIT);
ctx.fillRect(0*UNIT,5*UNIT,2*UNIT,1*UNIT);
ctx.fillRect(7*UNIT,5*UNIT,1*UNIT,1*UNIT);
ctx.fillRect(11*UNIT,5*UNIT,5*UNIT,1*UNIT);
ctx.fillStyle="#B4905A";
ctx.fillRect(7*UNIT,0*UNIT,1*UNIT,1*UNIT);
ctx.fillRect(2*UNIT,1*UNIT,1*UNIT,1*UNIT);
ctx.fillRect(4*UNIT,1*UNIT,2*UNIT,1*UNIT);
ctx.fillRect(11*UNIT,1*UNIT,1*UNIT,1*UNIT);
ctx.fillRect(13*UNIT,1*UNIT,1*UNIT,1*UNIT);
ctx.fillRect(6*UNIT,2*UNIT,3*UNIT,1*UNIT);
ctx.fillRect(11*UNIT,2*UNIT,1*UNIT,1*UNIT);
ctx.fillRect(12*UNIT,4*UNIT,3*UNIT,1*UNIT);
ctx.fillRect(3*UNIT,5*UNIT,3*UNIT,1*UNIT);
ctx.fillRect(8*UNIT,5*UNIT,3*UNIT,1*UNIT);
ctx.fillRect(3*UNIT,6*UNIT,1*UNIT,1*UNIT);
ctx.fillRect(9*UNIT,8*UNIT,3*UNIT,1*UNIT);
ctx.fillRect(6*UNIT,9*UNIT,2*UNIT,1*UNIT);
ctx.fillRect(1*UNIT,10*UNIT,3*UNIT,1*UNIT);
ctx.fillRect(10*UNIT,10*UNIT,5*UNIT,1*UNIT);
ctx.fillRect(12*UNIT,12*UNIT,1*UNIT,1*UNIT);
ctx.fillRect(0*UNIT,13*UNIT,1*UNIT,1*UNIT);
ctx.fillRect(9*UNIT,13*UNIT,2*UNIT,1*UNIT);
ctx.fillRect(15*UNIT,13*UNIT,1*UNIT,1*UNIT);
ctx.fillStyle="#735E39";
ctx.fillRect(3*UNIT,1*UNIT,1*UNIT,1*UNIT);
ctx.fillRect(8*UNIT,2*UNIT,1*UNIT,1*UNIT);
ctx.fillRect(11*UNIT,4*UNIT,1*UNIT,1*UNIT);
ctx.fillRect(2*UNIT,5*UNIT,1*UNIT,1*UNIT);
ctx.fillRect(10*UNIT,6*UNIT,1*UNIT,1*UNIT);
ctx.fillRect(5*UNIT,8*UNIT,1*UNIT,1*UNIT);
ctx.fillRect(11*UNIT,9*UNIT,1*UNIT,1*UNIT);
ctx.fillRect(9*UNIT,12*UNIT,1*UNIT,1*UNIT);
ctx.fillRect(2*UNIT,13*UNIT,1*UNIT,1*UNIT);
ctx.fillRect(11*UNIT,14*UNIT,1*UNIT,1*UNIT);
ctx.fillRect(0*UNIT,3*UNIT,16*UNIT,1*UNIT);
ctx.fillRect(0*UNIT,7*UNIT,16*UNIT,1*UNIT);
ctx.fillRect(0*UNIT,11*UNIT,16*UNIT,1*UNIT);
ctx.fillRect(0*UNIT,15*UNIT,16*UNIT,1*UNIT);
}

