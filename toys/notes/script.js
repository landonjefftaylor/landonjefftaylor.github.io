var correctNote = "";
var correctAcc = "";
var roundTime = 60;
var secondsLeft = 60;
var notesShown = 0;
var playing = false;
var score = 0;

var good = new Audio('good.mp3');
var bad = new Audio('bad.mp3');
var warn = new Audio('warn.mp3');

function startGame(secs) {
  secondsLeft = secs;
  roundTime = secs;
  notesShown = 0;
  document.getElementById("header").innerHTML = secs + "-second round of note naming";
  document.getElementById("start").style = "display:none";
  document.getElementById("timer").style = "visibility:visible";
  document.getElementById("shown").style = "display:none";
  document.getElementById("score").style = "visibility:visible";
  document.getElementById("note").style = "display:inline-block";
  document.getElementById("noteButtons").style = "display:block";
  document.getElementById("score").innerHTML = "0" + " POINTS";
  getNote();
  playing = true;
  good.play();
  runTimer();
}

function runTimer() {
  document.getElementById("timer").innerHTML = secondsLeft + " SEC";
  secondsLeft--;
  if (secondsLeft < 0) {
    playing = false;
    bad.play();
    document.getElementById("timer").innerHTML = roundTime + "-SECOND ROUND";
    document.getElementById("shown").innerHTML = notesShown + " NOTES SHOWN";
    document.getElementById("brk1").style = "display:block;margin-top:2em;";
    document.getElementById("brk2").style = "display:block;margin-top:2em;";
    document.getElementById("shown").style = "visibility:visible";
    document.getElementById("note").style = "display:none";
    document.getElementById("noteButtons").style = "display:none";
    document.getElementById("score").style = "visibility:visible;font-size:5em;";
    setTimeout(showStart, 1500);
  }
  else {
    setTimeout(runTimer, 1000);
  }
}

function showStart() {
  document.getElementById("start").style = "display:block;margin-bottom:4em";
}

function getNote() {
  
  console.log("getNote")
  
  var note = "";
  var noteNames = "abcdefg";
  var note = noteNames[Math.floor(Math.random() * noteNames.length)];
  correctNote = note;

  var octave = 1; //eventually add other octaves

  var accidentals = "absn";
  var accidental = accidentals[Math.floor(Math.random() * accidentals.length)];
  if (accidental == "s") correctAcc = "s";
  else if (accidental == "b") correctAcc = "b";
  else correctAcc = "n";

  var variation = Math.floor(Math.random() * 5) + 1;
  
  document.getElementById("note").src = "images/" + note + octave + "/" + accidental + variation + ".png";
  notesShown++;
}

function check(note,acc) {
  if (playing) {
    if (note == correctNote && acc == correctAcc) {
      document.getElementById("note").style = "background-color:#9bdfb7;";
      score++;
      document.getElementById("score").innerHTML = score + " POINTS";
      getNote();
    }
    else {
      document.getElementById("note").style = "background-color:orchid;";
      score--;
      document.getElementById("score").innerHTML = score + " POINTS";
      warn.play();
    }
  }
}