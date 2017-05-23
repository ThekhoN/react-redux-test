import {combineReducers} from 'redux';
import testReducer from './testReducer';
import quotes from './quotes';

const rootReducer = combineReducers({
  testReducer,
  quotes
});

export default rootReducer;
