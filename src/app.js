"use strict"
//react
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux'



// creates the store/app state
import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger'

// imports the combined reducers from the index file
import reducers from './reducers/index';

//import the actions from the cart actions file, to add new actions put them inside the brackets
import {addToCart} from './actions/cartActions';
import {postBooks, deleteBook, updateBooks} from './actions/booksActions';


// Middleware
const middleware = applyMiddleware(logger)

// creates the app store and applies middleware
const store = createStore(reducers, middleware);


//import the components
import BookList from './components/pages/booksList.js';

render(
	<Provider store={store}>
	<BookList />
	</Provider>, document.getElementById('app')
);

// book actions

store.dispatch(postBooks([{
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
	}
])
)


// store.dispatch(deleteBook(
// 	{id:3}
//))

store.dispatch(updateBooks(
	{
		id:4,
		title:"Oxford dictionary",
		description:"do you really need a description for this?!?!",
		price:12.99
	}
))
