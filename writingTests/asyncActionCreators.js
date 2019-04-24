import 'cross-fetch/polyfill'

function fetchTodosRequest() {
	return {
		type: FETCH_TODOS_REQUEST
	}
}

function fetchTodosSuccess(body) {
	return {
		type: FETCH_TODOS_SUCCESS,
		body
	}
}

function fetchTodosFailure(ex) {
	return {
		type: FETCH_TODOS_FAILURE,
		ex
	}
}

export function fetchTodos() {
	return dispatch => {
		dispatch(fetchTodosRequest())
		return fetch('http://example.com/todos')
			.then(res => res.json())
			.then(body => dispatch(fetchTodosSuccess(body)))
			.catch(ex => dispatch(fetchTodosFailure(ex)))
	}
}

