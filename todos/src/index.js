import {
	addTodo,
	toggleTodo,
	setVisibilityFilter,
	VisibilityFilters
} from './actions';

import store from './store';
import './scss/index.scss';

//log the initial state
console.log(store.getState());

//every time the state changes, log it
//note that subscribe() returns a function for unregistering the listener

const unsubscribe = store.subscribe(() => console.log(store.getState()));

//dispatch some actions
store.dispatch(addTodo("Learn about actions"));
store.dispatch(addTodo("Learn about reducers"));
store.dispatch(addTodo("Learn about store"));
store.dispatch(toggleTodo(0));
store.dispatch(toggleTodo(1));
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED));

unsubscribe();