import axios from 'axios';
import {hashHistory} from 'react-router';

//********Constants**********//
export const RECEIVE_CAMPUSES = 'RECEIVE_CAMPUSES';
export const RECEIVE_CAMPUS = 'RECEIVE_CAMPUS';
export const ADD_CAMPUS = 'ADD_CAMPUS';

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
      .then(() => {
        const selectedCampus = getState().campuses.selected;
        const students = selectedCampus.students;

        // filter out the removed student
        const newStudents = students.filter(st => { return st.id !== studentId; });
        const newSelectedCampus = Object.assign({}, selectedCampus, {
          students: newStudents
        });
        dispatch(receiveCampus(newSelectedCampus));
      });
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

// dispatch(editCampus(campus.name, campus.image))
export const editCampus = (campusName, campusImage) => {
  return (dispatch, getState) => {
    const selectedCampus = getState().campuses.selected;
    return axios.put(`/api/campuses/${selectedCampus.id}`, { name: campusName, image: campusImage })
      .then(res => res.data)
      .then(campus => {
        //create a new campus list by replacing the old one with the edited campus
        const campuses = getState().campuses.list;
        const newListOfCampuses = campuses.map(cp => { return cp.id === campus.id ? campus : cp; });
        //now dispatch receiving the campuses
        dispatch(receiveCampuses(newListOfCampuses));
        //rerender the list of campuses
        hashHistory.push(`/campuses/${campus.id}`);
      });
  };
};

export const addStudentToCampus = (studentId) => {
  return (dispatch, getState) => {
    const selectedCampus = getState().campuses.selected;
    // request to add the campusId from the current student
    return axios.put(`/api/students/${studentId}`, { campusId: selectedCampus.id })
      .then(res => res.data)
      .then(student => {
        const students = selectedCampus.students;
        // add the new student
        const newStudents = students.concat(student);
        const newSelectedCampus = Object.assign({}, selectedCampus, {
          students: newStudents
        });
        dispatch(receiveCampus(newSelectedCampus));
        hashHistory.push(`/campuses/${selectedCampus.id}`);
      });
  };
};

export const deleteCampus = (campusId) => {
  return (dispatch, getState) => {
    // request to remove the campusId from the current student
    return axios.delete(`/api/campuses/${campusId}`)
      .then(() => {
        const campuses = getState().campuses.list;
        // filter out the deleted campus
        const newCampuses = campuses.filter(cp => { return cp.id !== campusId; });
        dispatch(receiveCampuses(newCampuses));
        hashHistory.push(`/campuses`);
      });
  };
};

