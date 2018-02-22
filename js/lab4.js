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
game.setAttribute('width', '600');
game.setAttribute('height', '576');
var gmx = game.getContext("2d");

gmx.fillStyle = "rgb(103, 247, 15)";

var score = 0;
var time = 11;
var gameON = false;
var rectData = {};
var rectSize = 80;
var resultEl;

function createRect(rectSize) {
  gmx.clearRect(0, 0, gmx.canvas.width, gmx.canvas.height);
  var rectDimension = {width: rectSize, height: rectSize};
  var position = getRandomXY(rectDimension.width, rectDimension.height);
  rectData = {
    x: position.x,
    y: position.y,
    width: rectSize,
    height: rectSize
  };
  gmx.fillRect(position.x, position.y, rectDimension.width, rectDimension.height);
}

function getMouseXY(game, event) {
  var rect = game.getBoundingClientRect();
  return {
    x: event.clientX - game.offsetLeft,
    y: event.clientY - game.offsetTop
  };
}

function getRandomXY(rectWidth, rectHeight) {
  return {
    x: Math.floor(Math.random() * (game.width - rectWidth)),
    y: Math.floor(Math.random() * (game.height - rectHeight))
  };
}

function clickOnRect(mousePos, rectData) {
  if (
    mousePos.x >= rectData.x &&
    mousePos.x <= rectData.x + rectData.width &&
    mousePos.y >= rectData.y &&
    mousePos.y <= rectData.y + rectData.height
  ) {
    return true;
  }
  return false;
}

game.addEventListener('click', function(evt) {
  if (!gameON) {
    start();
  } else if (gameON) {
    var mousePos = getMouseXY(game, evt);
    if (clickOnRect(mousePos, rectData)) {
      score += 1;
      updateResult();
      createRect(rectSize);
    }
  }
});

function start() {
  score = 0;
  time = 11;
  gameON = true;
  createRect(rectSize);
  var interval = setInterval(function () {
    time -= 1;
    updateResult();
    if (time == 0) {
      gameON = false;
      gameOver();
      gmx.clearRect(0, 0, gmx.canvas.width, gmx.canvas.height);
      clearInterval(interval);
    }
  }, 1000);
}

function updateResult() {
  resultEl = document.getElementById('score');
  resultEl.innerHTML = "SCORE: " + score + " -- " + "TIME LEFT: " + time;
}

function gameOver() {
  resultEl = document.getElementById('result');
  resultEl.innerHTML = " -- GAME OVER, SCORE: " + score;
}
