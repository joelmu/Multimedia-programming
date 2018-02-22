function navsize() {
  var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
  var container = document.getElementById("container");
  var item = document.getElementById("sidenav");
  if (width<"900") {
    item.style.width = "100vw";
    item.style.height = "35vh";
    item.style.textAlign = "center";
    container.style.flexDirection = "column";
    document.getElementById("hr").style.display = "block";

  }else{
      item.style.width = "60vw";
      item.style.height = "100vh";
      item.style.textAlign = "left";
      container.style.flexDirection = "row";
      document.getElementById("hr").style.display = "none";
  }
}
