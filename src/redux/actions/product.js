import { product } from "../../services/apiVariables"
import { productType } from "../../services/actionType"
import { Toast } from "../../services/toast"


export const getProductList = (query) => (dispatch, getState, { api }) => {
	return new Promise((resolve, reject) => {
		api(product.getProductList).then(({ data, message }) => {
			dispatch({ type: productType.updateProductList, payload: data })
			resolve(true)
		}).catch(({ message }) => {
			Toast({ type: 'error', message })
		})
	})
}