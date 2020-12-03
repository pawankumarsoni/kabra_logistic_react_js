import { productType } from "../../services/actionType"

const initialState = {
	productsList: []
}


export default (state = Object.assign({}, initialState), { type, payload }) => {
	switch (type) {
		case productType.updateProductList:
			return {
				...state,
				productsList: payload
			}
		default:
			return state
	}
}