const serviceDocController = require('../server/service-doc-controller');
const dentistController = require('../server/services/dentist/dentist-controller');

class RouterConfig {

    configure(app) {
        app.use(serviceDocController);
        app.use(dentistController);
    }
}

module.exports = RouterConfig;