const Router = require('./router');
const logger = require('../lib/logger');
const express = require('express');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT || 3000;
        this.middlewares();
        this.router = new Router(this.app);
    }

    middlewares() {
        this.app.use(express.json());
    }

    listen() {
        this.app.listen(this.port, () => logger.log(`server listen at port ${this.port}`));
    }
}

module.exports = new Server();
