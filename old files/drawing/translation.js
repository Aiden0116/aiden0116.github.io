var canvas;
var ctx;
const UNIT = 24;

window.onload = init;

function init()  {
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
//    translatedRect();
    translatedKirby();
    translatedSprite();
}
function translatedRect () {
    ctx.save ();  // saving the translation rules.
    ctx.translate(2*UNIT,2*UNIT) //TRANSLATE THE IMAGE BELLOW TO SPECIFY TH X & Y CORDINATES
    ctx.fillRect(0*UNIT,0,10*UNIT,10*UNIT)
    ctx.restore(); //WHAT RESETS THE TRANSLATION RULES

}
 function translatedKirby()  {
     ctx.save();
     ctx.translate(25*UNIT,20*UNIT);
    drawKirby();
    ctx.restore();
 }

 function translatedSprite () {
    drawSprite();
 }
     
 