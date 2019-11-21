const mainController = require('./controllers/main-controller');
const queueController = require('./controllers/queue-controller');

class Router {
    constructor(app) {
        app.get('/ping', mainController.ping);

        app.post('/queue/assert', queueController.assert);
    }
}

module.exports = Router;
