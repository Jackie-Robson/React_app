"use strict"
import React from 'react';
import {connect} from 'react-redux';

class BooksList extends React.Component{
	render(){
		const booksList = this.props.books.map(function(booksArr){
			return(
				<div key={booksArr.id}>
					<h2>{booksArr.title}</h2>
					<h3>{booksArr.description}</h3>
					<h2>£{booksArr.price}</h2>
					<hr />
				</div>

			)
		})
		return(
			<div>
				{booksList}
			</div>
		)
	}
}
function mapStateToProps(state){
	return {
		books:state.books.books
	}
}

export default connect(mapStateToProps)(BooksList);
