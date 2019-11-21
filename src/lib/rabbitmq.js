const amqplib = require('amqplib');
const logger = require('./logger');

class RabbitMq {
    constructor() {
        this.connection = false;
        this.channels = {};
    }

    async connect() {
        try {
            this.connection = await amqplib.connect(`amqp://${process.env.RABBITMQ_URL}`);
            logger.log(`rabbitmq connected at ${process.env.RABBITMQ_URL}`);
        } catch (e) {
            throw e;
        }
    }

    createChannel() {
        try {
            return this.connection.createChannel();
        } catch (e) {
            throw e;
        }
    }

    async assertQueue(queueId) {
        try {
            if (this.channels[queueId]) {
                return;
            }

            this.channels[queueId] = await this.createChannel();
            this.channels[queueId].assertQueue(queueId);
            logger.log('assert queue', queueId);
        } catch (e) {
            throw e;
        }
    }

    sendMessage(queueId, message) {
        try {
            this.channels[queueId].sendToQueue(queueId, Buffer.from(message));
        } catch (e) {
            throw e;
        }
    }
}

module.exports = new RabbitMq();
