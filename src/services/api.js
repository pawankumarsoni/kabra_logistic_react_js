import { axiosInstance } from "./utilities"


export var api = async function ({ method = "get", api, body, status = false, token = '', baseURL = "normal" }) {
	return await new Promise((resolve, reject) => {
        axiosInstance[method](`${process.env.API_URL}${api}`, (body ? body : "")).then((data) => {
			resolve(statusHelper(status, data))
		}).catch((error) => {
			try {
				if (error.response) {
					reject(statusHelper(status, error.response))
				} else {
					reject(error)
				}
			}
			catch (err) {
				reject(err)
			}
		})
	})
}

var statusHelper = (status, data) => {
	if (status) {
		return {
			status: data.status,
			...data.data
		}
	} else {
		return data.data
	}
}