import Campus from '../components/Campus';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
	return {
		selectedCampus: state.campuses.selected,
		selectedCampusStudents: state.campuses.currentStudentList
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		removeOne (student) {
			console.log('IN campusContainer, removeOne, about to dispatch removeStudent(student), where student = ', student.id, student.campusId);
			const studentId = student.id
			//passing in the studentId here to the removeStudent method
			dispatch(removeStudent(student.id));//working on this function in campuses action-creators
		}
	}
}

const CampusContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Campus);

export default CampusContainer;
