import Campuses from '../components/Campuses';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
	return {
		campuses: ownProps.campuses
	};
};

const CampusesContainer = connect(
	mapStateToProps
	)(Campuses);

export default CampusesContainer;
