// WRITE ACTIOn CREATORS
// USE them, since they decouple the logic
// and allow for easy changes when under heavy development


export function addTodoOld(text) {
	return {
		type: 'ADD_TODO',
		text
	};
}

function addTodoWithoutCheck(text) {
	return {
		type: 'ADD_TODO',
		text
	};
}

export function addTodo(text) {
	// This form is allowed by Redux Thunk middleware
	// described below in “Async Action Creators” section.
	return function(dispatch, getState) {
		if (getState().todos.length === 3) {
			// Exit early
			return;
		}
		dispatch(addTodoWithoutCheck(text));
	}
}