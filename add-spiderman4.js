const fs = require('fs');
const path = require('path');
const https = require('https');

const timelinePath = path.join(__dirname, 'src', 'data', 'timeline.ts');
let content = fs.readFileSync(timelinePath, 'utf8');

const match = content.match(/export const mcuTimeline: MCUItem\[\] = (\[[\s\S]*?\]);\n\nexport/);
if (!match) process.exit(1);

const timelineStr = match[1];
let timeline = eval(timelineStr);

if (timeline.some(i => i.id === 'spiderman-brand-new-day')) {
  console.log('Already exists');
  process.exit(0);
}

const spiderman4 = {
  id: "spiderman-brand-new-day",
  title: "Spider-Man: Brand New Day",
  type: "movie",
  phase: 6,
  year: 2026,
  runtime: 145,
  timelineOrder: 49,
  importance: "imp",
  synopsis: "A forgotten Peter Parker lives alone as a full-time Spider-Man until mounting pressure triggers a dangerous change and a powerful new enemy emerges.",
  characters: [
    "Peter Parker",
    "MJ",
    "Ned Leeds",
    "Hulk"
  ],
  posterUrl: "/posters/spiderman-brand-new-day.jpg"
};

timeline.push(spiderman4);
timeline.sort((a, b) => a.timelineOrder - b.timelineOrder);

const newTimelineStr = JSON.stringify(timeline, null, 2).replace(/"([^"]+)":/g, '$1:');
const newContent = content.replace(timelineStr, newTimelineStr);
fs.writeFileSync(timelinePath, newContent, 'utf8');

const posterUrl = "https://m.media-amazon.com/images/M/MV5BOWNjYWM3NWItOGE0ZS00MWRjLThiZWEtYjc4ZmNmMmU5ZTVmXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg";
const dest = path.join(__dirname, 'public', 'posters', 'spiderman-brand-new-day.jpg');

https.get(posterUrl, (res) => {
  if (res.statusCode === 301 || res.statusCode === 302) {
    https.get(res.headers.location, (res2) => {
      res2.pipe(fs.createWriteStream(dest));
    });
  } else {
    res.pipe(fs.createWriteStream(dest));
  }
});

console.log("Spider-Man: Brand New Day added!");
