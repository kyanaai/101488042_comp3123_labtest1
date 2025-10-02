'use strict';

const fs = require('fs');
const path = require('path');

const logsDir = path.join(__dirname, 'Logs');

// Remove all files if directory exists
if (fs.existsSync(logsDir)) {
    const files = fs.readdirSync(logsDir);

    files.forEach(file => {
        console.log(`delete files...${file}`);
        fs.unlinkSync(path.join(logsDir, file));
    });

    fs.rmdirSync(logsDir);
} else {
    console.log('Logs directory not found');
}