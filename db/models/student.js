'use strict';
var Sequelize = require('sequelize')
var db = require('../index.js')


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
  }, {
    hooks: {
      beforeValidate: function(student) {
        student.fullName = (student.firstName && student.lastName) ?
            (student.firstName).concat(' ').concat(student.lastName) :
            student.lastName;
          }
    }
  }
  defaultScope: {
    include: [{model: Campus, as: 'campus'}]
  }
});
