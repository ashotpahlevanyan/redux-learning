/*
 * action types
 */

export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

/*
 * other constants
 */

export const VisibilityFilters = {
	SHOW_ALL: 'SHOW_ALL',
	SHOW_COMPLETED: 'SHOW_COMPLETED',
	SHOW_ACTIVE: 'SHOW_ACTIVE'
};

/*
 * action creators
 */

let nextTodoId = 0;

export const addTodo = (text, listId) => {
	return {
		type: ADD_TODO,
		id: nextTodoId ++,
		text,
		listId
	}
};

export const toggleTodo = (id, listId) => {
	return {
		type: TOGGLE_TODO,
		id,
		listId
	}
};

export const setVisibilityFilter = (filter, listId) => {
	return {
		type: SET_VISIBILITY_FILTER,
		filter,
		listId
	}
};