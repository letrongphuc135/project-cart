import * as types from '../contains/ActionType';
var data = JSON.parse(localStorage.getItem('cart'));
var initialState = data ? data : []
const cart = (state = initialState, action) => {
    var {product, quantity} = action;
    var index = -1;
    switch (action.type) {
        case types.ADD_TO_CART:
            index = findProductIndex(state, product)
            if(index !== -1){
                state[index].quantity += quantity;
            }else{
                state.push({
                    product,
                    quantity
                })
            }
            localStorage.setItem('cart', JSON.stringify(state))
            return [...state];
        case types.DELETE_PRODUCT_IN_CART:
            index = findProductIndex(state, product);
            if(index !== -1){
                state.splice(index, 1);
            }
            localStorage.setItem('cart', JSON.stringify(state))
            return [...state];
        case types.UPDATE_PRODUCT_IN_CART:
            index = findProductIndex(state, product)
            if(index !== -1){
                state[index].quantity = quantity;
            }
            localStorage.setItem('cart', JSON.stringify(state))
            return [...state];
        default: return [...state];
    }
}

var findProductIndex = (cart, product) => {
    var index  = -1;
    if(cart.length > 0){
        index = cart.findIndex((item) => item.product.id === product.id);
    }
    return index;
}
export default cart