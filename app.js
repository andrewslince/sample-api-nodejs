'use strict';

const bodyParser = require('body-parser');
const config = require('./config/config');
const express = require('express');
const app = new express();

const User = require('./db/schemas/user');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// define routes
require('./routes/usersRoutes')(app);
require('./routes/versionRoutes')(app, config);

app.get('/db', (req, res) => {
    User

      // force: true will drop the table if it already exists
      .sync({ force: false })

      // create row
      .then(() => {
        // table created
        return User.create({
          name: 'Andrews Lince',
          email: 'ANDREWS.LINCE@GMAIL.COM',
          gender: 'male'
        });
      })

      //
      .then(user => {
        res.send('User "' + user.get('name') + '" was created successfully');
      })

      // handle errors
      .catch(err => {
        res.send('Failed to create user:' + err);
      });
});

// another way to define routes
app.use('/products', require('./routes/productsRoutes'));

app.listen(3000, () => {
    /* eslint-disable */
    console.log('Server is up!');
});
