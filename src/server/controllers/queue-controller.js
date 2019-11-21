const logger = require('../../lib/logger');
const rabbitmq = require('../../lib/rabbitmq');

class QueueController {
    async assert(req, res) {
        try {
            if (!req.body.queue) {
                return res.status(400).send('missing param [queue]');
            }

            await rabbitmq.assertQueue(req.body.queue);

            return res.status(200).send('ok');
        } catch (e) {
            logger.error(e);
            return res.status(500).send('error');
        }
    }
}

module.exports = new QueueController();
