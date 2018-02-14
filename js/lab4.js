var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var preview = document.getElementById("preview");
var prew = preview.getContext("2d");
var mouseIsDown = false;
var lineThickness = 1;
var cX, cY, eX, eY;

preview.onmouseup = function mouseUp(e) {
  mouseIsDown = false;

  // eX = e.clientX - rect.left;
  // eY = e.clientY - rect.top;

  ctx.strokeStyle = "#000";
  ctx.beginPath();
  ctx.moveTo(cX, cY);
  ctx.lineTo(eX, eY);
  ctx.stroke();

  // prew.clearRect(0, 0, prew.canvas.width, prew.canvas.height);
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
