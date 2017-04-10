import axios from 'axios';

//********Constants**********//
export const RECEIVE_CAMPUSES = "RECEIVE_CAMPUSES";
export const RECEIVE_CAMPUS = "RECEIVE_CAMPUS";

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

export const removeOne = (studentId, campus) => {
	return dispatch => {
		//need a put request to remove the campusId from the current student
		//I assume I pass in the reqeust body to the put request along with the studentId
		return axios.put(`/api/students/${studentId}`, {campusId: null})
		console.log('*********IN REMOVESTUDENT ACTION-CREATOR*******')
		.then(res => res.data)//if I get anything back, which I don't think I do
		.then(response => {
			//now get a new updated list of students for the campus
			const newListOfStudents = getState().students;
			dispatch(receiveCampus(campus, newListOfStudents))
		});
		// .then(list => {

		};
	// };
};
