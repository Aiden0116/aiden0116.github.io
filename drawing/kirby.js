// variables: something that stores a value that can change over time.
var canvas;
var ctx;
var unit = 50;

window.onload = init;
// when the window loads up, it calls the init function

// function: a group of task that could be called upon
function init() {

    // canvas in js connecrs with canvas in html.
    canvas = document.getElementById("myCanvas");
    // setting up the context in 2D.
    ctx = canvas.getContext("2d");
    drawKirby();
    drawRuler(1);
}       