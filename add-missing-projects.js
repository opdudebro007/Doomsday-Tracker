const fs = require('fs');
const path = require('path');

const timelinePath = path.join(__dirname, 'src', 'data', 'timeline.ts');
let content = fs.readFileSync(timelinePath, 'utf8');

const match = content.match(/export const mcuTimeline: MCUItem\[\] = (\[[\s\S]*?\]);\n\nexport/);
if (!match) {
  console.error("Could not find timeline array");
  process.exit(1);
}

const timelineStr = match[1];
let timeline = eval(timelineStr);

// Avoid duplicate additions
if (timeline.some(i => i.id === 'daredevil-series')) {
  console.log('Missing projects already added!');
  process.exit(0);
}

const missingProjects = [
  // Defenders Saga
  { id: "daredevil-series", title: "Daredevil", year: 2015, runtime: 50, synopsis: "Matt Murdock fights crime as a blind lawyer by day, and a vigilante by night.", type: "show", phase: 2, importance: "optional", timelineOrder: 10.1, characters: ["Daredevil", "Kingpin"] },
  { id: "jessica-jones", title: "Jessica Jones", year: 2015, runtime: 50, synopsis: "A former superhero decides to reboot her life by becoming a private investigator.", type: "show", phase: 2, importance: "optional", timelineOrder: 11.1, characters: [] },
  { id: "luke-cage", title: "Luke Cage", year: 2016, runtime: 50, synopsis: "Given superstrength and durability by a sabotaged experiment, a wrongly accused man escapes prison to become a superhero for hire.", type: "show", phase: 3, importance: "optional", timelineOrder: 13.1, characters: [] },
  { id: "iron-fist", title: "Iron Fist", year: 2017, runtime: 50, synopsis: "A young man is bestowed with incredible martial arts skills and a mystical force known as the Iron Fist.", type: "show", phase: 3, importance: "optional", timelineOrder: 14.1, characters: [] },
  { id: "defenders", title: "The Defenders", year: 2017, runtime: 50, synopsis: "Daredevil, Jessica Jones, Luke Cage, and Iron Fist team up to fight crime in New York City.", type: "show", phase: 3, importance: "optional", timelineOrder: 14.2, characters: ["Daredevil"] },
  { id: "punisher", title: "The Punisher", year: 2017, runtime: 50, synopsis: "After exacting revenge on those responsible for the death of his family, a former Marine uncovers a conspiracy.", type: "show", phase: 3, importance: "optional", timelineOrder: 17.1, characters: [] },

  // Marvel Television
  { id: "agents-of-shield", title: "Agents of S.H.I.E.L.D.", year: 2013, runtime: 45, synopsis: "The missions of the Strategic Homeland Intervention, Enforcement and Logistics Division.", type: "show", phase: 2, importance: "optional", timelineOrder: 8.1, characters: [] },
  { id: "agent-carter-s2", title: "Agent Carter (Season 2)", year: 2016, runtime: 45, synopsis: "Peggy Carter moves to Los Angeles to deal with the Secret Empire.", type: "show", phase: 2, importance: "optional", timelineOrder: 2.2, characters: [] },
  { id: "inhumans", title: "Inhumans", year: 2017, runtime: 45, synopsis: "An isolated community of superhumans fight to protect themselves.", type: "show", phase: 3, importance: "optional", timelineOrder: 17.2, characters: [] },
  { id: "runaways", title: "Runaways", year: 2017, runtime: 45, synopsis: "Six teenagers from different backgrounds unite against a common enemy: their criminal parents.", type: "show", phase: 3, importance: "optional", timelineOrder: 17.3, characters: [] },
  { id: "cloak-and-dagger", title: "Cloak & Dagger", year: 2018, runtime: 45, synopsis: "Two teenagers with different backgrounds acquire superpowers and form a romantic relationship.", type: "show", phase: 3, importance: "optional", timelineOrder: 17.4, characters: [] },
  { id: "helstrom", title: "Helstrom", year: 2020, runtime: 45, synopsis: "The children of a powerful serial killer hunt the worst of humanity.", type: "show", phase: 3, importance: "optional", timelineOrder: 22.1, characters: [] },

  // Disney+ Specials
  { id: "werewolf-by-night", title: "Werewolf by Night", year: 2022, runtime: 53, synopsis: "A secret cabal of monster hunters gather at the Bloodstone Temple.", type: "movie", phase: 4, importance: "optional", timelineOrder: 36.1, characters: [] },
  { id: "gotg-holiday-special", title: "The Guardians of the Galaxy Holiday Special", year: 2022, runtime: 42, synopsis: "The Guardians celebrate Christmas and search for the perfect gift for Quill.", type: "movie", phase: 4, importance: "imp", timelineOrder: 37.1, characters: [] },

  // Disney+ Animation
  { id: "what-if-s1", title: "What If...? (Season 1)", year: 2021, runtime: 35, synopsis: "Exploring alternate timelines in the multiverse.", type: "show", phase: 4, importance: "imp", timelineOrder: 25.1, characters: [] },
  { id: "what-if-s2", title: "What If...? (Season 2)", year: 2023, runtime: 35, synopsis: "The Watcher continues to explore the vast multiverse.", type: "show", phase: 5, importance: "optional", timelineOrder: 35.1, characters: [] },
  { id: "i-am-groot", title: "I Am Groot", year: 2022, runtime: 5, synopsis: "A series of shorts featuring Baby Groot growing up in the galaxy.", type: "show", phase: 4, importance: "optional", timelineOrder: 15.1, characters: [] },
  { id: "x-men-97", title: "X-Men '97", year: 2024, runtime: 30, synopsis: "The X-Men face dangerous new challenges following the loss of their leader.", type: "show", phase: 'Legacy', importance: "optional", timelineOrder: 0.05, characters: [] },

  // Upcoming Phase 5/6
  { id: "daredevil-born-again", title: "Daredevil: Born Again", year: 2025, runtime: 50, synopsis: "Matt Murdock and Wilson Fisk try to put their dark rivalry behind them.", type: "show", phase: 5, importance: "imp", timelineOrder: 42.1, characters: ["Daredevil", "Kingpin"] },
  { id: "ironheart", title: "Ironheart", year: 2025, runtime: 45, synopsis: "Genius teenage inventor Riri Williams creates the most advanced suit of armor since Iron Man.", type: "show", phase: 5, importance: "optional", timelineOrder: 41.1, characters: [] }
];

// Append missing projects
for (let p of missingProjects) {
  timeline.push(p);
}

// Sort the timeline primarily by timelineOrder
timeline.sort((a, b) => a.timelineOrder - b.timelineOrder);

// Replace the string
const newTimelineStr = JSON.stringify(timeline, null, 2)
  .replace(/"([^"]+)":/g, '$1:')
  .replace(/'Legacy'/g, '"Legacy"'); // Just in case

const newContent = content.replace(timelineStr, newTimelineStr);
fs.writeFileSync(timelinePath, newContent, 'utf8');

console.log('Successfully added ' + missingProjects.length + ' missing projects!');
