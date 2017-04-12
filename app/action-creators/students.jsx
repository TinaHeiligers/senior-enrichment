import axios from 'axios';
import {hashHistory} from 'react-router';

//********Constants**********//
export const RECEIVE_STUDENTS = 'RECEIVE_STUDENTS';
export const RECEIVE_STUDENT = 'RECEIVE_STUDENT';
export const ADD_STUDENT = 'ADD_STUDENT';

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
export const addNewStudent = (studentFirstName, studentLastName, studentEmail, studentCampus) => {
  return (dispatch, getState) => {
    //async call to post a new student
    return axios.post(`/api/students`, { firstName: studentFirstName, lastName: studentLastName, email: studentEmail, campusId: studentCampus })
      .then(res => res.data)
      .then(newStudent => {
        //create a new student list by concatenating the old one with the newly added student
        const newListOfStudents = getState().students.list.concat([newStudent]);
        //now dispatch receiving the students
        dispatch(receiveStudents(newListOfStudents));
        dispatch(receiveStudent(newStudent));
        //rerender the list of students
        hashHistory.push(`/students/${newStudent.id}`);
      });
  };
};

export const deleteStudent = (studentId) => {
  return (dispatch, getState) => {
    // request to remove the campusId from the current student
    return axios.delete(`/api/students/${studentId}`)
      .then(() => {
        const students = getState().students.list;
        // filter out the deleted student
        const newStudents = students.filter(st => { return st.id !== studentId; });
        dispatch(receiveStudents(newStudents));
        hashHistory.push(`/students`);
      });
  };
};

//action creator for updating a student
export const editStudent = (studentFirstName, studentLastName, studentEmail, studentCampus) => {
  return (dispatch, getState) => {
    //get the current student's id
    const selectedstudent = getState().students.selected;
    return axios.put(`/api/students/${selectedstudent.id}`, { firstName: studentFirstName, lastName: studentLastName, email: studentEmail, campusId: studentCampus })
      .then(res => res.data)
      .then(student => {
        //create a new student list by replacing the old one with the edited student
        const students = getState().students.list;
        const newListOfstudents = students.map((st) => { return st.id === student.id ? student : st; });
        //now dispatch receiving the studentes
        dispatch(receiveStudents(newListOfstudents));
        //rerender the list of studentes
        hashHistory.push(`/students/${student.id}`);
      });
  };
};
