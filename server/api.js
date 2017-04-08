'use strict'
const api = require('express').Router()
const db = require('../db')
const User = require('../db/models').User;
const Campus = require('../db/models').Campus;
const Student = require('../db/models').Student;

// If you aren't getting to this object, but rather the index.html (something with a joke) your path is wrong.
	// I know this because we automatically send index.html for all requests that don't make sense in our backend.
	// Ideally you would have something to handle this, so if you have time try that out!
// api.get('/hello', (req, res) => res.send({hello: 'world'}))
api.get('/hello', function(req, res, next) {
	User.findAll()
	.then(function(foundUsers) {
		console.log(res);
		res.json(foundUsers);
	})
});

api.get('/campuses', function(req, res, next) {
	Campus.findAll()
	.then(function(foundCampuses) {
		console.log(res);
		res.json(foundCampuses);
	})
});

api.get('/students', function(req, res, next) {
	Student.findAll()
	.then(function(foundStudents) {
		console.log(res);
		res.json(foundStudents);
	})
});

module.exports = api
