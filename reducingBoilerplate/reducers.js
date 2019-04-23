//Flux style
const _todos = []

const TodoStore = Object.assign({}, EventEmitter.prototype, {
	getAll() {
		return _todos
	}
})

AppDispatcher.register(function(action) {
	switch (action.type) {
		case ActionTypes.ADD_TODO:
			const text = action.text.trim()
			_todos.push(text)
			TodoStore.emitChange()
	}
})

// Redux style reducers

export function todos(state = [], action) {
	switch (action.type) {
		case ActionTypes.ADD_TODO:
			const text = action.text.trim()
			return [...state, text]
		default:
			return state
	}
}


export const todos = createReducer([], {
	[ActionTypes.ADD_TODO]: (state, action) => {
		const text = action.text.trim()
		return [...state, text]
	}
})

// look at the [ActionType ....] isn't it a neat ;) muah

// we can write the following helper to accomplish this
function createReducer(initialState, handlers) {
	return function reducer(state = initialState, action) {
		if (handlers.hasOwnProperty(action.type)) {
			return handlers[action.type](state, action)
		} else {
			return state
		}
	}
}