// Reusable utility functions

function updateObject(oldObject, newValues) {
	// Encapsulate the idea of passing a new object as the first parameter
	// to Object.assign to ensure we correctly copy data instead of mutating
	return Object.assign({}, oldObject, newValues);
}

function updateItemInArray(array, itemId, updateItemCallback) {
	const updatedItems = array.map(item => {
		if (item.id !== itemId) {
			// Since we only want to update one item, preserve all others as they are now
			return item;
		}

		// Use the provided callback to create an updated item
		const updatedItem = updateItemCallback(item);
		return updatedItem;
	});

	return updatedItems;
}

function createReducer(initialState, handlers) {
	return function reducer(state = initialState, action) {
		if (handlers.hasOwnProperty(action.type)) {
			return handlers[action.type](state, action);
		} else {
			return state;
		}
	}
}

// Handler for a specific case ("case reducer")
function setVisibilityFilter(visibilityState, action) {
	// Technically, we don't even care about the previous state
	return action.filter;
}

// Handler for an entire slice of state ("slice reducer")
const visibilityReducer = createReducer('SHOW_ALL', {
	SET_VISIBILITY_FILTER: setVisibilityFilter
});

// Case reducer
function addTodo(todosState, action) {
	const newTodos = todosState.concat({
		id: action.id,
		text: action.text,
		completed: false
	});
	return newTodos;
}

// Case reducer
function toggleTodo(todosState, action) {
	const newTodos = updateItemInArray(todosState, action.id, todo => {
		return updateObject(todo, { completed: !todo.completed });
	});

	return newTodos;
}

// Case reducer
function editTodo(todosState, action) {
	const newTodos = updateItemInArray(todosState, action.id, todo => {
		return updateObject(todo, { text: action.text });
	});

	return newTodos;
}

// Slice reducer
const todosReducer = createReducer([], {
	ADD_TODO: addTodo,
	TOGGLE_TODO: toggleTodo,
	EDIT_TODO: editTodo
});

// "Root reducer"
const appReducer = combineReducers({
	visibilityFilter: visibilityReducer,
	todos: todosReducer
});
