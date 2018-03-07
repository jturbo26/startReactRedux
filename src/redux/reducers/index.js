import { combineReducers } from 'redux';
import firstReducer from './firstReducer';
import inputs from './inputs';

const rootReducer = combineReducers({
  firstReducer,
  inputs
});

export default rootReducer;
