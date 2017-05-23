import {createStore, compose, applyMiddleware} from 'redux';
import rootReducer from '../reducer';
import ReduxThunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(rootReducer, composeEnhancers());
const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default store;
