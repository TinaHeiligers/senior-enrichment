import {
  RECEIVE_CAMPUSES,
  RECEIVE_CAMPUS,
} from '../action-creators/campuses';

const initialCampusesState = {
  selected: {},
  list: []
};

export default function (state = initialCampusesState, action) {
  const newState = Object.assign({}, state);

  switch (action.type) {

    case RECEIVE_CAMPUSES:
      newState.list = action.campuses;
      break;

    case RECEIVE_CAMPUS:
      console.log('--------->', action)
      newState.selected = action.campus;
      break;

    default:
      return state;
  }
  return newState;
}
