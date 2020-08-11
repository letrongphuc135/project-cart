import React, { Component } from 'react';
import * as Message from '../contains/Message';

class Product extends Component {
    showRating = (rating) => {
        let result = [];
        for (let i = 0; i < 5; i++) {
            if (i < rating) {
                result.push(<i key={i} className="fa fa-star"></i>);
            } else {
                result.push(<i key={i} className="fa fa-star-o"></i>);
            }
        }
        return result;
    }

    render() {
        var { product } = this.props;
        return (
            <div className="col-lg-4 col-md-6 mb-r">
                <div className="card text-center card-cascade narrower">
                    <div className="view overlay hm-white-slight z-depth-1">
                        <img src={product.image} className="img-fluid" alt="" />
                        <a>
                            <div className="mask waves-light waves-effect waves-light" />
                        </a>
                    </div>
                    <div className="card-body">
                        <h4 className="card-title">
                            <strong>
                                <a>{product.name}</a>
                            </strong>
                        </h4>
                        <ul className="rating">
                            <li>
                                {this.showRating(product.rating)}
                            </li>
                        </ul>
                        <p className="card-text">
                            {product.description}
                        </p>
                        <div className="card-footer">
                            <span className="left">{product.price}$</span>
                            <span className="right">
                                <a onClick={() => this.onAddToCart(product)} className="btn-floating blue-gradient" data-toggle="tooltip" data-placement="top" data-original-title="Add to Cart">
                                    <i className="fa fa-shopping-cart" />
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    onAddToCart = (product) => {
        this.props.onAddToCart(product);
        this.props.onChangeMessage(Message.MSG_ADD_TO_CART_SUCCESS)
    }
}

export default Product;