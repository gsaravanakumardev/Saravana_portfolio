const fs = require('fs');
const path = require('path');

const uiDir = path.join(__dirname, 'src', 'components', 'ui');
const srcDir = path.join(__dirname, 'src');

const uiFiles = fs.readdirSync(uiDir).filter(f => f.endsWith('.tsx') || f.endsWith('.ts'));
const usedFiles = new Set();

function getAllFiles(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    for (const file of list) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat && stat.isDirectory()) {
            results = results.concat(getAllFiles(fullPath));
        } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts') || fullPath.endsWith('.js') || fullPath.endsWith('.jsx')) {
            results.push(fullPath);
        }
    }
    return results;
}

const allSrcFiles = getAllFiles(srcDir);
const fileDependencies = {};

// Build a dependency map
for (const fullPath of allSrcFiles) {
    const content = fs.readFileSync(fullPath, 'utf8');
    const deps = new Set();
    
    for (const uiFile of uiFiles) {
        const nameWithoutExt = uiFile.replace(/\.tsx?$/, '');
        // Regex to check for import statements containing the component name
        // e.g., from "@/components/ui/button" or from "../ui/button" or from "./button"
        const regex = new RegExp(`['"](?:@/components/ui/|\\.\\./ui/|\\./|\\.\\./\\.\\./components/ui/)${nameWithoutExt}['"]`);
        if (regex.test(content)) {
            deps.add(uiFile);
        }
    }
    
    if (deps.size > 0) {
        fileDependencies[fullPath] = Array.from(deps);
    }
}

// Find all root uses (files outside of uiDir that import a ui component)
for (const fullPath of Object.keys(fileDependencies)) {
    if (!fullPath.startsWith(uiDir)) {
        for (const dep of fileDependencies[fullPath]) {
            usedFiles.add(dep);
        }
    }
}

// Transitively add uses within uiDir
let changed = true;
while (changed) {
    changed = false;
    for (const fullPath of Object.keys(fileDependencies)) {
        if (fullPath.startsWith(uiDir)) {
            const fileName = path.basename(fullPath);
            if (usedFiles.has(fileName)) {
                for (const dep of fileDependencies[fullPath]) {
                    if (!usedFiles.has(dep)) {
                        usedFiles.add(dep);
                        changed = true;
                    }
                }
            }
        }
    }
}

const unusedFiles = uiFiles.filter(f => !usedFiles.has(f));
console.log(JSON.stringify(unusedFiles, null, 2));
