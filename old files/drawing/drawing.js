// Variable
// var x = 0;
// x = 1;

// constant
// const y = 0;
// y = 1;

var canvas;
var ctx;

const UNIT = 10;
window.onload = init;

function init()  {
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
    
    drawMario();
    drawRuler(5);
    

    // Filling a rectangle
//     ctx.fillRect(0,0,100,100);
//     ctx.fillstyle = "black";
//     ctx.fillRect(0,0,100,100);
// drawRuler(10); 
// ctx.fillRect(60*unit,10*unit,10*unit,10*unit)

}