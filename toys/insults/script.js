
const cond = [
  "Oh, sweetie,",
  "You poor sap;",
  "You bother me...",
  "I can't stand you because",
  "I don't like to be around you since",
  "You probably can't help it, but"
]

const obj = [
  "your hair",
  "your personality",
  "everything about you",
  "your style",
  "working with you",
  "being around you",
  "your lifestyle",
  "your opinion",
  "the way that you are"
]

const ins = [
  "is the things nightmares are made of",
  "couldn't be worse",
  "needs a complete overhaul",
  "is the worst thing in the world",
  "genuinely terrifies me",
  "is utterly disappointing",
  "needs to die in a hole",
  "should go far, far away",
  "needs to burn in a ditch",
  "is the worst thing I've experienced",
  "should get 1 star on Yelp",
  "makes me think you need an exorcism",
  "is my worst enemy",
  "is like having my eyes burned with acid",
  "looks like a tragic accident",
  "is a complete train wreck",
  "is the reason you have no friends",
  "makes the rest of your life look good"
]


function makeInsult() {

  console.log("makeInsult")

  var i1 = cond[~~(Math.random() * cond.length)]
  var i2 = obj[~~(Math.random() * obj.length)]
  var i3 = ins[~~(Math.random() * ins.length)]

  x1 = '<span id="x1">' + i1 + '</span>';
  x2 = '<span id="x2">' + i2 + '</span>';
  x3 = '<span id="x3">' + i3 + '</span>';

  var outstring = x1 + " " + x2 + " " + x3 + ".";
  // var outstring = intro[i1] + " " + scape[i2] + " " + excus[i3] + ".";

  console.log(outstring)
  document.getElementById("insult").innerHTML = outstring;

}