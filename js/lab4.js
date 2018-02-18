// Drawing functions

var canvas = document.getElementById("canvas");
canvas.setAttribute('width', '600');
canvas.setAttribute('height', '600');
var ctx = canvas.getContext("2d");
var preview = document.getElementById("preview");
preview.setAttribute('width', '600');
preview.setAttribute('height', '600');
var prew = preview.getContext("2d");
var mouseIsDown = false;
var lineThickness = 1;
var cX, cY, eX, eY;

preview.onmouseup = function mouseUp(e) {
  mouseIsDown = false;

  ctx.strokeStyle = "#36ee3d";
  ctx.beginPath();
  ctx.moveTo(cX, cY);
  ctx.lineTo(eX, eY);
  ctx.stroke();

  prew.clearRect(0, 0, prew.canvas.width, prew.canvas.height);
};

preview.onmousedown = function mouseDown(e) {
  cX = e.clientX - canvas.offsetLeft;
  cY = e.clientY - canvas.offsetTop;
  mouseIsDown = true;
};

preview.onmousemove = function mouseXY(e) {
  if (mouseIsDown) {
    eX = e.clientX - canvas.offsetLeft;
    eY = e.clientY - canvas.offsetTop;

    prew.clearRect(0, 0, prew.canvas.width, prew.canvas.height);

    prew.beginPath();
    prew.moveTo(cX, cY);
    prew.lineTo(eX, eY);
    prew.stroke();

  }
};

preview.onmouseclick = function mouseclick(e) {
  cX = e.clientX - canvas.offsetLeft;
  cY = e.clientY - canvas.offsetTop;
  mouseIsDown = true;
}

// Game functions

var game = document.getElementById("game");
var gmx = game.getContext("2d")

var score, ball, time;
