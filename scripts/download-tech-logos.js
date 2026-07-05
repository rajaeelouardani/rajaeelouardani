const fs = require('fs');
const https = require('https');
const path = require('path');

// Mapping of tool names to Simple Icons names and local file names
const logoMap = {
  'Next.js': { icon: 'nextdotjs', file: 'nextjs.png' },
  'React.js': { icon: 'react', file: 'react.png' },
  'TypeScript': { icon: 'typescript', file: 'typescript.png' },
  'JavaScript': { icon: 'javascript', file: 'javascript.png' },
  'Node.js': { icon: 'nodedotjs', file: 'nodejs.png' },
  'Express.js': { icon: 'express', file: 'express.png' },
  'Redux.js': { icon: 'redux', file: 'redux.png' },
  'HTML5': { icon: 'html5', file: 'html5.png' },
  'CSS': { icon: 'css3', file: 'css3.png' },
  'SCSS': { icon: 'sass', file: 'sass.png' },
  'Tailwind CSS': { icon: 'tailwindcss', file: 'tailwindcss.png' },
  'Bootstrap': { icon: 'bootstrap', file: 'bootstrap.png' },
  'PHP': { icon: 'php', file: 'php.png' },
  'MySQL': { icon: 'mysql', file: 'mysql.png' },
  'Sequelize.js': { icon: 'sequelize', file: 'sequelize.png' },
  'Ant Design': { icon: 'antdesign', file: 'antdesign.png' },
  'WordPress': { icon: 'wordpress', file: 'wordpress.png' },
  'Elementor': { icon: 'elementor', file: 'elementor.png' },
  'WooCommerce': { icon: 'woocommerce', file: 'woocommerce.png' },
  'Three.js': { icon: 'threedotjs', file: 'threejs.png' },
  'React Three Fiber': { icon: 'react', file: 'react-three-fiber.png' },
  'Figma': { icon: 'figma', file: 'figma.png' },
  'Git': { icon: 'git', file: 'git.png' },
  'GitHub': { icon: 'github', file: 'github.png' },
  'Trello': { icon: 'trello', file: 'trello.png' },
  'Jira': { icon: 'jira', file: 'jira.png' },
  'Adobe Photoshop': { icon: 'adobephotoshop', file: 'adobe-photoshop.png' },
  'Adobe Illustrator': { icon: 'adobeillustrator', file: 'adobe-illustrator.png' },
  'Adobe Premiere Pro': { icon: 'adobepremierepro', file: 'adobe-premiere-pro.png' },
  'Canva': { icon: 'canva', file: 'canva.png' },
  'Adobe After Effects': { icon: 'adobeaftereffects', file: 'adobe-after-effects.png' },
  'Blender': { icon: 'blender', file: 'blender.png' },
  'Adobe XD': { icon: 'adobexd', file: 'adobe-xd.png' },
  'Visual Studio Code': { icon: 'visualstudiocode', file: 'vscode.png' },
  'OBS Studio': { icon: 'obsstudio', file: 'obs-studio.png' },
  'Enterprise Architect': { icon: 'sparxsystems', file: 'enterprise-architect.png' },
  'Postman': { icon: 'postman', file: 'postman.png' },
  'Ollama': { icon: 'ollama', file: 'ollama.png' },
  'CapCut': { icon: 'capcut', file: 'capcut.png' },
  'Filmora': { icon: 'wondershare', file: 'filmora.png' },
  'Wireshark': { icon: 'wireshark', file: 'wireshark.png' },
  'XAMPP': { icon: 'apache', file: 'xampp.png' },
  'VMware': { icon: 'vmware', file: 'vmware.png' },
  'Dev C++': { icon: 'cplusplus', file: 'devcpp.png' },
  'Code::Blocks': { icon: 'codeblocks', file: 'codeblocks.png' },
  'Python': { icon: 'python', file: 'python.png' },
  'C': { icon: 'c', file: 'c.png' },
  'C++': { icon: 'cplusplus', file: 'cplusplus.png' },
  'HTML': { icon: 'html5', file: 'html5.png' },
  'CSS Sprites': { icon: 'css3', file: 'css3.png' },
  'Emacs': { icon: 'gnuemacs', file: 'emacs.png' },
  'Ubuntu': { icon: 'ubuntu', file: 'ubuntu.png' },
  'Arduino IDE': { icon: 'arduino', file: 'arduino.png' },
};

const logosDir = path.join(__dirname, '..', 'public', 'logos');

// Ensure logos directory exists
if (!fs.existsSync(logosDir)) {
  fs.mkdirSync(logosDir, { recursive: true });
}

// Function to download a logo
function downloadLogo(toolName, iconName, fileName) {
  return new Promise((resolve, reject) => {
    const url = `https://cdn.simpleicons.org/${iconName}`;
    const filePath = path.join(logosDir, fileName);
    
    // Skip if file already exists
    if (fs.existsSync(filePath)) {
      console.log(`✓ ${toolName} - Already exists: ${fileName}`);
      resolve();
      return;
    }

    console.log(`Downloading ${toolName}...`);
    
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        const fileStream = fs.createWriteStream(filePath);
        response.pipe(fileStream);
        
        fileStream.on('finish', () => {
          fileStream.close();
          console.log(`✓ ${toolName} - Downloaded: ${fileName}`);
          resolve();
        });
      } else if (response.statusCode === 301 || response.statusCode === 302) {
        // Handle redirects
        const redirectUrl = response.headers.location;
        https.get(redirectUrl, (redirectResponse) => {
          const fileStream = fs.createWriteStream(filePath);
          redirectResponse.pipe(fileStream);
          
          fileStream.on('finish', () => {
            fileStream.close();
            console.log(`✓ ${toolName} - Downloaded: ${fileName}`);
            resolve();
          });
        }).on('error', reject);
      } else {
        console.error(`✗ ${toolName} - Failed: HTTP ${response.statusCode}`);
        reject(new Error(`HTTP ${response.statusCode}`));
      }
    }).on('error', (err) => {
      console.error(`✗ ${toolName} - Error: ${err.message}`);
      reject(err);
    });
  });
}

// Download all logos
async function downloadAllLogos() {
  console.log('Starting logo downloads...\n');
  
  const promises = Object.entries(logoMap).map(([toolName, { icon, file }]) =>
    downloadLogo(toolName, icon, file).catch((err) => {
      console.error(`Failed to download ${toolName}:`, err.message);
    })
  );

  await Promise.all(promises);
  
  console.log('\n✓ Logo download process completed!');
  console.log(`Logos saved to: ${logosDir}`);
}

// Run the script
downloadAllLogos().catch(console.error);

