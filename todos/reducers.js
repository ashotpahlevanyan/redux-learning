import {
	ADD_TODO,
	TOGGLE_TODO,
	VisibilityFilters,
	SET_VISIBILITY_FILTER
} from './actions';

const initialState = {
	visibilityFilter: VisibilityFilters.SHOW_ALL,
	todos: []
};

function todos(state = [], action) {
	switch(action.type) {
		case ADD_TODO:
			return Object.assign({}, state, {
				todos: [
					...state.todos,
					{
						text: action.text,
						completed: false
					}
				]
			});

		case TOGGLE_TODO:
			return Object.assign({}, state, {
				todos: state.todos.map((todo, index) => {
					if(index === action.index) {
						return Object.assign({}, todo, {
							completed: !todo.completed
						});
					}

					return todo;
				})
			});

		default:
			return state;
	}
}

function todoApp(state = initialState, action) {
	switch(action.type) {
		case SET_VISIBILITY_FILTER:
			return Object.assign({}, state, {
				visibilityFilter: action.filter
			});

		case ADD_TODO:
			return Object.assign({}, state, {
				todos: todos(state.todos, action)
			});

		case TOGGLE_TODO:
			return Object.assign({}, state, {
				todos: todos(state.todos, action)
			});

		default:
			return state;
	}
}