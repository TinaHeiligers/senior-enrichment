import {
	RECEIVE_CAMPUSES,
	RECEIVE_CAMPUS,
	RECEIVE_CAMPUS_STUDENTS
} from '../action-creators/campuses';

const initialCampusesState = {
	selected: {},
	list: [],
	currentStudentList: []
};

export default function (state = initialCampusesState, action) {
	const newState = Object.assign({}, state);

	switch (action.type) {

		case RECEIVE_CAMPUSES:
			newState.list = action.campuses;
			break;

		case RECEIVE_CAMPUS:
			newState.currentStudentList = action.students;
			newState.selected = action.campus;
			break;

		default:
			return state;
	}
	 return newState;
}
