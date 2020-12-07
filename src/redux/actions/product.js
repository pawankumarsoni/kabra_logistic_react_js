import { product } from "../../services/api_variables";
import { productType } from "../../services/action_type";
import { toast  } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';


export const getProductList = (query) => (dispatch, getState, { api }) => {
    return new Promise((resolve, reject) => {
        api(product.getProductList).then(({ data, message }) => {
            dispatch({ type: productType.updateProductList, payload: data })
            resolve(true)
        }).catch(({ message }) => {
            toast.error({message});
        })
    })
}

export const addToCart = (product, qty) => (dispatch) => {
    toast.success("Item Added to Cart");
    dispatch(addToCartUnsafe(product, qty))
}

export const addToCartUnsafe = (product, qty) => ({
    type: productType.addToCart,
    product,
    qty
});

export const removeFromCart = product_id => (dispatch) => {
    toast.error("Item Removed from Cart");
    dispatch({
        type: productType.removeFromCart,
        product_id
    })
};
export const incrementQty = (product,qty) => (dispatch) => {
    toast.success("Item Added to Cart");
    dispatch(addToCartUnsafe(product, qty))
}
export const decrementQty = productId => (dispatch) => {
    toast.warn("Item Quantity Decremented from Cart");
    dispatch({
    type: productType.decrementQty,
    productId: productId})
};
