import {TEST_REDUCER, INCREMENT_COUNT, DECREMENT_COUNT} from '../actions/type';

const testReducer = (state = {test: true, count: 0}, action) => {
  switch (action.type) {
    case TEST_REDUCER:
      return state;
    case INCREMENT_COUNT:
      // fails coz it mutates the state ?
      // return Object.assign(state, {count: state.count + 1});

      // return Object.assign({}, state, {count: state.count + action.payload});
      return {...state, count: state.count + action.payload};
    case DECREMENT_COUNT:
      // fails coz it mutates the state ?
      // return Object.assign(state, {count: state.count - 1});
      return Object.assign({}, state, {count: state.count - action.payload});
    default:
      return state;
  }
};

export default testReducer;
