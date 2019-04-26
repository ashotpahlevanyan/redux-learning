// reducers.js
export default (theDefaultReducer = (state = 0, action) => state)

export const firstNamedReducer = (state = 1, action) => state

export const secondNamedReducer = (state = 2, action) => state

// Even though the names for imported reducers are bad, should
// not include the work 'reducer'
// but should describe the domain of the data, state slice
// but we can give appropriate naming aliases when using them,
// and the final names will go correctly

import { combineReducers, createStore } from 'redux'

// Rename the default import to whatever name we want. We can also rename a named import.
import defaultState, {
	firstNamedReducer,
	secondNamedReducer as secondState
} from './reducers'

const rootReducer = combineReducers({
	defaultState, // key name same as the carefully renamed default export
	firstState: firstNamedReducer, // specific key name instead of the variable name
	secondState // key name same as the carefully renamed named export
})

const reducerInitializedStore = createStore(rootReducer)
console.log(reducerInitializedStore.getState())
// {defaultState : 0, firstState : 1, secondState : 2}