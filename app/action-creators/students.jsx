import axios from 'axios';

//********Constants**********//
export const RECEIVE_STUDENTS = "RECEIVE_STUDENTS";
export const RECEIVE_STUDENT = "RECEIVE_STUDENT";

//******action-creators*******//
export const receiveStudents = students => ({
	type: RECEIVE_STUDENTS,
	students
});

export const receiveStudent = (student) => ({
	type: RECEIVE_STUDENT,
	student
});

//when I get a student by Id I recieve info about the campus the student belongs to
export const getStudentById = studentId => {
	return dispatch => {
		axios.get(`api/students/${studentId}`)
		.then(response => {
			dispatch(receiveStudent(response.data));
		});
	};
};

//results from api call:
//{
//   "route": "/api/students/dorthalittel",
//   "id": 121,
//   "firstName": "Dortha",
//   "lastName": "Littel",
//   "fullName": "dorthalittel",
//   "email": "Dortha_Littel@hotmail.com",
//   "createdAt": "2017-04-09T00:42:02.749Z",
//   "updatedAt": "2017-04-09T00:42:02.792Z",
//   "campusId": 147,
//   "campus": {
//     "id": 147,
//     "name": "Skokulea",
//     "image": "http://lorempixel.com/500/500/city/7",
//     "createdAt": "2017-04-09T00:42:02.682Z",
//     "updatedAt": "2017-04-09T00:42:02.682Z"
//   }
// }
