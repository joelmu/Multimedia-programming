function navsize() {
  var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
  if (width<"800") {
    var item = document.getElementById("sidenav");
    item.style.width = "100vw";
    item.style.height = "20vh";
    item.style.textAlign = "center";
    document.getElementById("hr").style.display = "block";

  }else{
      var item = document.getElementById("sidenav");
      item.style.width = "15vw";
      item.style.height = "130vh";
      item.style.textAlign = "left";
      document.getElementById("hr").style.display = "none";
  }
}
