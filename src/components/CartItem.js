import React, { Component } from 'react';
import * as Message from '../contains/Message'
class CartItem extends Component {
    
    
    render() {
        var {item} = this.props;
        var { quantity } = item;
        console.log(quantity);
        return (
            <tr>
                <th scope="row">
                    <img src={item.product.image} alt="" className="img-fluid z-depth-0" />
                </th>
                <td>
                    <h5>
                        <strong>{item.product.name}</strong>
                    </h5>
                </td>
                <td>{item.product.price}$</td>
                <td className="center-on-small-only">
                    <span className="qty">{quantity} </span>
                    <div className="btn-group radio-group" data-toggle="buttons">
                        <label onClick={() => this.onUpdateQuantity(item.product, item.quantity-1)} 
                            className="btn btn-sm btn-primary
                                                    btn-rounded waves-effect waves-light">
                            <a>—</a>
                        </label>
                        <label onClick={() => this.onUpdateQuantity(item.product, item.quantity+1)} 
                            className="btn btn-sm btn-primary
                                                    btn-rounded waves-effect waves-light">
                            <a>+</a>
                        </label>
                    </div>
                </td>
                <td>{this.showSubTotal(item.product.price, item.quantity)}$</td>
                <td>
                    <button onClick={() => this.onDelete(item.product)} type="button" className="btn btn-sm btn-primary waves-effect waves-light" data-toggle="tooltip" data-placement="top"  data-original-title="Remove item">
                        X
                      </button>
                </td>
            </tr>
        );
    }

    showSubTotal = (price, quantity) => {
        return price * quantity;
    }

    onUpdateQuantity = (product, quantity) => {
        var {onUpdateProductInCart, onChangeMessage} = this.props;
        if(quantity > 0){
            onUpdateProductInCart(product, quantity);
            onChangeMessage(Message.MSG_UPDATE_TO_CART_SUCCESS);
        }
        
    }   

    onDelete = (product) => {
        var {onDeleteProductInCart, onChangeMessage} = this.props;
        onDeleteProductInCart(product);
        onChangeMessage(Message.MSG_DELETE_TO_CART_SUCCESS);
    }
}

export default CartItem;