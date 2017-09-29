"use strict"

export function booksReducers(state={books:[]},action){

		switch (action.type) {

// add a new book

			case "NEW_BOOK":
			return {books : [...state.books, ...action.payload]};
			break;


//delete a book

			case "DELETE_BOOK":
			const currentBookToDelete = [...state.books];
			const indexToDelete = currentBookToDelete.findIndex(
				function(book){
					return book.id === action.payload.id;
				}
			)
			return {books: [...currentBookToDelete.slice(0,indexToDelete), ...currentBookToDelete.slice(indexToDelete+1)]}
			break;


// update a book

			case "UPDATE_BOOK":
			const currentBookToUpdate = [...state.books];
			const indexToUpdate = currentBookToUpdate.findIndex(
				function(book){
					return book.id === action.payload.id;
				}
			)
			const newBookToUpdate = {
				...currentBookToUpdate[indexToUpdate],
				id:action.payload.id,
				title:action.payload.title,
				description:action.payload.description,
				price:action.payload.price
			}
			console.log("what is the new book",newBookToUpdate);

			return {books: [...currentBookToUpdate.slice(0,indexToUpdate),newBookToUpdate, ...currentBookToUpdate.slice(indexToUpdate+1)]}

			break;
		}


		return state
}
