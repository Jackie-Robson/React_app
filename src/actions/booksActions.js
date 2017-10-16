"use strict"

// get books
export function getbooks(){
	return {
		type:"GET_BOOK",
		
	}
}


//post a book
export function postBooks(book){
	return {
		type:"NEW_BOOK",
		payload: book
	}
}


// delete a book
export function deleteBook(id){
	return {
		type:"DELETE_BOOK",
		payload: id
	}
}


//update a book
export function updateBooks(book){
	return {
		type:"UPDATE_BOOK",
		payload: book
	}
}
