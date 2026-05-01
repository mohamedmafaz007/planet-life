import fs from 'fs';
import path from 'path';

function renameAdvFiles(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      renameAdvFiles(fullPath);
    } else if (file.includes('_adv_')) {
      const newFile = file.replace('_adv_', '_adventure_');
      const newFullPath = path.join(dir, newFile);
      fs.renameSync(fullPath, newFullPath);
      console.log(`Renamed: ${file} -> ${newFile}`);
    }
  }
}

renameAdvFiles('src/assets');

// Also update destinations.ts and imageMap.ts
const updateFile = (filePath) => {
  let content = fs.readFileSync(filePath, 'utf8');
  content = content.replace(/_adv_/g, '_adventure_');
  // Also replace malaysia_new_front.jpg with malaysia_new.jpg
  content = content.replace(/malaysia_new_front\.jpg/g, 'malaysia_new.jpg');
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated: ${filePath}`);
};

updateFile('src/data/destinations.ts');
updateFile('src/data/imageMap.ts');
