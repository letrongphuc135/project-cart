import React, { Component } from 'react';
import { connect } from 'react-redux'
import Products from '../components/Products';
import Product from '../components/Product';
import * as actions from './../actions/index';
import PropTypes from 'prop-types'

class ProductContainer extends Component {

    render() {
        var { products } = this.props;
        return (
            <Products>
                {this.showProduct(products)}
            </Products>
        );
    }

    showProduct = (products) => {
        var result = null;
        var { onAddToCart, onChangeMessage } = this.props;
        if (products.length > 0) {
            result = products.map((item, index) => {
                return <Product 
                    key={index} 
                    product={item}
                    onAddToCart={onAddToCart}
                    onChangeMessage={onChangeMessage} />
            })
        }
        return result;
    }
}

ProductContainer.propTypes = {
    onChangeMessage: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddToCart: (product) => {
            dispatch(actions.actAddToCart(product, 1))
        },
        onChangeMessage: (message) => {
            dispatch(actions.actChangeMessage(message))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer);