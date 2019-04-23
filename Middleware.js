/**
 * “Attempt #1: Logging Manually”
 */

// suppose we call
store.dispatch(addToto('use redux'));

// we log the action and state in the following way:

const action = addTodo('use redux');
console.log('dispatching', action);
store.dispatch(action);
console.log('next state', store.getState());


/**
 * “Attempt #2: Wrapping Dispatch”
 */

function dispatchAndLog(store, action) {
	console.log("dispatching", action);
	store.dispatch(action);
	console.log('next state', store.getState());
}

// and use it everywhere instead of dispatch
dispatchAndLog(store, addTodo('Use Redux'));

//this is not convenient to import a separate function every time


/**
 * “Attempt #3: Monkeypatching Dispatch”
 */

// we could replace the 'dispatch' function on the store instance
// though it is a bad solution

const next = store.dispatch;
store.dispatch = function dispatchAndLog(action) {
	console.log('dispatching', action);
	let result = next(action);
	console.log('next state', store.getState());
	return result;
};


/**
 * Crash Reporting Problem
 *
 * */

function patchStoreToAddLogging(store) {
	const next = store.dispatch;
	store.dispatch = function dispatchAndLog(action) {
		console.log("dispatching", action);
		let result = next(action);
		console.log('next state', store.getState());
		return result;
	}
}

function patchStoreToAddCrashReporting(store) {
	const next = store.dispatch;
	store.dispatch = function(action) {
		try {
			return next(action);
		} catch (err) {
			console.error("Caught an exception", err);
			Raven.captureException(err, {
				extra: {
					action,
					state: store.getState()
				}
			});
			throw err;
		}
	}
}

//if these functions are published as separate
// function we can later use them to dispatch our store

patchStoreToAddLogging(store);
patchStoreToAddCrashReporting(store);

/**
 * Attempt #4 : Hiding Monkeypatching
 * */

// can we remove monkeypatching, i.e. REPLACING any method you like?

function logger(store) {
	const next = store.dispatch;

	// Previously we had
	// store.dispatch = function dispatchAndLog(action)

	//now we return a function instead

	return function dispatchAndLog(action) {
		console.log('dispatching', action);
		let result = next(action);
		console.log('next state', store.getState());
		return result;
	}
}

// we could provide a helper inside Redux to apply the actual
// monkeypatching as an implementation detail

function applyMiddlewareByMonkeypatching(store, middlewares) {
	middlewares = middlewares.slice();
	middlewares.reverse(); // reverse them to be applied in correct order

	// Transform dispatch function with each middleware
	middlewares.forEach(middleware => (store.dispatch = middleware(store)));
}

// we would use it to apply multiple middlewares like this

applyMiddlewareByMonkeypatching(store, [logger, crashReporter]);

// it is still monkeypatching, since we hide it inside the library

/**
 * Attempt #5 : Removing Monkeypatching
 *
 * */

function logger(store) {
	// must point to the function returned by previous middleware

	const next = store.dispatch;

	return function dispatchAndLog(action) {
		console.log('dispatching', action);
		let result = next(action);
		console.log('next state', store.getState());
		return result;
	}
}

//“But there's also a different way to enable chaining.
// The middleware could accept the next() dispatch function as a parameter
// instead of reading it from the store instance.


function logger(store) {
	return function wrapDispatchToAddLogging(next) {
		return function dispatchAndLog(action) {
			console.log("dispatching", action);
			let result = next(action);
			console.log('next state', store.getState());
			return result;
		}
	}
}

// which can be rewritten with arrow function slike

const logger = store => next => action => {
	console.log("dispatching", action);
	let result = next(action);
	console.log('next state', store.getState());
	return result;
}

const crashReporter = store => next => action => {
	try {
		return next(action);
	} catch(err) {
		console.log("caught an exception", err);
		Raven.captureException(err, {
			extra: {
				action,
				state: store.getState()
			}
		});
		throw err;
	}
}

/**
 * Attempt #6: Naively applying the middleware
 * */

function applyMIddleware(store, middlewares) {
	middlewares = middlewares.slice();
	middlewares.reverse();
	let dispatch = store.dispatch;
	middlewares.forEach(middleware => (dispatch = middleware(store)(dispatch)));
	return Object.assign({}, store, {dispatch});
}



/**
 * The final Approach
 * */

// Now, using our previous middleware we can do

const logger = store => next => action => {
	console.log("dispatching", action);
	let result = next(action);
	console.log('next state', store.getState());
	return result;
}

const crashReporter = store => next => action => {
	try {
		return next(action);
	} catch(err) {
		console.log("caught an exception", err);
		Raven.captureException(err, {
			extra: {
				action,
				state: store.getState()
			}
		});
		throw err;
	}
}

// Here is how to apply it to Redux store

import { createStore, combineReducers, applyMiddleware} from 'redux';

const todoApp = combineReducers(reducers);
const store = createStore(
	todoApp,
	// applyMiddleware tells createStore() how to handle middleware
	applyMiddleware(logger, crashReporter)
)

// Now any actions dispatched to the store will
// flow through 'logger' and 'crashReporter'

store.dispatch(addTodo('Use Redux'));
