export const product = {
	getProductList: {
		url: '/products.json',
		method: 'get',
		get api() {
			return this.url
		}
	}
}