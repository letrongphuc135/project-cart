var initialState = [
    {
        id: 1,
        name: 'Iphone 11',
        image: 'https://cdn.tgdd.vn/Products/Images/42/200533/iphone-11-pro-max-black-400x460.png',
        description: 'San pham cua apple',
        price: 500,
        inventory: 10,
        rating: 3
    },
    {
        id: 2,
        name: 'Samsung s20',
        image: 'https://cdn.tgdd.vn/Products/Images/42/217936/samsung-galaxy-s20-plus-400x460-fix-400x460.png',
        description: 'San pham cua samsung',
        price: 800,
        inventory: 15,
        rating: 5
    },
    {
        id: 3,
        name: 'Oppo f11',
        image: 'https://cdn.tgdd.vn/Products/Images/42/198150/oppo-find-x2-xanh-400x460-1-400x460.png',
        description: 'San pham cua oppo',
        price: 450,
        inventory: 5,
        rating: 4
    },
]

const products = (state = initialState, action) => {
    switch (action.types) {
        default: return state;
    }
}
export default products