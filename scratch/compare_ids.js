import fs from 'fs';

const currentFile = fs.readFileSync('d:/planet_life/planet-life/src/data/destinations.ts', 'utf8');
const backupFile = fs.readFileSync('d:/planet_life/planet-life/src/data/destinations_backup_full_utf8.ts', 'utf8');

function extractIds(content) {
    const ids = [];
    const regex = /id:\s*"([^"]+)"/g;
    let match;
    while ((match = regex.exec(content)) !== null) {
        ids.push(match[1]);
    }
    return ids;
}

const currentIds = extractIds(currentFile);
const backupIds = extractIds(backupFile);

const missingInCurrent = backupIds.filter(id => !currentIds.includes(id));
const missingInBackup = currentIds.filter(id => !backupIds.includes(id));

console.log("Missing in Current:", missingInCurrent);
console.log("Missing in Backup:", missingInBackup);
