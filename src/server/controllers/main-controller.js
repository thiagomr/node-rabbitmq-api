class MainController {
    ping(_, res) {
        return res.status(200).send('pong');
    }
}

module.exports = new MainController();
