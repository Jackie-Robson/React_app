"use strict"

export function booksReducers(state={books:[
	{
		id:1,
		title: "Graphic design rules",
		description: "365 essential designs do's and don'ts.",
		price: 14.99
	},
	{
		id:2,
		title:"Hitchhikers guide to the galaxy",
		description:"Follow Dent, Arthur dent as he journies accross the galaxy with his towel.",
		price: 8.99
	},
	{
		id:3,
		title:"Learn react",
		description:"This book does not exist but i'm learning through a video series.",
		price:0.01
	},{
		id:4,
		title:"another book",
		description:"another description",
		price:0.002
	},{
		id:5,
		title:"one more book",
		description:"making up books is hard",
		price:4.99
	}]},action){

		switch (action.type) {

// get books

			case "GET_BOOK":
				return { ...state,books:[...state.boooks]
				}
				break;


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
