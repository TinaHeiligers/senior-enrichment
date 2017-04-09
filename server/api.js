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
// GET -all, GET-single, POST-single, PUT-single, DELETE-single
api.get('/hello', function(req, res, next) {
	User.findAll()
	.then(function(foundUsers) {
		console.log(res);
		res.json(foundUsers);
	})
});

//STUDENT(S)
// GET -all, GET-single, POST-single, PUT-single, DELETE-single

api.get('/students', function(req, res, next) {
	Student.findAll({
		include: [Campus]
	})
	.then(function(foundStudents) {
		res.json(foundStudents)
	})
	.catch(next);
});

//in the following route, the campus instance is returned along with the student data.
api.get('/students/:studentId', function(req, res, next) {
	Student.findById(req.params.studentId)
	.then(function(foundStudent) {
		res.json(foundStudent)
	})
	.catch(next);
})

//general student modification
api.put('/students/:studentId', function(req, res, next) {
	Student.findById(req.params.studentId)
	.then(function(foundStudent) {
		return foundStudent.update(req.body)
	})
	.then(function(updatedStudent) {
		res.json(updatedStudent)
	})
	.catch(next);
})

//POST new student, without a campus assigned
api.post('/students', function(req, res, next) {
	return Student.create(req.body)
	.then(function(createdStudent) {
		res.json(createdStudent)
	})
	.catch(next);
})
//DELETE student
api.delete('/students/:studentId', function(req, res, next) {
	return Student.destroy({where: {
		id: req.params.studentId
	}});
})

//CAMPUS(ES)
// GET -all, GET-single, POST-single, PUT-single, DELETE-single
api.get('/campuses', function(req, res, next) {
	Campus.findAll()
	.then(function(foundCampuses) {
		// console.log(res);
		res.json(foundCampuses);
	})
});

api.get('/campuses/:campusId', function(req, res, next) {
	Campus.findById(req.params.campusId)
	.then(function(foundCampus) {
		res.json(foundCampus)
	})
	.catch(next);
})

//POST NEW
api.post('/campuses', function(req, res, next) {
	return Campus.create(req.body)
	.then(function(createdCampus) {
		res.json(createdCampus)
	})
	.catch(next)
})

//UPDATE
api.put('/campuses/:campusId', function(req, res, next) {
	Campus.findById(req.params.campusId)
	.then(function(foundCampus) {
		return foundCampus.update(req.body)
	}).then(function(updatedCampus) {
		res.json(updatedCampus)
	})
	.catch(next);
})


//DELETE: cascade down to the students with the campus id:
//update students where the campus id is the current campus id and set campus id to null then go delete the campus
api.delete('/campuses/:campusId', function(req, res, next) {
	Student.update({
		campusId: null,
	}, {
		where: {
			campusId: req.params.campusId
		}
	})
	.then(function() {
		return Campus.destroy({
			where: {
				id: req.params.campusId
			}
		})
	})
	.then(res.end())
	.catch(next);
})

//

module.exports = api
