'use strict';

// load dotenv configurations
require('dotenv').config();

const configger = require('nconf');
const path = require('path');
const configFile = path.resolve(__dirname + path.sep + '..')
  + path.sep + 'config'
  + path.sep + 'general.json';

/**
 * Setup nconf to use (in-order):
 *   1. Command-line arguments
 *   2. Environment variables
 *   3. A file located at 'path/to/config.json'
 */
configger
  .argv()
  .env()
  .file({
    file: configFile,
    logicalSeparator: '.'
  });

module.exports = configger;