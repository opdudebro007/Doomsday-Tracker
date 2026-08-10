const fs = require('fs');
const path = require('path');

const filesToProcess = [
  'src/app/page.tsx',
  'src/components/layout/Navbar.tsx',
  'src/components/ui/Card.tsx',
  'src/app/stats/page.tsx'
];

const replacements = [
  // Backgrounds
  { search: /bg-\[#0a0a0c\](\/[0-9]+)?/g, replace: 'bg-background$1' },
  { search: /bg-\[#121316\]/g, replace: 'bg-card' },
  { search: /bg-\[#111216\](\/[0-9]+)?/g, replace: 'bg-card$1' },
  { search: /bg-\[#111113\]/g, replace: 'bg-muted' },
  { search: /bg-\[#1a1112\]/g, replace: 'bg-muted' },
  { search: /bg-\[#181a1f\]/g, replace: 'bg-muted' },
  { search: /bg-\[#1e2025\]/g, replace: 'bg-muted' },
  { search: /bg-\[#222\]/g, replace: 'bg-muted' },
  { search: /bg-\[#090a0c\]/g, replace: 'bg-muted' },
  { search: /bg-white\/5/g, replace: 'bg-foreground/5' },
  { search: /bg-white\/10/g, replace: 'bg-foreground/10' },
  { search: /hover:bg-white\/5/g, replace: 'hover:bg-foreground/5' },
  
  // Borders
  { search: /border-\[#22242a\]/g, replace: 'border-border' },
  { search: /border-\[#2c2f36\]/g, replace: 'border-border' },
  { search: /border-\[#3f1b1e\]/g, replace: 'border-border' },
  { search: /border-\[#1e2025\]/g, replace: 'border-border' },
  { search: /border-white\/5/g, replace: 'border-border' },
  { search: /border-white\/10/g, replace: 'border-border' },
  { search: /border-white\/20/g, replace: 'border-border' },
  { search: /focus:border-white\/20/g, replace: 'focus:border-foreground/20' },
  
  // Text
  { search: /text-text-secondary/g, replace: 'text-muted-foreground' },
  { search: /placeholder:text-text-secondary/g, replace: 'placeholder:text-muted-foreground' }
];

for (const relPath of filesToProcess) {
  const file = path.join(__dirname, relPath);
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    for (const r of replacements) {
      content = content.replace(r.search, r.replace);
    }
    
    // Manual text-white replacement that avoids Marvel Red text
    // Replace text-white only when it's text-primary or general text
    content = content.replace(/text-text-primary/g, 'text-foreground');
    content = content.replace(/text-white/g, 'text-foreground');
    // But put it back for the Marvel Logo and "Doomsday in" and "100%" and specific red buttons
    content = content.replace(/bg-\[#e62429\] text-foreground/g, 'bg-[#e62429] text-white');
    content = content.replace(/bg-marvel-red text-foreground/g, 'bg-marvel-red text-white');
    content = content.replace(/text-foreground font-bold py-2\.5/g, 'text-white font-bold py-2.5'); // Start Tracking button
    content = content.replace(/text-foreground px-1\.5/g, 'text-white px-1.5'); // Stats pill
    
    // Also fix some hover text colors that shouldn't be foreground on light mode if it was white
    content = content.replace(/hover:text-foreground/g, 'hover:text-foreground'); 
    
    fs.writeFileSync(file, content, 'utf8');
  }
}
console.log('Refactoring complete');
