import { combineReducers } from 'redux';
import stories from './storyReducer';

const rootReducer = combineReducers({
  stories,
});

export default rootReducer;
