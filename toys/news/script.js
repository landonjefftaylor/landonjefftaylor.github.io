
const intro = [
  "Extra, extra!",
  "You heard it here:",
  "This just in:",
  "Breaking:",
  "Breaking news:",
  "Today's top story:",
  "Hot today:",
  "From our sponsor:"
]

const subject = [
  "Donald Trump",
  "Joe Biden",
  "Hillary Clinton",
  "Obama",
  "local butcher",
  "your mom",
  "Walmart CEO",
  "anonymous Karen",
  "masked bandit",
  "ANTIFA",
  "KKK leader",
  "French republican",
  "seven horny teenagers",
  "German president",
  "a sexist british man",
  "drunk homeless man",
  "police chief",
  "flock of hamsters",
  "attractive single in your area",
  "average Reddit user"
]

const verb = [
  "causes six-way collision",
  "injures democracy",
  "steals reptiles from local zoo",
  "french kisses yogurt",
  "streaks through hospital",
  "sells meth to communists",
  "builds new colonies",
  "initiates civil unrest",
  "burns down police station",
  "establishes new nation",
  "visits nudist beach",
  "flips off queen",
  "crochets a sweater",
  "offends entire race",
  "drinks blood of enemies",
  "opens pharmaceutical company",
  "steals president's dog",
  "becomes meme",
  "fills swimming pool with plastic camels",
  "urinates publicly",
  "found drinking hand santizer",
  "seen smoking maple leaves",
  "drunkenly rides horse",
  "discovered wearing adult diapers",
  "wears pants backwards",
  "claims all goats are evil",
  "shouts at man for kicking puppy",
  "joins bird-watching group",
  "befriends the wrong polar bear",
  "reaches many about their cars' extended warranties",
  "really bad at crocheting",
  "spots wild cheetah",
  "cheats on drug test",
  "owns the liberals"
]

const object = [
  "",
  "at zoo",
  "in bed",
  "on dark web",
  "in Paris",
  "on television",
  "with relative ease",
  ", wants to share secret",
  "over top-secret phone call",
  "under bridge",
  "in secret",
  "by accident",
  "last Thursday",
  "under car",
  "in French cafe",
  "at local bar",
  "for disabled children",
  "on way home"
]


function makeHeadline() {

  console.log("makeHeadline")

  var i0 = intro[~~(Math.random() * intro.length)]
  var i1 = subject[~~(Math.random() * subject.length)]
  var i2 = verb[~~(Math.random() * verb.length)]
  var i3 = object[~~(Math.random() * object.length)]

  x0 = '<span id="x0">' + i0 + '</span>';
  x1 = '<span id="x1">' + i1 + '</span>';
  x2 = '<span id="x2">' + i2 + '</span>';
  x3 = '<span id="x3">' + i3 + '</span>';

  var outstring = x0 + " " + x1 + " " + x2 + " " + x3 + ".";

  console.log(outstring)
  document.getElementById("headline").innerHTML = outstring;

}