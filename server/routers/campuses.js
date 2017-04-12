'use strict';

const router = require('express').Router();
const Campus = require('../../db/models').Campus;
const Student = require('../../db/models').Student;

//CAMPUS(ES)
// GET -all, GET-single, POST-single, PUT-single, DELETE-single
router.get('/', function(req, res, next) {
  Campus.findAll()
  .then(function(foundCampuses) {
    res.json(foundCampuses);
  });
});

router.get('/:campusId', function(req, res, next) {
  Campus.scope('populated').findById(req.params.campusId)
  .then(function(foundCampus) {
    res.json(foundCampus);
  })
  .catch(next);
});

//POST NEW
router.post('/', function(req, res, next) {
  return Campus.create(req.body)
  .then(function(createdCampus) {
    res.json(createdCampus);
  })
  .catch(next);
});

//UPDATE
router.put('/:campusId', function(req, res, next) {
  Campus.findById(req.params.campusId)
  .then(function(foundCampus) {
    return foundCampus.update(req.body);
  }).then(function(updatedCampus) {
    res.json(updatedCampus);
  })
  .catch(next);
});

//DELETE: cascade down to the students with the campus id:
//update students where the campus id is the current campus id and set campus id to null then go delete the campus
router.delete('/:campusId', function(req, res, next) {
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
    });
  })
  .then(res.end())
  .catch(next);
});

module.exports = router;
