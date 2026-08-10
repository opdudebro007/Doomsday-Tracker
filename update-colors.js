const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(function(file) {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) { 
      results = results.concat(walk(file));
    } else { 
      if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.css') || file.endsWith('.js')) {
        results.push(file);
      }
    }
  });
  return results;
}

const files = walk(path.join(__dirname, 'src'));
files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;
  content = content.replace(/#e62429/gi, '#22c55e'); // doomsday green
  content = content.replace(/#9e1418/gi, '#15803d'); // doomsday dark green
  content = content.replace(/230,\s*36,\s*41/g, '34, 197, 94'); // doomsday green rgb
  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    console.log('Updated hex/rgb in', file);
  }
});
console.log('Done replacing colors in src');
