var canvas;
var ctx;

var UNIT = 30;

window.onload = init;
function init() {
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
    ctx.fillStyle = "black";
    ctx.fillRect(0,5*UNIT,1*UNIT,4*UNIT);
    ctx.fillRect(1*UNIT,3*UNIT,1*UNIT,2*UNIT);
    ctx.fillRect(2 * UNIT,2 * UNIT,1 * UNIT,1 * UNIT);
    ctx.fillRect(3 * UNIT,1 * UNIT,2 * UNIT,1 * UNIT);
    ctx.fillRect(5 * UNIT,0,6 * UNIT,1 * UNIT);
    ctx.fillRect(11 * UNIT, 1 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(13 * UNIT, 2 * UNIT, 1 * UNIT,1 * UNIT);
    ctx.fillRect(14 * UNIT,3 * UNIT, 1 * UNIT, 2 * UNIT);
    ctx.fillRect(15 * UNIT,5 * UNIT,1 * UNIT,4 * UNIT);
    ctx.fillRect(12 * UNIT,9 * UNIT, 3 * UNIT,1 * UNIT);
    ctx.fillRect(4 * UNIT,8 * UNIT,8 * UNIT, 1* UNIT); 
    ctx.fillRect(1 * UNIT,9 * UNIT,3 * UNIT,1 * UNIT);
    ctx.fillRect(6 * UNIT,9 * UNIT,1 * UNIT,2 * UNIT);
    ctx.fillRect(9 * UNIT,9 * UNIT,1 * UNIT,2 * UNIT);
    ctx.fillRect(2 * UNIT,10 * UNIT,1 * UNIT, 2* UNIT);
    ctx.fillRect(3 * UNIT,12 * UNIT ,1 * UNIT,1* UNIT);
    ctx.fillRect(4 * UNIT,13 * UNIT,8 * UNIT,1 * UNIT);
    ctx.fillRect(12 * UNIT,12 * UNIT,1 * UNIT, 1* UNIT );
    ctx.fillRect(13 * UNIT,10 * UNIT, 1 * UNIT, 2 * UNIT);

    drawRuler(10);
}
