import React from 'react';
import {Row,Col,Well,Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addToCart} from '../../actions/cartActions';

class BookItem extends React.Component {

	handleCart(){
		const book = [{
			id:this.props.id,
			title:this.props.title,
			description:this.props.description,
			price:this.props.price
		}];
		this.props.addToCart(book)
	}

	render(){
		return(
			<Well>
				<Row>
					<Col s={12}>
						<h4>{this.props.title}</h4>
						<p>{this.props.description}</p>
						<h5>£{this.props.price}</h5>
						<Button onClick={this.handleCart.bind(this)} bsStyle='primary'>Buy now</Button>
					</Col>
				</Row>
			</Well>
		)

	}
}

function mapStateToProps(state){
	return{
		cart:state.cart.cart
	}
}
function mapDispatchToProps(dispatch){
	return bindActionCreators({
		addToCart:addToCart
	},dispatch)
}

export default BookItem;
