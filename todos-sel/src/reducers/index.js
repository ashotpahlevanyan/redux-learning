import { combineReducers } from 'redux';
import todoLists from './todoLists';
import visibilityFilter from './visibilityFilter';

export default combineReducers({
	todoLists,
	visibilityFilter
});