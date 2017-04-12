'use strict';
var Sequelize = require('sequelize');
var db = require('../index.js');
var Campus = require('./campus');

module.exports = db.define('student', {
  firstName: {
    type: Sequelize.STRING,
    allowNul: false
  },
  lastName: {
    type: Sequelize.STRING,
    allowNul: false
  },
  fullName: {
    type: Sequelize.STRING,
    allowNul: false
  },
  email: {
    type: Sequelize.STRING,
    validate: {
      isEmail: true,
    }
  },
}, {
  getterMethods: {
    route: function() {
      return '/api/students/' + this.fullName;
    }
  },
  classMethods: {
    //need a method to return all students from the same campus: not working, wrote the route itself
    findByCampus: function(campusId) {
      return this.findAll({
        where: {
          campusId: campusId //the campusId's match
        }
      });
    }
  },
  hooks: {
    //create a full name from the first name and last name without a space all to lower case
    beforeValidate: function(student) {
      student.fullName = (student.firstName && student.lastName) ?
          (student.firstName.toLowerCase()).concat('').concat(student.lastName.toLowerCase()) :
          'noname';
    }
  },
  defaultScope: {
    include: [{model: Campus, as: 'campus'}]
  }
});
