require('dotenv').config();

const rabbitmq = require('./src/lib/rabbitmq');
const server = require('./src/server/server');
const logger = require('./src/lib/logger');

(async () => {
    try {
        await rabbitmq.connect();
        server.listen();
    } catch (e) {
        logger.error(e);
        process.exit(1);
    }
})();
