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
