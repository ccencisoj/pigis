import { combineReducers } from "redux";
import commonReducer from './reducers/common';
import progressReducer from './reducers/progress';
import collectionsReducer from './reducers/collections';

export default combineReducers({
  common: commonReducer,
  collections: collectionsReducer,
  progress: progressReducer
});