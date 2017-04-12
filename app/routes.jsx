'use strict'
import React from 'react';
import PropTypes from 'prop-types';
import {Router, Route, hashHistory, IndexRedirect, IndexRoute} from 'react-router';
import { Provider } from 'react-redux';
import axios from 'axios';
import store from './store';

import App from './components/App'

import CampusesContainer from './containers/CampusesContainer';
import CampusContainer from './containers/CampusContainer';
import NewCampusContainer from './containers/NewCampusContainer';
import EditCampusContainer from './containers/EditCampusContainer';
import CampusStudentAddContainer from './containers/CampusStudentAddContainer';

import StudentsContainer from './containers/StudentsContainer';
import StudentContainer from './containers/StudentContainer';
import NewStudentContainer from './containers/NewStudentContainer';
import EditStudentContainer from './containers/EditStudentContainer';

// import Campuses from './components/Campuses';
// import Campus from './components/Campus';
// import CampusForm from './components/CampusForm';
// import CampusAddStudent from './components/CampusAddStudent';

// import Students from './components/Students';
// import Student from './components/Student';
// import StudentForm from './components/StudentForm';

import {receiveCampuses, getCampusById} from './action-creators/campuses';
import {receiveStudents, getStudentById} from './action-creators/students';

const onAppEnter = () => {
  const pCampuses = axios.get('/api/campuses');//get all campuses
  const pStudents = axios.get('/api/students');//get all students

  return Promise
  .all([pCampuses, pStudents])
    .then(responses => responses.map(r => r.data))
    .then(([campuses, students]) => {
      store.dispatch(receiveCampuses(campuses));
      store.dispatch(receiveStudents(students));
    });
};

const onCampusEnter = function(nextRouterState) {
  const campusId = nextRouterState.params.campusId;
  store.dispatch(getCampusById(campusId));
};
const onStudentEnter = function(nextRouterState) {
  const studentId = nextRouterState.params.studentId;
  store.dispatch(getStudentById(studentId));
};


export default function Root () {
  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App} onEnter={onAppEnter}>
          <Route path="/campuses" component={CampusesContainer} />
          <Route path="/campuses/:campusId" component={CampusContainer} onEnter={onCampusEnter}/>
          <Route path="/campuses/:campusId/students/add" component={CampusStudentAddContainer}/>
          <Route path="/students" component={StudentsContainer} />
          <Route path="/students/:studentId" component={StudentContainer} onEnter={onStudentEnter} />
            <Route path="/campuses/:campusId/edit" component={EditCampusContainer} />
            <Route path="/students/:studentId/edit" component={EditStudentContainer} />
          <IndexRedirect to="/campuses"/>
        </Route>
        <Route path="/new-campus" component={NewCampusContainer} />
        <Route path="/new-student" component={NewStudentContainer} />
      </Router>
    </Provider>
    )
}
