import { connect } from 'react-redux';
import Students from '../components/Students';

const mapStateToProps = (state, ownProps) => {
	return {
		students: ownProps.students
	};
};

const StudentsContainer = connect(
      mapStateToProps
      )(Students);

export default StudentsContainer;
