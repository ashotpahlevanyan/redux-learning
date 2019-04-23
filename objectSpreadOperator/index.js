function todoApp(state = initialState, action) {
	switch (action.type) {
		case SET_VISIBILITY_FILTER:
			return Object.assign({}, state, {
				visibilityFilter: action.filter
			});
		default:
			return state;
	}
}

//=====>>>>>

function todoApp(state = initialState, action) {
	switch (action.type) {
		case SET_VISIBILITY_FILTER:
			return { ...state, visibilityFilter: action.filter };
		default:
			return state;
	}
}

//////////////////////
function ola() { // really dummy name
	return getAddedIds(state.cart).map(id =>
		Object.assign({}, getProduct(state.products, id), {
			quantity: getQuantity(state.cart, id)
		})
	)
}

// --------->>>>
function ola() {
	return getAddedIds(state.cart).map(id => ({
			...getProduct(state.products, id),
			quantity: getQuantity(state.cart, id)
		}));
}


/// TO ENABLE OBJECT SPREAD OPERATOR USE:

{
	"presets": ["@babel/preset-env"],
		"plugins": ["transform-object-rest-spread"]
}

//in babel Presets.
