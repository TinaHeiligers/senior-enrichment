'use strict';
var Sequelize = require('sequelize')
var db = require('../index.js')


module.exports = db.define('campus', {
  name: {
  	type: Sequelize.STRING,
  	allowNul: false
  },
  image: {
  	type: Sequelize.STRING
  }
}, {
  scopes: {
    populated: () => ({ // function form lets us refer to undefined models
      include: [{
        model: db.model('student')
      }]
    })
  }
});

