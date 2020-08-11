import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Cart from '../components/Cart'
import CartResult from '../components/CartResult'
import * as Message from '../contains/Message'
import CartItem from '../components/CartItem';
import * as actions from './../actions/index';

class CartContainer extends Component {

    render() {
        var { cart } = this.props;
        return (
            <Cart>
                {this.showCartItem(cart)}
                {this.showTotalAmount(cart)}
            </Cart>
        );
    }

    showCartItem = (cart) => {
        var { onDeleteProductInCart, onChangeMessage, onUpdateProductInCart } = this.props;
        var result = <tr><td>{Message.MSG_CART_EMPTY}</td></tr>;
        if (cart.length > 0) {
            result = cart.map((item, index) => {
                return <CartItem key={index}
                    item={item}
                    onDeleteProductInCart={onDeleteProductInCart} 
                    onUpdateProductInCart = {onUpdateProductInCart}
                    onChangeMessage={onChangeMessage}/>
            })
        }
        return result;
    }

    showTotalAmount = (cart) => {
        let result = null;
        if (cart.length > 0) {
            result = <CartResult cart={cart} />
        }
        return result;
    }
}

CartContainer.propTypes = {
    cart: PropTypes.arrayOf(PropTypes.shape({
        product: PropTypes.shape({
        }).isRequired,
        quantity: PropTypes.number.isRequired
    })).isRequired
}

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onDeleteProductInCart: (product) => {
            dispatch(actions.actRemoveProductInCart(product));
        },
        onChangeMessage: (message) => {
            dispatch(actions.actChangeMessage(message));
        },
        onUpdateProductInCart: (product, quantity) => {
            dispatch(actions.actUpdateProductInCart(product, quantity));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);