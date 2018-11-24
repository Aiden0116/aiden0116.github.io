var canvas;
var ctx;

var unit = 30;

window.onload = init;
function init() {
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
    ctx.fillStyle = "black";
    ctx.fillRect(0,5*unit,1*unit,4*unit);
    ctx.fillRect(1*unit,3*unit,1*unit,2*unit);
    ctx.fillRect(2 * unit,2 * unit,1 * unit,1 * unit);
    ctx.fillRect(3 * unit,1 * unit,2 * unit,1 * unit);
    ctx.fillRect(5 * unit,0,6 * unit,1 * unit);
    ctx.fillRect(11 * unit, 1 * unit, 2 * unit, 1 * unit);
    ctx.fillRect(13 * unit, 2 * unit, 1 * unit,1 * unit);
    ctx.fillRect(14 * unit,3 * unit, 1 * unit, 2 * unit);
    ctx.fillRect(15 * unit,5 * unit,1 * unit,4 * unit);
    ctx.fillRect(12 * unit,9 * unit, 3 * unit,1 * unit);
    ctx.fillRect(4 * unit,8 * unit,8 * unit, 1* unit); 
    ctx.fillRect(1 * unit,9 * unit,3 * unit,1 * unit);
    ctx.fillRect(6 * unit,9 * unit,1 * unit,2 * unit);
    ctx.fillRect(9 * unit,9 * unit,1 * unit,2 * unit);
    ctx.fillRect(2 * unit,10 * unit,1 * unit, 2* unit);
    ctx.fillRect(3 * unit,12 * unit ,1 * unit,1* unit);
    ctx.fillRect(4 * unit,13 * unit,8 * unit,1 * unit);
    ctx.fillRect(12 * unit,12 * unit,1 * unit, 1* unit );
    ctx.fillRect(13 * unit,10 * unit, 1 * unit, 2 * unit);

    drawRuler(10);
}
