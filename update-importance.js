const fs = require('fs');
const path = require('path');

const timelinePath = path.join(__dirname, 'src', 'data', 'timeline.ts');
let content = fs.readFileSync(timelinePath, 'utf8');

const match = content.match(/export const mcuTimeline: MCUItem\[\] = (\[[\s\S]*?\]);\n\nexport/);
if (!match) process.exit(1);

const timelineStr = match[1];
let timeline = eval(timelineStr);

const optionalKeywords = [
  'Agent Carter',
  'Echo',
  'Agatha',
  'Moon Knight',
  'Ms. Marvel',
  'She-Hulk',
  'Hawkeye',
  'Secret Invasion',
  'What If',
  'Groot'
];

for (let item of timeline) {
  let isOptional = false;
  if (item.extended) isOptional = true;
  for (let kw of optionalKeywords) {
    if (item.title.includes(kw)) {
      isOptional = true;
      break;
    }
  }
  item.importance = isOptional ? 'optional' : 'imp';
}

const newTimelineStr = JSON.stringify(timeline, null, 2).replace(/"([^"]+)":/g, '$1:');
let newContent = content.replace(timelineStr, newTimelineStr);

// Add importance to MCUItem interface
if (!newContent.includes('importance?:')) {
  newContent = newContent.replace('extended?: boolean;', 'extended?: boolean;\n  importance?: "imp" | "optional";');
}

fs.writeFileSync(timelinePath, newContent, 'utf8');
console.log("Updated importance successfully.");
