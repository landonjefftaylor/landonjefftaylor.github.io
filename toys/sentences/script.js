function getParagraph() {
  var frameObj = document.getElementById("frame");
  var framePar = frameObj.contentWindow.document.getElementsByTagName("p")[0];
  framePar.style.display = "none";
}