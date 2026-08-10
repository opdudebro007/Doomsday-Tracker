const fs = require('fs');
const path = require('path');
const file = path.join(__dirname, 'src', 'app', 'stats', 'page.tsx');
let content = fs.readFileSync(file, 'utf8');
content = content.replace(/#e23636/g, '#15803d');
content = content.replace(/#b32a2a/g, '#14532d');
fs.writeFileSync(file, content, 'utf8');
console.log('Fixed stats colors');
