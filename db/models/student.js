'use strict';
var Sequelize = require('sequelize')
var db = require('../index.js')
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
  fullname: {
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
    //why do I have this here again?
    route: function() {
      return '/student' + this.fullName;
    }
  },
  classMethods: {
    //need a method to return all students from the same campus:
    findByCampus: function(campus) {
      return this.findAll({
        where: {
          campusId: this.campusId//the campusId's match
        }
      });
    }
  },
    hooks: {
      //create a full name from the first name and last name without a space all to lower case
      beforeValidate: function(student) {
        student.fullName = (student.firstName && student.lastName) ?
            (student.firstName.toLowerCase()).concat('').concat(student.lastName.toLowerCase()) :
            student.lastName.toLowerCase();
          }
    },
  defaultScope: {
    include: [{model: Campus, as: 'campus'}]
  }
});
