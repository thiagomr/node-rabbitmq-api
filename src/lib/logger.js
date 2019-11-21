const moment = require('moment-timezone');

class Logger {
    log(...msg) {
        console.log(`[LOG][${moment().format()}] -`, ...msg);
    }

    error(...msg) {
        console.log(`[ERROR][${moment().format()}] -`, ...msg);
    }
}

module.exports = new Logger();
