const fs = require('fs');
const path = require('path');

const timelinePath = path.join(__dirname, 'src', 'data', 'timeline.ts');
let content = fs.readFileSync(timelinePath, 'utf8');

// Update Phase type
if (!content.includes("'Legacy'")) {
  content = content.replace('export type Phase = 1 | 2 | 3 | 4 | 5 | 6;', "export type Phase = 1 | 2 | 3 | 4 | 5 | 6 | 'Legacy';");
}

const match = content.match(/export const mcuTimeline: MCUItem\[\] = (\[[\s\S]*?\]);\n\nexport/);
if (!match) process.exit(1);

const timelineStr = match[1];
let timeline = eval(timelineStr);

// Check if already added
if (timeline.some(i => i.phase === 'Legacy')) {
  console.log('Legacy movies already exist!');
  process.exit(0);
}

const legacyMovies = [
  // Blade Trilogy
  { id: "blade-1", title: "Blade", year: 1998, runtime: 120, synopsis: "A half-vampire, half-mortal man becomes a protector of the mortal race." },
  { id: "blade-2", title: "Blade II", year: 2002, runtime: 117, synopsis: "Blade forms an uneasy alliance with the vampire council in order to combat the Reapers." },
  { id: "blade-trinity", title: "Blade: Trinity", year: 2004, runtime: 113, synopsis: "Blade is framed for numerous murders and joins forces with the Nightstalkers." },
  
  // X-Men Original Trilogy
  { id: "x-men", title: "X-Men", year: 2000, runtime: 104, synopsis: "Two mutants come to a private academy for their kind whose resident superhero team must oppose a terrorist organization." },
  { id: "x2", title: "X2: X-Men United", year: 2003, runtime: 134, synopsis: "When anti-mutant Colonel William Stryker kidnaps Professor X and attacks his school, the X-Men must ally with their archenemy Magneto." },
  { id: "x-men-last-stand", title: "X-Men: The Last Stand", year: 2006, runtime: 104, synopsis: "The human government develops a cure for mutations, and Jean Grey becomes a dark uncontrollable force." },
  
  // Spider-Man (Tobey)
  { id: "spider-man-1", title: "Spider-Man", year: 2002, runtime: 121, synopsis: "When bitten by a genetically modified spider, a nerdy, shy, and awkward high school student gains spider-like abilities." },
  { id: "spider-man-2", title: "Spider-Man 2", year: 2004, runtime: 127, synopsis: "Peter Parker is beset with troubles in his failing personal life as he battles a brilliant scientist named Doctor Otto Octavius." },
  { id: "spider-man-3", title: "Spider-Man 3", year: 2007, runtime: 139, synopsis: "A strange black entity from another world bonds with Peter Parker and causes inner turmoil as he contends with new villains." },
  
  // Daredevil / Elektra
  { id: "daredevil", title: "Daredevil", year: 2003, runtime: 103, synopsis: "A man blinded by toxic waste which also enhanced his remaining senses fights crime as an acrobatic martial arts superhero." },
  { id: "elektra", title: "Elektra", year: 2005, runtime: 97, synopsis: "Elektra the warrior survives a near-death experience, becomes an assassin-for-hire, and tries to protect her two latest targets." },
  
  // Fantastic Four (Tim Story)
  { id: "fantastic-four-2005", title: "Fantastic Four", year: 2005, runtime: 106, synopsis: "A group of astronauts gain superpowers after a cosmic radiation exposure and must use them to oppose the plans of their enemy." },
  { id: "fantastic-four-silver-surfer", title: "Fantastic Four: Rise of the Silver Surfer", year: 2007, runtime: 92, synopsis: "The Fantastic Four learn that they aren't the only super-powered beings in the universe." },

  // Ghost Rider
  { id: "ghost-rider", title: "Ghost Rider", year: 2007, runtime: 110, synopsis: "Stunt motorcyclist Johnny Blaze gives up his soul to become a hellblazing vigilante." },
  { id: "ghost-rider-spirit", title: "Ghost Rider: Spirit of Vengeance", year: 2011, runtime: 95, synopsis: "Johnny Blaze, tortured by the Ghost Rider's curse, gets a chance of redemption through protecting the Devil's son." },

  // X-Men Origins & First Class
  { id: "x-men-origins-wolverine", title: "X-Men Origins: Wolverine", year: 2009, runtime: 107, synopsis: "The early years of James Logan, featuring his rivalry with his brother Victor Creed." },
  { id: "x-men-first-class", title: "X-Men: First Class", year: 2011, runtime: 131, synopsis: "In the 1960s, superpowered humans Charles Xavier and Erik Lensherr work together to find others like them." },

  // The Amazing Spider-Man
  { id: "amazing-spider-man-1", title: "The Amazing Spider-Man", year: 2012, runtime: 136, synopsis: "After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers." },
  { id: "amazing-spider-man-2", title: "The Amazing Spider-Man 2", year: 2014, runtime: 142, synopsis: "When New York is put under siege by Oscorp, it is up to Spider-Man to save the city he swore to protect." },

  // Wolverine / Days of Future Past
  { id: "the-wolverine", title: "The Wolverine", year: 2013, runtime: 126, synopsis: "Wolverine comes to Japan to meet an old friend whose life he saved years ago." },
  { id: "x-men-dofp", title: "X-Men: Days of Future Past", year: 2014, runtime: 132, synopsis: "The X-Men send Wolverine to the past in a desperate effort to change history." },
  
  // Fantastic Four (Josh Trank)
  { id: "fantastic-four-2015", title: "Fantastic Four", year: 2015, runtime: 100, synopsis: "Four young outsiders teleport to an alternate and dangerous universe which alters their physical form in shocking ways." },

  // Deadpool & X-Men Apocalypse
  { id: "deadpool-1", title: "Deadpool", year: 2016, runtime: 108, synopsis: "A wisecracking mercenary gets experimented on and becomes immortal but ugly, and sets out to track down the man who ruined his looks." },
  { id: "x-men-apocalypse", title: "X-Men: Apocalypse", year: 2016, runtime: 144, synopsis: "In the 1980s the X-Men must defeat an ancient all-powerful mutant, En Sabah Nur." },
  
  // Logan / Venom / Deadpool 2
  { id: "logan", title: "Logan", year: 2017, runtime: 137, synopsis: "In a future where mutants are nearly extinct, an elderly and weary Logan leads a quiet life. But when Laura, a mutant child pursued by scientists, comes to him for help, he must get her to safety." },
  { id: "venom-1", title: "Venom", year: 2018, runtime: 112, synopsis: "A failed reporter is bonded to an alien entity, one of many symbiotes who have invaded Earth." },
  { id: "deadpool-2", title: "Deadpool 2", year: 2018, runtime: 119, synopsis: "Foul-mouthed mutant mercenary Wade Wilson brings together a team of fellow mutant rogues." },
  
  // Dark Phoenix / New Mutants
  { id: "dark-phoenix", title: "Dark Phoenix", year: 2019, runtime: 113, synopsis: "Jean Grey begins to develop incredible powers that corrupt and turn her into a Dark Phoenix." },
  { id: "new-mutants", title: "The New Mutants", year: 2020, runtime: 94, synopsis: "Five young mutants, just discovering their abilities while held in a secret facility against their will, fight to escape." },

  // Venom sequels / Morbius / Madame Web
  { id: "venom-ltbc", title: "Venom: Let There Be Carnage", year: 2021, runtime: 97, synopsis: "Eddie Brock attempts to reignite his career by interviewing serial killer Cletus Kasady, who becomes the host of the symbiote Carnage." },
  { id: "morbius", title: "Morbius", year: 2022, runtime: 104, synopsis: "Biochemist Michael Morbius tries to cure himself of a rare blood disease, but he inadvertently infects himself with a form of vampirism instead." },
  { id: "madame-web", title: "Madame Web", year: 2024, runtime: 116, synopsis: "Cassandra Webb is a New York metropolis paramedic who begins to demonstrate signs of clairvoyance." },
  { id: "venom-last-dance", title: "Venom: The Last Dance", year: 2024, runtime: 110, synopsis: "Eddie and Venom are on the run. Hunted by both of their worlds." }
];

let baseOrder = 0.01;
legacyMovies.sort((a,b) => a.year - b.year);

for (let movie of legacyMovies) {
  movie.type = "movie";
  movie.phase = "Legacy";
  movie.importance = "optional";
  movie.timelineOrder = Number(baseOrder.toFixed(2));
  movie.characters = [];
  baseOrder += 0.01;
  timeline.push(movie);
}

// Re-sort to put Legacy first (actually their timeline order is 0.xx so sorting by timelineOrder works)
timeline.sort((a, b) => a.timelineOrder - b.timelineOrder);

const newTimelineStr = JSON.stringify(timeline, null, 2).replace(/"([^"]+)":/g, '$1:');
const newContent = content.replace(timelineStr, newTimelineStr);
fs.writeFileSync(timelinePath, newContent, 'utf8');

console.log('Legacy movies added successfully. Added ' + legacyMovies.length + ' movies.');
