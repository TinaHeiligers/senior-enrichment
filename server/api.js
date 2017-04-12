'use strict';

const api = require('express').Router();
const studentsRouter = require('./routers/students');
const campusRouter = require('./routers/campuses');

api.use('/students', studentsRouter);
api.use('/campuses', campusRouter);

module.exports = api;
