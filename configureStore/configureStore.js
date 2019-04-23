import { applyMiddleware, compose, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';

import monitorReducersEnhancer from './enhancers/monitorReducers';
import loggerMiddleware from './middleware/logger';
import rootReducer from './reducers';

export default function configureStore(preloadedState) {
	const middlewares = [loggerMiddleware, thunkMiddleware];
	const middlewareEnhancer = applyMiddleware(...middlewares);

	const enhancers = [middlewareEnhancer, monitorReducersEnhancer];
	const composedEnhancers = compose(...enhancers);

	if (process.env === 'development') {
		middlewares.push(secretMiddleware)
	}

	const store = createStore(rootReducer, preloadedState, composedEnhancers);

	return store;
}