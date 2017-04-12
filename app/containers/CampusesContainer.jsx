import Campuses from '../components/Campuses';
import { connect } from 'react-redux';
import { deleteCampus } from '../action-creators/campuses';

const mapStateToProps = (state) => {
  return {
    campuses: state.campuses.list
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteOne (campusId) {
      dispatch(deleteCampus(campusId));//dispatching the action to delete a campus
    }
  };
};

const CampusesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Campuses);

export default CampusesContainer;
