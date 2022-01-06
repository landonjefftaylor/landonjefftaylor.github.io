let btnPress = false;

function startTimer(mins, secs) {
  if (secs < 10) {secs = "0" + secs}
  document.getElementById('tim').innerHTML = mins + ":" + secs
  document.getElementById('tim').style.display = "block";
}

function startTasks() {
  document.getElementById('task').style.display = "block";
  let halfHours = 2 * parseInt(prompt("How many hours is today's workday?"));
  
  document.getElementById('next').style.display = "block";
  document.getElementById('start').style.display = "none";

  return;

  needLongBreak = false;
  
  while (halfHours > 0) {
    if (needLongBreak) {
      session2();
      halfHours = halfHours - 1;
    }
    else {
      session1();
      halfHours = halfHours - 1;
    }
  }
  
  document.getElementById('task').innerHTML = "FINISHED";
}

function session1() {
  document.getElementById('task').innerHTML = "Time to focus";
  startTimer(27, 0)
  break1();
  document.getElementById('task').innerHTML = "Stand up!";
  startTimer(3, 0)
}

function session2() {
  document.getElementById('task').innerHTML = "Time to focus";
  startTimer(17, 0)
  document.getElementById('task').innerHTML = "Stand up!";
  startTimer(13, 0)
}

function continueBtn() {
  btnPress = true;
}

function waitForNext() {
  while (!btnPress);
  btnPress = false;
}