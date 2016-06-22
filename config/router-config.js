const serviceDocController = require('../server/service-doc-controller');
const healthServicesController = require('../server/health/health-services-controller');

class RouterConfig {

    configure(app) {
        app.use(serviceDocController);
        app.use(healthServicesController);
    }
}

module.exports = RouterConfig;