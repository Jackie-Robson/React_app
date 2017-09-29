"use strict"

// imports the combine reducers function form react
import {combineReducers} from 'redux';

//imports the reducers from the files from the containing folder
import {booksReducers} from './booksReducers';
import {cartReducers} from './cartReducers';

// combines the reducers and exports them for 

export default combineReducers({
	books: booksReducers,
	cart: cartReducers
})
