import { createSelector } from 'reselect';

const getVisibilityFilter  = state => state.visibilityFilter;
const getTodos = state => state.todos;

export const getVisibleTodos  = createSelector(
	[getVisibilityFilter,  getTodos],
	(visibilityFilter, todos) => {
		switch (visibilityFilter) {
			case 'SHOW_ALL':
				return todos;
			case 'SHOW_COMPLETED':
				return todos.filter(t => t.completed);
			case 'SHOW_ACTIVE':
				return todos.filter(t => !t.completed);
		}
	}
);


// selectors can be composed and selector
// can be an input for another selector

const getKeyword = state => state.keyword

const getVisibleTodosFilteredByKeyword = createSelector(
	[getVisibleTodos, getKeyword],
	(visibleTodos, keyword) =>
		visibleTodos.filter(todo => todo.text.indexOf(keyword) > -1)
);