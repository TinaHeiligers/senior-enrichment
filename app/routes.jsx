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
// import NewCampusContainer from './containers/NewCampusContainer';
//
import StudentsContainer from './containers/StudentsContainer';
import StudentContainer from './containers/StudentContainer';
// import NewStudentContainer from './containers/NewStudentContainer';

import Campuses from './components/Campuses';
import Campus from './components/Campus';
import Students from './components/Students';
import Student from './components/Student';

import {receiveCampuses, getCampusById} from './action-creators/campuses';
import {receiveStudents, getStudentById} from './action-creators/students';
// import Root from './components/Root'

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
				<Route path="/campuses" component={App} onEnter={onAppEnter}>
					<Route path="/campuses" component={CampusesContainer}/>
					<Route path="/campuses/:campusId" component={CampusContainer} onEnter={onCampusEnter}/>
					<Route path="/students" component={StudentsContainer}/>
					<Route path="/students/:studentId" component={StudentContainer} onEnter={onStudentEnter}/>*/}
						<Route path="campus" component={Campus} />
						<Route path="student" component={Student} />
				</Route>
				{/*<Route path="/new-campus" component={NewCampusContainer}/>
				<Route path="/new-student" component={NewStudentContainer}/>*/}
			<IndexRoute to="/campuses"/>
			</Router>
		</Provider>
		)
}
