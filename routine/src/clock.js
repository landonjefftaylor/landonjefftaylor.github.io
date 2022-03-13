window.onload = init;

function init() {
  startTime();
  setBG();
  startButtons();
}

function startTime() {
  const today = new Date();
  let h = today.getHours();
  let g = 'day';
  if (h < 12) {
    g = 'morning';
  }
  else if (h < 16) {
    g = 'afternoon';
  }
  else if (h < 20) {
    g = 'evening'
  }
  else {
    g = 'night'
  }
  if (h > 12) {
    h = h - 12;
  }
  let m = today.getMinutes();
  if (m < 10) {
    m = "0" + m;
  }
  document.getElementById('clk').innerHTML =  h + ":" + m;
  document.getElementById('grt').innerHTML = "Good " + g + ", Landon."
  setTimeout(startTime, 500);
}

function startButtons() {
  document.getElementById('start').style.display = "inline-block";
  document.getElementById('pause').style.display = "none";
  document.getElementById('resume').style.display = "none";
  document.getElementById('end').style.display = "none";
  document.getElementById('next').style.display = "none";
  document.getElementById('timer').style.display = "none";
}

function setBG() {
  document.getElementById('body').style.backgroundImage="url(bg.jpg)";
}