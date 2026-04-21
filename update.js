const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');
const files = fs.readdirSync(srcDir).filter(f => f.endsWith('.html') && f !== 'landing.html');

for (const file of files) {
    const fullPath = path.join(srcDir, file);
    let content = fs.readFileSync(fullPath, 'utf8');

    // Add id, change placeholder, and add the p tag
    if (!content.includes('id="mensaje"')) {
        content = content.replace(
            /<input type="email"[^>]*>/,
            `<input type="email" placeholder="e-mail" id="e-mail">\n                    <p id="mensaje" style="display: none; font-weight: bold;"></p>`
        );
    }

    // Add script tag before </body>
    if (!content.includes('<script src="../js/landing.js"></script>')) {
        content = content.replace(
            /<\/body>/,
            `    <script src="../js/landing.js"></script>\n</body>`
        );
    }

    fs.writeFileSync(fullPath, content, 'utf8');
    console.log("Updated", file);
}
