'use strict';
var Sequelize = require('sequelize')
var db = require('../index.js')


module.exports = db.define('student', {
  name: {
  	type: Sequelize.STRING,
  	allowNul: false
  },
  email: {
  	type: Sequelize.STRING,
  	validate: {
  		isEmail: true,
  	}
  }
});
