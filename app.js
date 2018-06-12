'use strict';

const bodyParser = require('body-parser');
const config = require('./config/config');
const express = require('express');
const app = new express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// define routes
require('./routes/usersRoutes')(app);
require('./routes/versionRoutes')(app, config);

// another way to define routes
app.use('/products', require('./routes/productsRoutes'));

app.listen(3000, () => {
    /* eslint-disable */
    console.log('Server is up!');
});
