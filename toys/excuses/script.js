const intro = [
  "Sorry, I can't...",
  "I'd love to, but",
  "As fun as that sounds,",
  "I feel awful, but",
  "Sadly, I can't make it because",
  "This is gonna sound crazy, but",
  "You're not gonna believe this but",
  "I hate to miss that, but",
  "Please pardon my absence...",
  "I wish I could make it, it's just that",
  "I wish I could, but",
  "I regret to inform you that I cannot make it because",
  "You're on your own --",
  "I already told you, I can't because",
  "Didn't you hear? I'm all tied up since"
  ]

const scape = [
  "my nephew with rabies",
  "Hitler's third nipple",
  "the Pope",
  "my ex",
  "a high school cheerleading squad",
  "my Tinder date",
  "my boss",
  "a grocery store manager",
  "your mom",
  "Justin Bieber",
  "the fire chief",
  "the governor",
  "the drunk next door",
  "my doctor",
  "my butcher",
  "the Republican party",
  "my neighbor's dog",
  "a cross-eyed janitor",
  "this one guy I met at Walmart",
  "some lady from work",
  "a homeless man",
  "the mafia",
  "my liberal neighbor",
  "Michael Scott",
  "some kid",
  "a drunk politician",
  "Eric from That 70s Show",
  "my secret admirer",
  "some sorry excuse for a hot dog vendor",
  "Hannah Montana",
  "the unfortunate child of two spiteful lovers",
  "a middle school gym teacher",
  "a Chia Pet",
  "my imaginary friend",
  "my other best friend",
  "my aunt Sue"
]

const excus = [
  "needs a ride to a colonoscopy",
  "ended up in jail again",
  "just died in my arms",
  "is starting a career in stand-up comedy",
  "stabbed me yesterday",
  "took a dump in my bed",
  "is having a nervous breakdown",
  "poured lemonade in my gas tank",
  "found my collection of pig hooves",
  "wants to give me 'the talk'",
  "gave me mono",
  "wants to watch 'Space Jam' on VHS",
  "stole my bike",
  "is teaching me how to ride a motorcycle",
  "kidnapped my eldest son",
  "ran me over with a Moped",
  "is stuck in a tree",
  "is trying to get a new law passed",
  "is on TV tonight",
  "is having a toe removed",
  "used poison oak as toilet paper",
  "broke both of my arms",
  "is going skinny-dipping",
  "is on a date and needs a wingman",
  "sold my kidneys on the black market",
  "rode a horse through a mall",
  "just sent me a shopping list",
  "is playing soccer tonight",
  "drove a bus into my backyard",
  "is converting to Marxism",
  "made friends with a rabid squirrel",
  "started dating a comedian",
  "got their foot stuck in a blender",
  "ended up on local news",
  "is getting a manicure",
  "burned my hand on a charcoal grill",
  "told me not to",
  "is holding me for ransom",
  "hacked into the government",
  "converted to Mormonism",
  "is auditioning for a Beatles impersonator band",
  "is teaching me how to drive a forklift",
  "prank-called the FBI and now I have to bail them out",
  "went streaking",
  "is helping me sell my soul to Corporate America",
  "opened a swanky bar downtown",
  "broke my key off in my doorknob... now I'll never be able to leave home",
  "is writing a medley of classic rock songs",
  "moved to Turkey",
  "is making squash for dinner",
  "invited me to the Nissan Sign-and-Drive Sales Event",
  "is literally sitting in my living room watching Friends right now",
  "says you're a liar",
  "just dumped me",
  "... you know what? Forget it. You don't care anyway"
]

function makeExcuse() {

  console.log("makeExcuse")

  // var i1 = Math.floor(Math.random * intro.length);
  // var i2 = Math.floor(Math.random * scape.length);
  // var i3 = Math.floor(Math.random * excus.length);

  var i1 = intro[~~(Math.random() * intro.length)]
  var i2 = scape[~~(Math.random() * scape.length)]
  var i3 = excus[~~(Math.random() * excus.length)]

  x1 = '<span id="x1">' + i1 + '</span>';
  x2 = '<span id="x2">' + i2 + '</span>';
  x3 = '<span id="x3">' + i3 + '</span>';

  var outstring = x1 + " " + x2 + " " + x3 + ".";
  // var outstring = intro[i1] + " " + scape[i2] + " " + excus[i3] + ".";

  console.log(outstring)
  document.getElementById("excuse").innerHTML = outstring;

}
