import axios from 'axios';
import {hashHistory} from 'react-router';

//********Constants**********//
export const RECEIVE_STUDENTS = "RECEIVE_STUDENTS";
export const RECEIVE_STUDENT = "RECEIVE_STUDENT";
export const ADD_STUDENT = "ADD_STUDENT";

//******action-creators*******//
export const receiveStudents = students => ({
	type: RECEIVE_STUDENTS,
	students
});

export const receiveStudent = (student) => ({
	type: RECEIVE_STUDENT,
	student
});

//when I get a student by Id I receive info about the campus the student belongs to
export const getStudentById = studentId => {
	return dispatch => {
		axios.get(`api/students/${studentId}`)
		.then(response => {
			dispatch(receiveStudent(response.data));
		});
	};
};

//action creator for adding a student
//payload, i.e. req.body will have the student first name, last name and email captured from the form, the hook on the model should update the student's fullname
//TODO: update hook to remove all spaces and concatenate first and last name
export const addNewStudent = (studentFirstName, studentLastName, studentEmail) => {
  return (dispatch, getState) => {
    //async call to post a new student
    return axios.post(`/api/students`, { firstName: studentFirstName, lastName: studentLastName, email: studentEmail })
      .then(res => res.data)
      .then(newStudent => {
        //create a new student list by concatenating the old one with the newly added student
        const newListOfStudents = getState().students.list.concat([newStudent]);
        //now dispatch receiving the students
        dispatch(receiveStudents(newListOfStudents));
        //rerender the list of students
        hashHistory.push(`/students/${newStudent.id}`);
      });
  };
};
