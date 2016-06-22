const express = require('express');
const hal = require('hal');

const router  = express.Router();

router.get('/', (req, res) => {
    const resource = new hal.Resource();
    resource.link('healthServices', '/health-services');
    res.send(resource);
});


module.exports = router;