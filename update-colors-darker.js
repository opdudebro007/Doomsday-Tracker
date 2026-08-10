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
  
  // Replace the old dark green with an even darker green first to avoid conflicts
  content = content.replace(/#15803d/gi, '#14532d'); 
  
  // Replace the bright green with the darker green
  content = content.replace(/#22c55e/gi, '#15803d');
  
  // Replace the RGB values used in glows/gradients
  content = content.replace(/34,\s*197,\s*94/g, '21, 128, 61');
  
  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    console.log('Updated hex/rgb in', file);
  }
});
console.log('Done replacing colors in src');
