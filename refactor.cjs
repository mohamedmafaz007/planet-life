const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const root = __dirname;
const frontendPath = path.join(root, 'frontend');
const backendPath = path.join(root, 'backend');

// 1. Create folders
if (!fs.existsSync(frontendPath)) fs.mkdirSync(frontendPath);
if (!fs.existsSync(backendPath)) fs.mkdirSync(backendPath);
if (!fs.existsSync(path.join(backendPath, 'src'))) fs.mkdirSync(path.join(backendPath, 'src'));

// 2. Move frontend files
const frontendFiles = [
  'src', 'public', 'assets', 'index.html', 'vite.config.ts', 
  'tailwind.config.ts', 'postcss.config.js', 'components.json', 
  'eslint.config.js', 'tsconfig.app.json', 'tsconfig.node.json', 
  'tsconfig.json', 'package.json', 'package-lock.json', '.npmrc',
  'check_image.cjs', 'fix_images.js'
];

for (const file of frontendFiles) {
    if (fs.existsSync(path.join(root, file))) {
        fs.renameSync(path.join(root, file), path.join(frontendPath, file));
    }
}

// 3. Move backend files
const backendFiles = ['prisma'];
for (const file of backendFiles) {
    if (fs.existsSync(path.join(root, file))) {
        fs.renameSync(path.join(root, file), path.join(backendPath, file));
    }
}

// Copy .env to backend and frontend
if (fs.existsSync(path.join(root, '.env'))) {
    fs.copyFileSync(path.join(root, '.env'), path.join(backendPath, '.env'));
    fs.copyFileSync(path.join(root, '.env'), path.join(frontendPath, '.env'));
}

// Remove old api folder and vercel stuff
if (fs.existsSync(path.join(root, 'api'))) {
    fs.rmSync(path.join(root, 'api'), { recursive: true, force: true });
}
if (fs.existsSync(path.join(root, '.vercel'))) {
    fs.rmSync(path.join(root, '.vercel'), { recursive: true, force: true });
}
if (fs.existsSync(path.join(root, 'vercel.json'))) {
    fs.unlinkSync(path.join(root, 'vercel.json'));
}

console.log("Refactoring complete");
