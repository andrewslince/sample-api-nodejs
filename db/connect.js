'use strict';

const Sequelize = require('sequelize');
const configger = require('../utils/configger.js');
const dbUri = configger.get('db.dialect')
  + '://' + configger.get('DB_USER')
  + ':' + configger.get('DB_PASS')
  + '@' + configger.get('DB_HOST')
  + '/' + configger.get('DB_NAME');

module.exports = new Sequelize(dbUri, configger.get('db'));
