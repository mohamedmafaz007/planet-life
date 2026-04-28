const fs = require('fs');

try {
  const data = fs.readFileSync('src/assets/malaysia_new_front.jpg');
  console.log('Size:', data.length);
  // Check JPEG magic numbers
  if (data[0] === 0xFF && data[1] === 0xD8 && data[2] === 0xFF) {
    console.log('Valid JPEG header');
  } else {
    console.log('Invalid JPEG header:', data[0], data[1], data[2]);
  }
} catch (e) {
  console.error('Error:', e);
}
