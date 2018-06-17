'use strict';

const configger = require('../utils/configger.js');

const getVersionRoutes = (app) => {
    app.get('/api/version', (req, res) => {
        res.send(configger.get('version'));
    });
};

module.exports = getVersionRoutes;
