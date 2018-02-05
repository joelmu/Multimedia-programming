var socket = new WebSocket("wss://obscure-waters-98157.herokuapp.com");

function callWebSocket() {

  socket.onopen = function() {
    console.log("Hello, Connected To WS server");
  };

  socket.onmessage = function(e) {
    $("#messagelist").append(e.data + "<br>");
  };
  socket.onerror = function(e) {
    alert("An error occured while connecting " + e.data);
  };
  socket.onclose = function() {
    alert("The connection has been closed");
  };
}

window.setTimeout(function() {
  updateScroll();
}, 800);

window.setInterval(function() {
  socket.onmessage = function(e) {
    $("#messagelist").append(e.data + "<br>");
  };
  updateScroll();
}, 2000);

function logo() {
  socket.send("LOGO");
  updateScroll();
}

function send() {
  var message = document.getElementById("message");
  socket.send(message.value);
  updateScroll();
  message.value = '';
  $("#messagelist").append(e.data + "<br>");
  message.value = '';
}

function updateScroll() {
  var item = $("#messagelist");
  var h = item.get(0).scrollHeight;
  item.animate({scrollTop: h});
}

function keyPress(event) {
  if (event.keyCode == 13) {
    send();
  }
}
