const express = require('express');
const hal = require('hal');

const router  = express.Router();

router.get('/health-services', (req, res) => {
    res.sendStatus(200);
});

module.exports = router;
