const s = [
	"a hammer",
 	"nails",
  	"a paper clip",
	"an umbrella",
	"a mirror",
	"a notebook",
	"a stapler",
	"a brick",
	"pencil shavings",
	"a can of beans",
	"a rowboat",
	"a pinecone",
	"a sunflower",
	"a pizza",
	"a disco ball",
	"an ice cream cone",
	"a glass bottle",
	"a paper cup",
	"a party hat",
	"a dozen eggs",
	"a pocket knife",
	"a flute",
	"a bookmark",
	"a button",
	"a sandal",
	"a folding chair",
	"an eraser",
	"a remote control",
	"a dollar bill",
	"a lamp shade",
	"headphones",
	"a DVD",
	"sand paper",
	"a sword",
	"a branch",
	"a wooden spoon",
	"a bandana",
	"a soda can",
	"a cork",
	"a clamp",
	"a wall clock",
	"a spring",
	"a beaded bracelet",
	"a drill press"
]

var secondsLeft = 0;
var playing = false;

var warn = new Audio('warn.mp3');

function startTime(secs) {
  secondsLeft = secs;
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
  
  startTime(30);
  
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
