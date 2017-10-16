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

// store.dispatch(postBooks()
//)


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
