function addName() {
  var node = document.createElement("P");
  var nameInput = document.getElementById('name-input');
  var textnode = document.createTextNode(nameInput.value);
  node.appendChild(textnode);
  document.getElementById('list').appendChild(node);
  nameInput.value = "";
}

function keyPress(event) {
  if (event.keyCode == 13) {
    addName();
  }
}
