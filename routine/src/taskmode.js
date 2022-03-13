let cycle = 0;

let totalSecs = 0;
var secondsTimer = setInterval(decrementTimer, 1000);

var shortAudio = new Audio("shortbeep.mp3");
var longAudio = new Audio("angry.mp3");

function setTimer(mins, secs) {
  totalSecs = secs + 60*mins;
  if (secs < 10) {secs = "0" + secs}
  document.getElementById('tim').innerHTML = mins + ":" + secs;
  document.getElementById('timer').style.display = "block";
}

function decrementTimer() {
  if (totalSecs > 1) {
    totalSecs = totalSecs - 1;
    mins = Math.floor(totalSecs / 60);
    secs = totalSecs - mins*60;
    if (secs < 10) {secs = "0" + secs}
    document.getElementById('tim').innerHTML = mins + ":" + secs;
  }
  else if (totalSecs > 0) {
    totalSecs = 0;
    document.getElementById('tim').innerHTML = "0:00";
    timeoutButtons();
    document.getElementById('body').style.backgroundImage="url(mtn.jpg)";
    document.getElementById('task').innerHTML = "Session Completed";
    shortAlarm();
  }
}

function pause() {
  document.getElementById('pause').style.display = "none";
  document.getElementById('resume').style.display = "inline-block";
  clearInterval(secondsTimer);
}

function resume() {
  document.getElementById('resume').style.display = "none";
  document.getElementById('pause').style.display = "inline-block";
  secondsTimer = setInterval(decrementTimer, 1000);
}

function work() {
  document.getElementById('task').innerHTML = "Time to Focus";
  document.getElementById('body').style.backgroundImage="url(darkmode.png)";
  setTimer(27,0);
}

function shortBreak() {
  document.getElementById('task').innerHTML = "Take a short break";
  document.getElementById('body').style.backgroundImage="url(green.jpg)";
  setTimer(3,0);
}

function longBreak() {
  document.getElementById('task').innerHTML = "Take a long break";
  document.getElementById('body').style.backgroundImage="url(green.jpg)";
  setTimer(10,0);
}

function startTasks() {
  document.getElementById('timer').style.display = "block";
  document.getElementById('task').innerHTML = "Timers Initializing...";
  taskButtons();
  cycle = 0;
  work();
}

function taskButtons() {
  document.getElementById('start').style.display = "none";
  document.getElementById('pause').style.display = "inline-block";
  document.getElementById('end').style.display = "inline-block";
  document.getElementById('next').style.display = "inline-block";
}

function timeoutButtons() {
  document.getElementById('next').style.display = "inline-block";
  document.getElementById('end').style.display = "inline-block";
}

function shortAlarm() {
  shortAudio.currentTime = 0;
  shortAudio.play();
}

function longAlarm() {
  shortAudio.currentTime = 0;
  longAudio.play();
}

function next() {
  shortAudio.pause();
  longAudio.pause();
  if (cycle == 7) { // every 8 cycles there is a long break
    longBreak();
    cycle = 0;
  }
  else if (cycle % 2 == 1) {
    work();
    cycle = cycle + 1;
  }
  else { // evens are work cycles
    shortBreak();
    cycle = cycle + 1;
  }
}