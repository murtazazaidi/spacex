import { combineReducers } from 'redux';
import launchReducer from 'store/reducers/launchReducer';

const rootReducer = combineReducers({
  launch: launchReducer,
});

export default rootReducer;
