import axios from 'axios';

//********Constants**********//
export const RECEIVE_CAMPUSES = "RECEIVE_CAMPUSES";
export const RECEIVE_CAMPUS = "RECEIVE_CAMPUS";
// export const RECEIVE_CAMPUS_STUDENTS = "RECEIVE_CAMPUS_STUDENTS";

//******action-creators*******//
//api call for receiveCampuses is onEnter for main app in routes.jsx file
export const receiveCampuses = campuses => ({
	type: RECEIVE_CAMPUSES,
	campuses
});

export const receiveCampus = (campus, students) => ({
	type: RECEIVE_CAMPUS,
	campus,
	students
});

export const getCampusById = campusId => {
	//get campus by id, get students for campus by campusId
	return dispatch => {
		Promise.all([
	        axios.get(`api/campuses/${campusId}`),
	        axios.get(`api/campuses/${campusId}/students`)//now have an api route
        ])
        .then(results => results.map(r => r.data))
		.then(results => {
			console.log(results);
			dispatch(receiveCampus(...results));
		});
	};
};
