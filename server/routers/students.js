'use strict';

//router for students

const router = require('express').Router();
const Campus = require('../../db/models').Campus;
const Student = require('../../db/models').Student;

//STUDENT(S)
// GET -all, GET-single, POST-single, PUT-single, DELETE-single

router.get('/', function(req, res, next) {
  Student.findAll({
    include: [Campus]
  })
  .then(function(foundStudents) {
    res.json(foundStudents);
  })
  .catch(next);
});

router.param('studentId', (req, res, next, id) => {
  Student.findById(id)
  .then(student => {
    if (!student) {
      const err = Error('Student not found');
      err.status = 404;
      throw err;
    }
    req.student = student;
    next();
    return null; // silences bluebird warning about promises inside of next
  })
  .catch(next);
});

//in the following route, the campus instance is returned along with the student data.
router.get('/:studentId', function(req, res, next) {
  res.json(req.student);
});

//general student modification
router.put('/:studentId', function(req, res, next) {
  req.student.update(req.body)
  .then(function(updatedStudent) {
    res.json(updatedStudent);
  })
  .catch(next);
});

//POST new student, without a campus assigned
router.post('/', function(req, res, next) {
  return Student.create(req.body)
  .then(function(createdStudent) {
    res.json(createdStudent);
  })
  .catch(next);
});

//DELETE student
router.delete('/:studentId', function(req, res, next) {
  return Student.destroy({where: {
    id: req.params.studentId
  }})
  .then(() => res.sendStatus(200))
  .catch(next);
});

module.exports = router;
