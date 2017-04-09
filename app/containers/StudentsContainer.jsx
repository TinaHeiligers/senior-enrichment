import { connect } from 'react-redux';
import Students from '../components/Students';

const mapStateToProps = (state) => {
	return {
		students: state.students.list
	};
};

const StudentsContainer = connect(
      mapStateToProps
      )(Students);

export default StudentsContainer;
