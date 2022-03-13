var fullset = [
  "Gather clothes from rooms",
  "Sort and start laundry",
  "Put away clean dishes",
  "Restock food and spice containers",
  "Gather dishes from rooms",
  "Wash dirty dishes",
  "Straighten pantry",
  "Perform fish maintenance",
  "Straighten living room",
  "Straighten hall closet",
  "Straighten library",
  "Straighten office",
  "Straighten bedroom",
  "Perform humidifier and fan maintenance",
  "Dust hard surfaces",
  "Empty room garbage cans",
  "Water houseplants",
  "Replace bathroom towels",
  "Restock bathroom supplies",
  "Clean hall bathroom sink",
  "Clean master bathroom sink",
  "Clean hall bathroom toilet",
  "Clean master bathroom toilet",
  "Clean hall bathroom bathtub",
  "Clean master bathroom bathtub",
  "Dry and put away clean dishes",
  "Clear counters and table",
  "Disinfect kitchen surfaces",
  "Restock kitchen supplies",
  "Sweep hard floors",
  "Vacuum soft floors and upholstery",
  "Get the mail",
  "Take out garbage",
  "Clean the car",
  "Mop hard floors"
];

var monday = [
  "Gather clothes from rooms",
  "Sort and start laundry",
  "Put away clean dishes",
  "Gather dishes from rooms",
  "Wash dirty dishes",
  "Feed the fish",
  "Straighten living room",
  "Straighten bedroom",
  "Wipe kitchen surfaces",
  "Sweep hard floors",
  "Get the mail",
  "Take out garbage"
];

var tuesday = [
  "Put away clean dishes",
  "Gather dishes from rooms",
  "Wash dirty dishes",
  "Feed the fish",
  "Straighten living room",
  "Straighten library",
  "Wipe kitchen surfaces",
  "Wipe hall bathroom sink",
  "Wipe master bathroom sink",
  "Wipe hall bathroom toilet",
  "Wipe master bathroom toilet",
  "Get the mail",
];

var wednesday = [
  "Put away clean dishes",
  "Gather dishes from rooms",
  "Wash dirty dishes",
  "Feed the fish",
  "Straighten living room",
  "Wipe kitchen surfaces",
  "Sweep hard floors",
  "Get the mail",
  "Take out garbage"
];

var thursday = [
  "Put away clean dishes",
  "Gather dishes from rooms",
  "Wash dirty dishes",
  "Feed the fish",
  "Straighten living room",
  "Straighten office",
  "Empty room garbage cans",
  "Clear counters and table",
  "Wipe kitchen surfaces",
  "Wipe hall bathroom sink",
  "Wipe master bathroom sink",
  "Wipe hall bathroom toilet",
  "Wipe master bathroom toilet",
  "Sweep hard floors",
  "Get the mail"
];

var friday = [
  "Put away clean dishes",
  "Gather dishes from rooms",
  "Wash dirty dishes",
  "Feed the fish",
  "Straighten living room",
  "Straighten hall closets",
  "Dust hard surfaces",
  "Empty room garbage cans",
  "Wipe kitchen surfaces",
  "Sweep hard floors",
  "Get the mail",
  "Take out garbage",
];

var saturday = [
  "Gather clothes from rooms",
  "Sort and start laundry",
  "Put away clean dishes",
  "Gather dishes from rooms",
  "Wash dirty dishes",
  "Perform fish maintenance",
  "Straighten living room",
  "Straighten bedroom",
  "Dust hard surfaces",
  "Empty room garbage cans",
  "Water houseplants",
  "Replace bathroom towels",
  "Restock bathroom supplies",
  "Clean hall bathroom sink",
  "Clean master bathroom sink",
  "Clean hall bathroom toilet",
  "Clean master bathroom toilet",
  "Dry and put away clean dishes",
  "Clear counters and table",
  "Disinfect kitchen surfaces",
  "Sweep hard floors",
  "Vacuum soft floors",
  "Get the mail",
  "Take out garbage",
  "Mop hard floors"
];

let currentSetStr = "";
let currentSet = fullset;
let currentTask = 0;
let secondLoop = false;

window.onload = init;

function init() {
  currentSetStr = location.search;
  startTasks();
}

function startTasks() {
  switch(currentSetStr) {
    case "?fullset": 
      currentSet = fullset;
      break;
    case "?monday": 
      currentSet = monday;
      break;
    case "?tuesday": 
      currentSet = tuesday;
      break;
    case "?wednesday": 
      currentSet = wednesday;
      break;
    case "?thursday": 
      currentSet = thursday;
      break;
    case "?friday": 
      currentSet = friday;
      break;
    case "?saturday": 
      currentSet = saturday;
      break;
    default:
      alert("Set not found. Check the URL. Doing a full task set.");
      break;
  }
  currentTask = 0;
  printTasks();
}

function printTasks() {
  document.getElementById('task').innerHTML = currentSet[currentTask];

  var todolist = "";
  var donelist = "";
  for (const element of currentSet) {
    if (element.includes('<span class="done">')) {
      donelist += (element + "<br />");
    }
    else {
      todolist += (element + "<br />");
    }
  }
  document.getElementById('taskList').innerHTML = todolist + donelist;

}

function checkDone() {
  secondLoop = false;
  for (i=0; i<currentSet.length; i++) {
    if (!currentSet[i].includes('<span class="done">')) {
      secondLoop = true;
      currentTask = i;
      break;
    }
  }
  if (!secondLoop) {
    alert("You did it! Returning to main page.");
    location.href = "index.html";
  }
}

function complete() {
  // console.log(currentTask);
  currentSet[currentTask] = '<span class="done">' + currentSet[currentTask] + "</span>";
  currentTask++;
  if (currentTask >= currentSet.length || secondLoop) {
    checkDone();
  }
  printTasks();
}

function skip() {
  // console.log(currentTask);
  currentTask++;
  if (currentTask >= currentSet.length || secondLoop) {
    checkDone();
  }
  printTasks();
}

function disregard() {
  // console.log(currentTask);
  currentSet[currentTask] = '<span class="done" style="color:#b78080;">' + currentSet[currentTask] + "</span>";
  currentTask++;
  if (currentTask >= currentSet.length || secondLoop) {
    checkDone();
  }
  printTasks();
}