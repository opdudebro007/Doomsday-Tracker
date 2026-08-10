const fs = require('fs');
const content = fs.readFileSync('src/data/timeline.ts', 'utf8');
const match = content.match(/export const mcuTimeline: MCUItem\[\] = (\[[\s\S]*?\]);\n\nexport/);
const str = match[1];
let timeline = eval(str);
console.log(timeline.map(t => t.id).join(', '));
