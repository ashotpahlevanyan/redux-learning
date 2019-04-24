import { createSelector } from 'reselect'

const getVisibilityFilter = (state, props) =>
	state.todoLists[props.listId].visibilityFilter;

const getTodos = (state, props) => state.todoLists[props.listId].todos;

const makeGetVisibleTodos = () => {
	return createSelector(
		[getVisibilityFilter, getTodos],
		(visibilityFilter, todos) => {
			switch (visibilityFilter) {
				case 'SHOW_COMPLETED':
					return todos.filter(todo => todo.completed);
				case 'SHOW_ACTIVE':
					return todos.filter(todo => !todo.completed);
				default:
					return todos;
			}
		}
	);
};

export default makeGetVisibleTodos;