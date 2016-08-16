const express = require('express');
const UserController = require('./user-controller');

const router = express.Router();

class Router {

    constructor() {
        this.userController = new UserController();
    }

    route(app) {
        router.post('/user', this.userController.handleCreateUser);

        app.use(router);
    }
}

module.exports = Router;

