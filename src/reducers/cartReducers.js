"use strict"

export function cartReducers(state={cart:[]}, action) {
	switch(action.type) {

// add a book to the cart 

		case "ADD_TO_CART":
		return {cart:[...state.cart, ...action.payload]};
			break;
	}
	return state
}
