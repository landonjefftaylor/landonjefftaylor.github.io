const a = [
  "some",
  "the",
  "one",
  "the other",
  "an evil,",
  "a small-town,",
  "an exceptionally",
  "a hopelessly",
  "your cousin, the",
  "the dark side of some",
  "a friendly,",
  "a cool,",
  "a nerdy,",
  "a futuristic",
  "an unreliable,",
  "a professional",
  "an extremely"
]

const b = [
  "blonde",
  "brave",
  "clever",
  "conniving",
  "guilt-ridden",
  "rude",
  "casual",
  "traumatized",
  "house-bound",
  "gifted",
  "radical",
  "fashionable",
  "elegant",
  "polite",
  "quiet",
  "gay",
  "republican",
  "democratic",
  "far-right",
  "far-left",
  "underqualified",
  "over-educated",
  "antisocial",
  "confident",
  "mentally-unstable",
  "cowardly",
  "sheepish",
  "toxically optimistic",
  "well-connected",
  "rich",
  "poor",
  "gloomy",
  "smug",
  "lucky",
  "stinky",
  "compassionate",
  "peaceful",
  "soft-spoken",
  "workaholic",
  "old",
  "grouchy",
  "stubborn",
  "bubbly"
]

const c = [
  "bartender",
  "engineer",
  "librarian",
  "elementary school teacher",
  "graphic designer",
  "small business owner",
  "stay-at-home mom",
  "nurse",
  "dog trainer",
  "astronaut",
  "janitor",
  "guy",
  "gal",
  "grandma",
  "grandpa",
  "pet hoarder",
  "pilot",
  "cynic",
  "olympic swimmer",
  "ballet teacher",
  "pianist",
  "detective",
  "police officer",
  "construction worker",
  "intern",
  "college student",
  "mechanic",
  "cosmetologist",
  "author",
  "journalist",
  "assistant manager",
  "grocery clerk",
  "priest",
  "IT specialist",
  "homeless man",
  "secretary",
  "teenager",
  "firefighter",
  "lawyer",
  "drug dealer",
  "middle school teacher",
  "programmer",
  "florist",
  "stay-at-home dad",
  "singer-songwriter",
  "movie star",
  "runner",
  "serial killer",
  "door-to-door salesman",
  "football player"
]

const d = [
  "hides from the police",
  "runs away from home",
  "has to find a new job",
  "never leaves their house",
  "gets out of jail",
  "paints horrible modern art",
  "moonlights as a parking attendant",
  "buys a used school bus",
  "starts selling stolen car parts",
  "kills their neighbor",
  "adopts a 15-year-old from Alaska",
  "throws away their life savings",
  "eats only bananas for a month",
  "is trapped in a box",
  "goes to community college",
  "gets in a fight in a mysterious van",
  "gives advice to at-risk teens",
  "has to memorize the Bible",
  "reported their spouse as missing",
  "starts a job making potato chips",
  "finds their true love",
  "forms an addiction to simple syrup",
  "builds houses for the homeless",
  "starts eating paper clips",
  "gets stuck in a closet at work",
  "invents a cure to a disease",
  "finds a secret hidden treasure",
  "rents a minivan",
  "hires 20 underage employees",
  "joins a civil rights campaign",
  "has to flee the country",
  "starts a plague",
  "sneaks into a cereal factory",
  "adopts eight kittens",
  "knits sweaters laced with poison",
  "is in the most dangerous city in the world",
  "finds a buried ancient society",
  "impersonates a famous musician",
  "impulsively starts the wave at sport games",
  "surprises their spouse with a dead mouse",
  "joins a 10-piece brass band",
  "sells their soul to a jewelry store",
  "asks a clown on a date",
  "throws a dead body in a lake",
  "is pretending to be a robot",
  "tries to visit Obama at his home",
  "joins an extreme religious cult",
  "sets six gerbils free in a park"
]

const e = [
  "to save money",
  "because of a dark past",
  "because of a secret terrorist plot",
  "because there was an alien invasion",
  "thanks to childhood trauma",
  "to impress their dead parents",
  "because of a bet placed years ago",
  "out of an abundance of caution",
  "while avoiding a suspicious-looking gentleman",
  "in an effort to pay off a debt",
  "without consulting their therapist",
  "because their best friend is evil",
  "with ulterior motives",
  "after winning the lottery",
  "under suspicious circumstances",
  "with the help of an imaginary friend",
  "for charity",
  "for a tax write-off",
  "even though they have a cold",
  "despite their spouse telling them not to",
  "despite their dreams of being a polar bear",
  "without getting caught",
  "to impress their crush",
  "while listening to 90s rap music",
  "due to undiagnosed mental conditions",
  "after hitting their head on a filing cabinet",
  "while screaming obscenities",
  "in a moment of weakness",
  "to hide from the mafia",
  "to pass a high-school class from years ago"
]

function makePrompt() {

  console.log("makePrompt")

  // var i1 = Math.floor(Math.random * intro.length);
  // var i2 = Math.floor(Math.random * scape.length);
  // var i3 = Math.floor(Math.random * excus.length);

  var i0 = a[~~(Math.random() * a.length)]
  var i1 = b[~~(Math.random() * b.length)]
  var i2 = c[~~(Math.random() * c.length)]
  var i3 = d[~~(Math.random() * d.length)]
  var i4 = e[~~(Math.random() * e.length)]

  x0 = '<span id="x0">' + i0 + '</span>';
  x1 = '<span id="x1">' + i1 + '</span>';
  x2 = '<span id="x2">' + i2 + '</span>';
  x3 = '<span id="x3">who ' + i3 + '</span>';
  x4 = '<span id="x4">' + i4 + '</span>';

  var outstring = '<span id="x-1">Write a story about</span> ' + x0 + " " + x1 + " " + x2 + " " + x3 + " " + x4 + ".";
  // var outstring = intro[i1] + " " + scape[i2] + " " + excus[i3] + ".";

  console.log(outstring)
  document.getElementById("headline").innerHTML = outstring;

}