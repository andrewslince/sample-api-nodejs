'use strict';

const Sequelize = require('sequelize');
const db = require('../connect');

const tableName = 'user';

const tableFields = {
  id: {
    type: Sequelize.INTEGER(10).UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    field: tableName + '_id'
  },
  name: {
    type: Sequelize.STRING(50),
    allowNull: false
  },
  email: {
    type: Sequelize.STRING(30),
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    },
    set(data) {
      this.setDataValue('email', data.toLowerCase());
    }
  },
  gender: {
    type: Sequelize.ENUM('male', 'female'),
    allowNull: false
  }
};

const options = {};

module.exports = db.define(tableName, tableFields, options);
