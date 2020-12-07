import { productType } from "../../services/action_type";
// initialise state
const initialState = {
    productsList: [],
    cart: []
}


export default (state = Object.assign({}, initialState), { type, payload, product, qty, productId, product_id }) => {
    var decrease_q = productId;
    switch (type) {
        case productType.updateProductList:
            return {
                ...state,
                productsList: payload
            }

        case productType.addToCart:
            const productId = product.id
            // check if product is already in the cart
            if (state.cart.findIndex(product => product.id === productId) !== -1) {
                const cart = state.cart.reduce((cartAcc, product) => {
                    if (product.id === productId) {
                        cartAcc.push({ ...product, qty: product.qty + 1, sum: (product.price) * (product.qty + 1) }) // Increment qty
                    } else {
                        cartAcc.push(product)
                    }
                    return cartAcc
                }, [])
                return { ...state, cart }
            }
            return { ...state, cart: [...state.cart, { ...product, qty: qty, sum: (product.price) * qty }] }

        case productType.decrementQty:
            // check if product is already in the cart
            if (state.cart.findIndex(product => product.id === decrease_q) !== -1) {
                const cart = state.cart.reduce((cartAcc, product) => {
                    if (product.id === decrease_q && product.qty > 1) {
                        cartAcc.push({ ...product, qty: product.qty - 1, sum: (product.price) * (product.qty - 1) }) // Decrement qty
                    } else {
                        cartAcc.push(product)
                    }
                    return cartAcc
                }, [])

                return { ...state, cart }
            }
            return { ...state, cart: [...state.cart, { ...product, qty: qty, sum: product.price * qty }] }

        case productType.removeFromCart:
            return {
                cart: state.cart.filter(item => item.id !== product_id.id)
            }

        default:
            return state
    }
}