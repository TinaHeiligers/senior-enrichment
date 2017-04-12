import axios from 'axios';
import {hashHistory} from 'react-router';

//********Constants**********//
export const RECEIVE_CAMPUSES = "RECEIVE_CAMPUSES";
export const RECEIVE_CAMPUS = "RECEIVE_CAMPUS";
export const ADD_CAMPUS = "ADD_CAMPUS";

//******action-creators*******//
//api call for receiveCampuses is onEnter for main app in routes.jsx file
export const receiveCampuses = campuses => ({
  type: RECEIVE_CAMPUSES,
  campuses
});

export const receiveCampus = (campus) => ({
  type: RECEIVE_CAMPUS,
  campus
});

export const getCampusById = campusId => {
  return dispatch => {
    axios.get(`api/campuses/${campusId}`)
    .then(res => res.data)
    .then(campus => {
      dispatch(receiveCampus(campus));
    });
  };
};

export const removeStudent = (studentId) => {
  return (dispatch, getState) => {
    // request to remove the campusId from the current student
    return axios.put(`/api/students/${studentId}`, { campusId: null })
      .then(res => res.data)
      .then(student => {
        const selectedCampus = getState().campuses.selected;
        const students = selectedCampus.students;
        const newStudents = students.filter(s => { return s.id != studentId }); // filter out the removed student
        const newSelectedCampus = Object.assign({}, selectedCampus, {
          students: newStudents
        });
        dispatch(receiveCampus(newSelectedCampus));
      })
  };
};

//action creator for adding a campus
//payload, i.e. req.body will have the campus name and the campus image captured from the form
export const addNewCampus = (campusName, campusImage) => {
  return (dispatch, getState) => {
    //async call to post a new campus
    return axios.post(`/api/campuses`, { name: campusName, image: campusImage })
      .then(res => res.data)
      .then(newCampus => {
        //create a new camus list by concatenating the old one with the newly added campus
        const newListOfCampuses = getState().campuses.list.concat([newCampus]);
        //now dispatch receiving the campuses
        dispatch(receiveCampuses(newListOfCampuses));
        //rerender the list of campuses
        hashHistory.push(`/campuses/${newCampus.id}`);
      });
  };
};

export const addStudentToCampus = (studentId) => {
  return (dispatch, getState) => {
    const selectedCampus = getState().campuses.selected;
    // request to remove the campusId from the current student
    return axios.put(`/api/students/${studentId}`, { campusId: selectedCampus.id })
      .then(res => res.data)
      .then(student => {
        const students = selectedCampus.students;
        const newStudents = students.concat(student); // add the new student
        const newSelectedCampus = Object.assign({}, selectedCampus, {
          students: newStudents
        });
        dispatch(receiveCampus(newSelectedCampus));
        hashHistory.push(`/campuses/${selectedCampus.id}`);
      })
  };
}

export const deleteCampus = (campusId) => {
  return (dispatch, getState) => {
    // request to remove the campusId from the current student
    return axios.delete(`/api/campuses/${campusId}`)
      .then((_res) => {
        console.log("IN DELETE CAMPUS ACTION-CREATOR", _res);
        const campuses = getState().campuses.list;
        console.log("campuses: ", campuses);
        const newCampuses = campuses.filter(c => { return c.id != campusId }); // filter out the removed student
        dispatch(receiveCampuses(newCampuses));
        hashHistory.push(`/campuses`);
      })
  };

}
// action creator for editing a campus
//payload, i.e. req.body will have the campus name and the campus image captured from the form

