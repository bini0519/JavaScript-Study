const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const bar = document.getElementsByClassName("bar");

const INITIAL_COLOR = "#2c2c2c"
const CANVAS_SIZE = 700;

canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;

ctx.fillStyle = "white";
ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
ctx.strokeStyle = INITIAL_COLOR;
ctx.fillStyle = INITIAL_COLOR;
ctx.lineWidth = 2.5;

ctx.arc(35, 35, 15, 0, Math.PI * 2, true)
ctx.fillRect(25,25,100,10);
