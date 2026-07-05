const https = require('https');
const fs = require('fs');
const path = require('path');

const logosDir = path.join(__dirname, '..', 'public', 'logos');
const filePath = path.join(logosDir, 'vscode.png');

// Ensure logos directory exists
if (!fs.existsSync(logosDir)) {
  fs.mkdirSync(logosDir, { recursive: true });
}

// Download VS Code logo from Simple Icons
const url = 'https://cdn.simpleicons.org/visualstudiocode/007ACC';

console.log('Downloading VS Code logo...');

https.get(url, (response) => {
  if (response.statusCode === 200) {
    const fileStream = fs.createWriteStream(filePath);
    response.pipe(fileStream);
    
    fileStream.on('finish', () => {
      fileStream.close();
      console.log('✓ VS Code logo downloaded successfully!');
    });
  } else {
    console.error(`✗ Failed to download: HTTP ${response.statusCode}`);
    // Fallback: use SVG and convert or use alternative URL
    console.log('Trying alternative method...');
    downloadAlternative();
  }
}).on('error', (err) => {
  console.error('✗ Error:', err.message);
  downloadAlternative();
});

function downloadAlternative() {
  // Alternative: download from official VS Code GitHub or use a direct SVG
  const altUrl = 'https://raw.githubusercontent.com/microsoft/vscode/main/resources/win32/code.ico';
  // Or use Simple Icons SVG format
  const svgUrl = 'https://cdn.simpleicons.org/visualstudiocode';
  
  https.get(svgUrl, (response) => {
    if (response.statusCode === 200) {
      const fileStream = fs.createWriteStream(filePath.replace('.png', '.svg'));
      response.pipe(fileStream);
      fileStream.on('finish', () => {
        fileStream.close();
        console.log('✓ VS Code logo downloaded as SVG!');
      });
    }
  });
}

