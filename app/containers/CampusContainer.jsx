import Campus from '../components/Campus';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
	return {
		selectedCampus: state.campuses.selected,
		selectedCampusStudents: state.campuses.currentStudentList
	};
};

const CampusContainer = connect(mapStateToProps)(Campus);

export default CampusContainer;
