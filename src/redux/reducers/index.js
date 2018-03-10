import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import firstReducer from './firstReducer';
import inputs from './inputs';

const rootReducer = combineReducers({
  router,
  firstReducer,
  inputs
});

export default rootReducer;
