import React from 'react';
import Product from '../Product/Product.js';
import { connect } from 'react-redux';
import { getProducts } from'../../services/productService.js';
import { addProduct } from '../../ducks/cartDuck.js';
import './Shop.css';

class Shop extends React.Component {

  addToCart( product, event ) {
    this.props.dispatch( addProduct( product ) )
  }

  render() {
    const product = getProducts().map( product, i => (
      <Product
        addToCart={ this.addToCart.bind( this, product ) }
        key={ i }
        name={ product.name }
        price={ product.price }
      />
    ) );
    return(
      <div className="shop-wrapper">
        { products }
      </div>
    )
  }
}
 export default connect( state => ( {
   cart: state.cart
 } ) )(Shop);
