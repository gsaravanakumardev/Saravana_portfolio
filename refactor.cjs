const fs = require('fs');
const path = require('path');

const replacements = [
  { from: /text-white\/70/g, to: 'text-foreground/70' },
  { from: /text-white\/60/g, to: 'text-foreground/60' },
  { from: /text-white\/80/g, to: 'text-foreground/80' },
  { from: /text-white\/90/g, to: 'text-foreground/90' },
  { from: /hover:text-white/g, to: 'hover:text-foreground' },
  { from: /text-white/g, to: 'text-foreground' },
  { from: /border-white\/5/g, to: 'border-border/30' },
  { from: /border-white\/10/g, to: 'border-border/50' },
  { from: /border-white\/20/g, to: 'border-border/70' },
  { from: /hover:border-white\/20/g, to: 'hover:border-border/70' },
  { from: /hover:bg-white\/10/g, to: 'hover:bg-secondary/50' },
  { from: /hover:bg-white\/8/g, to: 'hover:bg-secondary/40' },
  { from: /bg-white\/5/g, to: 'bg-secondary/30' },
  { from: /bg-white\/10/g, to: 'bg-secondary/50' },
  { from: /bg-white\/20/g, to: 'bg-secondary/70' },
  { from: /bg-white/g, to: 'bg-foreground' },
  { from: /text-black/g, to: 'text-background' },
  { from: /bg-\[#232620\]/g, to: 'bg-card' },
  { from: /backgroundColor:\s*['"]#232620['"]/g, to: 'backgroundColor: "var(--card)"' },
  { from: /style=\{\{\s*backgroundColor:\s*`\$\{project\.color\}15`\s*\}\}/g, to: 'style={{ backgroundColor: `color-mix(in srgb, ${project.color} 15%, var(--background))` }}' },
];

function processDirectory(directory) {
  const files = fs.readdirSync(directory);
  
  for (const file of files) {
    const fullPath = path.join(directory, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let originalContent = content;
      
      for (const { from, to } of replacements) {
        content = content.replace(from, to);
      }
      
      if (content !== originalContent) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Updated ${fullPath}`);
      }
    }
  }
}

processDirectory(path.join(__dirname, 'src'));
console.log("Done");
