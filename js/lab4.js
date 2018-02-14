var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var mouseIsDown = false;
var rect = canvas.getBoundingClientRect();
var cX, cY, eX, eY;

canvas.onmouseup = function mouseUp(e) {
  mouseIsDown = false;

  eX = e.clientX - rect.left;
  eY = e.clientY - rect.top;

  ctx.strokeStyle = "#267bdf";
  ctx.beginPath();
  ctx.moveTo(cX, cY);
  ctx.lineTo(eX, eY);
  ctx.stroke();

  // ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
};

canvas.onmousedown = function mouseDown(e) {
  cX = e.clientX - rect.left;
  cY = e.clientY - rect.top;
  mouseIsDown = true;
};

// canvas.onmousemove = function mouseXY(e) {
//   if (mouseIsDown) {
//     eX = e.clientX - rect.left;
//     eY = e.clientY - rect.top;
//
//     ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
//
//     ctx.beginPath();
//     ctx.moveTo(cX, cY);
//     ctx.lineTo(eX, eY);
//     ctx.stroke();
//
//   }
// };

canvas.onmouseclick = function mouseclick(e) {
  cX = e.clientX - rect.left;
  cY = e.clientY - rect.top;
  mouseIsDown = true;
}
