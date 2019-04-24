const thunk = ({ dispatch, getState }) => next => action => {
	if (typeof action === 'function') {
		return action(dispatch, getState)
	}

	return next(action)
}

// we need to create fake getState, dispatch, and next function.
// we will use jest.fn() for that 

const create = () => {
	const store = {
		getState: jest.fn(() => ({})),
		dispatch: jest.fn()
	};

	const next = jest.fn();

	const invoke = action => thunk(store)(next)(action);

	return { store, next, invoke };
};

// we test that our middleware is calling the getState,
// dispatch, and next functions at the right time

it('passes through non-function action', () => {
	const { next, invoke } = create();
	const action = { type: 'TEST'};

	invoke(Action);

	expect(next).toHaveBeenCalledWith(action);
});

it('calls the function', () => {
	const { invoke } = create();
	const fn = jest.fn();
	invoke(fn);
	expect(fn).toHaveBeenCalled();
});

it('passes dispatch and getState', () => {
	const { store, invoke } = create();
	invoke((dispatch, getState) => {
		dispatch('TEST DISPATCH');
		getState();
	});
	expect(store.dispatch).toHaveBeenCalledWith('TEST DISPATCH');
	expect(store.getState).toHaveBeenCalled();
});

