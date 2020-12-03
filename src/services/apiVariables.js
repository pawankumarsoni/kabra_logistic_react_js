export const product = {
	getProductList: {
		url: '/products.json',
		method: 'get',
		query: {
			pageNo: 1,
			limit: null,
			search: null,
			orderBy: null,
			filter: null,
		},
		get api() {
			return this.url
		}
	}
}