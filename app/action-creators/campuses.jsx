import axios from 'axios';

//********Constants**********//
const RECEIVE_CAMPUSES = "RECEIVE_CAMPUSES";
const RECEIVE_CAMPUS = "RECEIVE_CAMPUS";

//******action-creators*******//
export const receiveCampuses = campuses => ({
	type: RECEIVE_CAMPUSES,
	campuses
});

export const receiveCampus = campus => ({
	type: RECEIVE_CAMPUS,
	campus
});

export const getCampusById = campusId => {
	return dispatch => {
		axios.get(`api/campuses/${campusId}`)
		.then(response => {
			dispatch(receiveCampus(response.data));
		});
	};
};
