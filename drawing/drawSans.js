function drawSans(x,y,scale) {
    ctx.save();
    ctx.translate(x*UNIT,y*UNIT);
    ctx.scale(scale,scale);
    drawHead();
    drawSans();
    drawCoat();
    ctx.restore();
}
function drawHead() {
    ctx.fillStyle = "black";
    ctx.fillRect(7*UNIT,0,9*UNIT,1*UNIT);
    ctx.fillRect(5*UNIT,1*UNIT,2*UNIT,1*UNIT);
    ctx.fillRect(4*UNIT,2*UNIT,1*UNIT,2*UNIT);
    ctx.fillRect(3*UNIT,4*UNIT,1*UNIT,4*UNIT);
    ctx.fillRect(4*UNIT,8*UNIT,1*UNIT,1*UNIT);
    ctx.fillRect(3*UNIT,9*UNIT,2*UNIT,1*UNIT);
    ctx.fillRect(3*UNIT,10*UNIT,1*UNIT,2*UNIT);
    ctx.fillRect(4*UNIT,12*UNIT,2*UNIT,1*UNIT);
    ctx.fillRect(3*UNIT,13*UNIT,5*UNIT,1*UNIT);
    ctx.fillRect(6*UNIT,5*UNIT,3*UNIT,1*UNIT);
    ctx.fillRect(6*UNIT,6*UNIT,3*UNIT,1*UNIT);
    ctx.fillRect(6*UNIT,7*UNIT,3*UNIT,1*UNIT);
    ctx.fillRect(14*UNIT,5*UNIT,3*UNIT,1*UNIT);
    ctx.fillRect(14*UNIT,6*UNIT,3*UNIT,1*UNIT);
    ctx.fillRect(14*UNIT,7*UNIT,3*UNIT,1*UNIT);
    ctx.fillRect(11*UNIT,7*UNIT,1*UNIT,1*UNIT);
    ctx.fillRect(10*UNIT,8*UNIT,3*UNIT,1*UNIT);
    ctx.fillRect(16*UNIT,1*UNIT,2*UNIT,1*UNIT);
    ctx.fillRect(18*UNIT,2*UNIT,1*UNIT,2*UNIT);
    ctx.fillRect(19*UNIT,4*UNIT,1*UNIT,4*UNIT);
    ctx.fillRect(18*UNIT,8*UNIT,1*UNIT,2*UNIT);
    ctx.fillRect(19*UNIT,9*UNIT,1*UNIT,3*UNIT);
    ctx.fillRect(17*UNIT,12*UNIT,2*UNIT,1*UNIT);
    ctx.fillRect(15*UNIT,13*UNIT,5*UNIT,1*UNIT);
    ctx.fillRect(6*UNIT,9*UNIT,1*UNIT,1*UNIT);
    ctx.fillRect(6*UNIT,10*UNIT,11*UNIT,1*UNIT);
    ctx.fillRect(16*UNIT,9*UNIT,1*UNIT,1*UNIT);
    ctx.fillRect(7*UNIT,11*UNIT,1*UNIT,1*UNIT);
    ctx.fillRect(9*UNIT,11*UNIT,1*UNIT,1*UNIT);
    ctx.fillRect(11*UNIT,11*UNIT,1*UNIT,1*UNIT);
    ctx.fillRect(13*UNIT,11*UNIT,1*UNIT,1*UNIT);
    ctx.fillRect(15*UNIT,11*UNIT,1*UNIT,1*UNIT);
    ctx.fillRect(8*UNIT,12*UNIT,7*UNIT,1*UNIT);
    ctx.fillRect(3*UNIT,4*UNIT,UNIT,UNIT);
    ctx.fillRect(4*UNIT,2*UNIT,UNIT,2*UNIT);
    
}
function drawSans() {
    ctx.fillStyle = "black";
    
    ctx.fillRect(6*UNIT,17*UNIT,3*UNIT,1*UNIT);
    ctx.fillRect(11*UNIT,17*UNIT,1*UNIT,1*UNIT);
    ctx.fillRect(14*UNIT,17*UNIT,3*UNIT,1*UNIT);
    ctx.fillRect(18*UNIT,17*UNIT,2*UNIT,1*UNIT);
    ctx.fillRect(22*UNIT,17*UNIT,1*UNIT,1*UNIT);
    ctx.fillRect(0*UNIT,18*UNIT,1*UNIT,1*UNIT);
    ctx.fillRect(5*UNIT,18*UNIT,1*UNIT,1*UNIT);
    ctx.fillRect(8*UNIT,18*UNIT,1*UNIT,1*UNIT);
    ctx.fillRect(14*UNIT,18*UNIT,1*UNIT,1*UNIT);
    ctx.fillRect(17*UNIT,18*UNIT,1*UNIT,1*UNIT);
    ctx.fillRect(22*UNIT,18*UNIT,1*UNIT,1*UNIT);
    ctx.fillRect(0*UNIT,19*UNIT,1*UNIT,1*UNIT);
    ctx.fillRect(6*UNIT,19*UNIT,1*UNIT,1*UNIT);
    ctx.fillRect(8*UNIT,19*UNIT,2*UNIT,1*UNIT);
    ctx.fillRect(13*UNIT,19*UNIT,2*UNIT,1*UNIT);
    ctx.fillRect(16*UNIT,19*UNIT,1*UNIT,1*UNIT);
    ctx.fillRect(22*UNIT,19*UNIT,1*UNIT,1*UNIT);
    ctx.fillRect(1*UNIT,20*UNIT,1*UNIT,1*UNIT);
    ctx.fillRect(2*UNIT,14*UNIT,1*UNIT,1*UNIT);
    ctx.fillRect(4*UNIT,14*UNIT,15*UNIT,1*UNIT);
    ctx.fillRect(20*UNIT,14*UNIT,1*UNIT,1*UNIT);
    ctx.fillRect(1*UNIT,15*UNIT,2*UNIT,1*UNIT);
    ctx.fillRect(4*UNIT,15*UNIT,1*UNIT,1*UNIT);
    ctx.fillRect(7*UNIT,15*UNIT,1*UNIT,1*UNIT);
    ctx.fillRect(11*UNIT,15*UNIT,1*UNIT,1*UNIT);
    ctx.fillRect(15*UNIT,15*UNIT,1*UNIT,1*UNIT);
    ctx.fillRect(18*UNIT,15*UNIT,1*UNIT,1*UNIT);
    ctx.fillRect(20*UNIT,15*UNIT,2*UNIT,1*UNIT);
    ctx.fillRect(1*UNIT,16*UNIT,1*UNIT,1*UNIT);
    ctx.fillRect(5*UNIT,16*UNIT,1*UNIT,1*UNIT);
    ctx.fillRect(8*UNIT,16*UNIT,3*UNIT,1*UNIT);
    ctx.fillRect(12*UNIT,16*UNIT,3*UNIT,1*UNIT);
    ctx.fillRect(17*UNIT,16*UNIT,1*UNIT,1*UNIT);
    ctx.fillRect(21*UNIT,16*UNIT,1*UNIT,1*UNIT);
    ctx.fillRect(0*UNIT,17*UNIT,1*UNIT,1*UNIT);
    ctx.fillRect(3*UNIT,17*UNIT,2*UNIT,1*UNIT);
    ctx.fillRect(5*UNIT,20*UNIT,1*UNIT,1*UNIT);
    ctx.fillRect(8*UNIT,20*UNIT,1*UNIT,1*UNIT);
    ctx.fillRect(14*UNIT,20*UNIT,1*UNIT,1*UNIT);
    ctx.fillRect(17*UNIT,20*UNIT,1*UNIT,1*UNIT);
    ctx.fillRect(21*UNIT,20*UNIT,1*UNIT,1*UNIT);
    ctx.fillRect(2*UNIT,21*UNIT,2*UNIT,1*UNIT);
    ctx.fillRect(5*UNIT,21*UNIT,1*UNIT,1*UNIT);
    ctx.fillRect(2*UNIT,21*UNIT,2*UNIT,1*UNIT);
    ctx.fillRect(8*UNIT,21*UNIT,7*UNIT,1*UNIT);
    ctx.fillRect(17*UNIT,21*UNIT,1*UNIT,1*UNIT);
    ctx.fillRect(19*UNIT,21*UNIT,2*UNIT,1*UNIT);
    ctx.fillRect(3*UNIT,22*UNIT,3*UNIT,1*UNIT);
    ctx.fillRect(8*UNIT,22*UNIT,7*UNIT,1*UNIT);
    ctx.fillRect(17*UNIT,22*UNIT,3*UNIT,1*UNIT);
    ctx.fillRect(3*UNIT,23*UNIT,17*UNIT,1*UNIT);
    ctx.fillRect(2*UNIT,24*UNIT,19*UNIT,1*UNIT);
    ctx.fillRect(2*UNIT,25*UNIT,9*UNIT,1*UNIT);
    ctx.fillRect(12*UNIT,25*UNIT,9*UNIT,1*UNIT);
    ctx.fillRect(3*UNIT,26*UNIT,7*UNIT,1*UNIT);
    ctx.fillRect(13*UNIT,26*UNIT,7*UNIT,1*UNIT);
    ctx.fillRect(1*UNIT,27*UNIT,3*UNIT,1*UNIT);
    ctx.fillRect(9*UNIT,27*UNIT,1*UNIT,1*UNIT);
    ctx.fillRect(13*UNIT,27*UNIT,1*UNIT,1*UNIT);
    ctx.fillRect(19*UNIT,27*UNIT,3*UNIT,1*UNIT);
    ctx.fillRect(1*UNIT,28*UNIT,1*UNIT,1*UNIT);
    ctx.fillRect(8*UNIT,28*UNIT,2*UNIT,1*UNIT);
    ctx.fillRect(13*UNIT,28*UNIT,2*UNIT,1*UNIT);
    ctx.fillRect(21*UNIT,28*UNIT,1*UNIT,1*UNIT);
    ctx.fillRect(2*UNIT,29*UNIT,6*UNIT,1*UNIT);
    ctx.fillRect(15*UNIT,29*UNIT,6*UNIT,1*UNIT);
    ctx.fillRect(3*UNIT,13*UNIT,5*UNIT,UNIT);
    ctx.fillRect(4*UNIT,12*UNIT,2*UNIT,UNIT);
    ctx.fillRect(3*UNIT,9*UNIT,UNIT,3*UNIT);
    ctx.fillRect(4*UNIT,8*UNIT,UNIT,2*UNIT);
    ctx.fillRect(3*UNIT,4*UNIT,UNIT,4*UNIT);
    ctx.fillRect(4*UNIT,2*UNIT,UNIT,2*UNIT);
    ctx.fillRect(5*UNIT,UNIT,2*UNIT,UNIT);
    ctx.fillRect(6*UNIT,0,10*UNIT,UNIT);
    ctx.fillRect(16*UNIT,UNIT,2*UNIT,UNIT);
    ctx.fillRect(18*UNIT,2*UNIT,UNIT,2*UNIT);
    ctx.fillRect(19*UNIT,4*UNIT,UNIT,4*UNIT);
    ctx.fillRect(18*UNIT,8*UNIT,UNIT,2*UNIT);
    ctx.fillRect(19*UNIT,9*UNIT,UNIT,3*UNIT);
    ctx.fillRect(17*UNIT,12*UNIT,2*UNIT,UNIT);
    ctx.fillRect(15*UNIT,13*UNIT,5*UNIT,UNIT);

    ctx.fillStyle = "white";
    ctx.fillRect(5*UNIT,17*UNIT,1*UNIT,1*UNIT);
    ctx.fillRect(9*UNIT,17*UNIT,2*UNIT,2*UNIT);
    ctx.fillRect(12*UNIT,17*UNIT,2*UNIT,2*UNIT);
    ctx.fillRect(17*UNIT,17*UNIT,1*UNIT,1*UNIT);
    ctx.fillRect(20*UNIT,17*UNIT,2*UNIT,1*UNIT);
    ctx.fillRect(1*UNIT,18*UNIT,4*UNIT,1*UNIT);
    ctx.fillRect(6*UNIT,18*UNIT,2*UNIT,1*UNIT);
    ctx.fillRect(11*UNIT,18*UNIT,1*UNIT,1*UNIT);
    ctx.fillRect(15*UNIT,18*UNIT,2*UNIT,1*UNIT);
    ctx.fillRect(18*UNIT,18*UNIT,4*UNIT,1*UNIT);
    ctx.fillRect(1*UNIT,19*UNIT,5*UNIT,1*UNIT);
    ctx.fillRect(7*UNIT,1*UNIT,9*UNIT,1*UNIT);
    ctx.fillRect(5*UNIT,2*UNIT,13*UNIT,1*UNIT);
    ctx.fillRect(5*UNIT,3*UNIT,13*UNIT,1*UNIT);
    ctx.fillRect(4*UNIT,4*UNIT,15*UNIT,1*UNIT);
    ctx.fillRect(4*UNIT,5*UNIT,2*UNIT,1*UNIT);
    ctx.fillRect(9*UNIT,5*UNIT,5*UNIT,1*UNIT);
    ctx.fillRect(17*UNIT,5*UNIT,2*UNIT,1*UNIT);
    ctx.fillRect(4*UNIT,6*UNIT,2*UNIT,1*UNIT);
    ctx.fillRect(9*UNIT,6*UNIT,5*UNIT,1*UNIT);
    ctx.fillRect(17*UNIT,6*UNIT,2*UNIT,1*UNIT);
    ctx.fillRect(4*UNIT,7*UNIT,2*UNIT,1*UNIT);
    ctx.fillRect(9*UNIT,7*UNIT,2*UNIT,1*UNIT);
    ctx.fillRect(12*UNIT,7*UNIT,2*UNIT,1*UNIT);
    ctx.fillRect(17*UNIT,7*UNIT,2*UNIT,1*UNIT);
    ctx.fillRect(5*UNIT,8*UNIT,5*UNIT,1*UNIT);
    ctx.fillRect(13*UNIT,8*UNIT,5*UNIT,1*UNIT);
    ctx.fillRect(5*UNIT,9*UNIT,1*UNIT,1*UNIT);
    ctx.fillRect(7*UNIT,9*UNIT,9*UNIT,1*UNIT);
    ctx.fillRect(17*UNIT,9*UNIT,1*UNIT,1*UNIT);
    ctx.fillRect(4*UNIT,10*UNIT,2*UNIT,1*UNIT);
    ctx.fillRect(17*UNIT,10*UNIT,2*UNIT,1*UNIT);
    ctx.fillRect(4*UNIT,11*UNIT,3*UNIT,1*UNIT);
    ctx.fillRect(8*UNIT,11*UNIT,1*UNIT,1*UNIT);
    ctx.fillRect(10*UNIT,11*UNIT,1*UNIT,1*UNIT);
    ctx.fillRect(12*UNIT,11*UNIT,1*UNIT,1*UNIT);
    ctx.fillRect(14*UNIT,11*UNIT,1*UNIT,1*UNIT);
    ctx.fillRect(16*UNIT,11*UNIT,3*UNIT,1*UNIT);
    ctx.fillRect(6*UNIT,12*UNIT,2*UNIT,1*UNIT);
    ctx.fillRect(15*UNIT,12*UNIT,2*UNIT,1*UNIT);
    ctx.fillRect(8*UNIT,13*UNIT,7*UNIT,1*UNIT);
    ctx.fillRect(3*UNIT,14*UNIT,1*UNIT,1*UNIT);
    ctx.fillRect(19*UNIT,14*UNIT,1*UNIT,1*UNIT);
    ctx.fillRect(3*UNIT,15*UNIT,1*UNIT,1*UNIT);
    ctx.fillRect(5*UNIT,15*UNIT,2*UNIT,1*UNIT);
    ctx.fillRect(8*UNIT,15*UNIT,3*UNIT,1*UNIT);
    ctx.fillRect(12*UNIT,15*UNIT,3*UNIT,1*UNIT);
    ctx.fillRect(16*UNIT,15*UNIT,2*UNIT,1*UNIT);
    ctx.fillRect(19*UNIT,15*UNIT,1*UNIT,1*UNIT);
    ctx.fillRect(2*UNIT,16*UNIT,3*UNIT,1*UNIT);
    ctx.fillRect(6*UNIT,16*UNIT,2*UNIT,1*UNIT);
    ctx.fillRect(11*UNIT,16*UNIT,1*UNIT,1*UNIT);
    ctx.fillRect(15*UNIT,16*UNIT,2*UNIT,1*UNIT);
    ctx.fillRect(18*UNIT,16*UNIT,3*UNIT,1*UNIT);
    ctx.fillRect(1*UNIT,17*UNIT,2*UNIT,1*UNIT);
    ctx.fillRect(7*UNIT,19*UNIT,1*UNIT,1*UNIT);
    ctx.fillRect(10*UNIT,19*UNIT,3*UNIT,1*UNIT);
    ctx.fillRect(15*UNIT,19*UNIT,1*UNIT,1*UNIT);
    ctx.fillRect(17*UNIT,19*UNIT,5*UNIT,1*UNIT);
    ctx.fillRect(2*UNIT,20*UNIT,3*UNIT,1*UNIT);
    ctx.fillRect(6*UNIT,20*UNIT,2*UNIT,1*UNIT);
    ctx.fillRect(9*UNIT,20*UNIT,5*UNIT,1*UNIT);
    ctx.fillRect(15*UNIT,20*UNIT,2*UNIT,1*UNIT);
    ctx.fillRect(18*UNIT,20*UNIT,3*UNIT,1*UNIT);
    ctx.fillRect(4*UNIT,21*UNIT,1*UNIT,1*UNIT);
    ctx.fillRect(6*UNIT,21*UNIT,2*UNIT,1*UNIT);
    ctx.fillRect(15*UNIT,21*UNIT,2*UNIT,1*UNIT);
    ctx.fillRect(18*UNIT,21*UNIT,1*UNIT,1*UNIT);
    ctx.fillRect(6*UNIT,22*UNIT,2*UNIT,1*UNIT);
    ctx.fillRect(15*UNIT,22*UNIT,2*UNIT,1*UNIT);
    ctx.fillRect(4*UNIT,27*UNIT,5*UNIT,1*UNIT);
    ctx.fillRect(14*UNIT,27*UNIT,5*UNIT,1*UNIT);
    ctx.fillRect(2*UNIT,28*UNIT,6*UNIT,1*UNIT);
    ctx.fillRect(15*UNIT,28*UNIT,6*UNIT,1*UNIT);
}
function drawCoat(){

}