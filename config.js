const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID,
ALIVE_IMG : process.env.ALIVE_IMG || "https://postimg.cc/hhNnXtQ0",
ALIVE_MSG : process.env.ALIVE_MSG || "*🤖Hey, I am ANUWH MD WhatsApp bot⚡*\n\n*🔔I AM ALIVE NOW MY USER",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
};
