const s = [
	"a hammer",
  "nails",
  "a paper clip",
  "an umbrella"
]

var secondsLeft = 0;
var playing = false;

var warn = new Audio('warn.mp3');

function startTime(mins) {
  secondsLeft = mins * 60;
  document.getElementById("start").style = "display:none";
  runTimer();
}

function runTimer() {
  document.getElementById("timer").innerHTML = secondsLeft + " seconds remain";
  secondsLeft--;
  if (secondsLeft < 0) {
    playing = false;
    warn.play();
    document.getElementById("timer").innerHTML = "Your score was " + countlines() + ". Nicely done.";
    document.getElementById("bod").style = "background-color:darkred;";
    setTimeout(showStart, 1500);
  }
  else {
    setTimeout(runTimer, 1000);
  }
}

function showStart() {
  document.getElementById("start").style = "display:block;";
}

function getSentence() {
  
  document.getElementById("bod").style = "background-color:darkblue;";
  
  startTime(5);
  
  console.log("getSentence");

  var i = s[~~(Math.random() * s.length)];

  console.log(i)
  document.getElementById("sentence").innerHTML = "List as many uses as you can for " + i + ".";

}

function countlines() {
  var area = document.getElementById("resp");
  document.getElementById("resp").style = "display:none;";
  var text = area.value.replace(/\s+$/g,"");
  var split = text.split("\n");
  return split.length;
}