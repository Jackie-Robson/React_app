"use strict"


// add a book to the cart

export function addToCart(book){
	return {
		type:"ADD_TO_CART",
		payload:book
	}
}
