import Image from "../../models/image.js";

// @ts-ignore
const imgApi = axios.create({
	baseURL: '//bcw-sandbox.herokuapp.com/api/images',
	timeout: 3000
});

let _state = {
	apiImages: {}
}

let _subscribers = {
	apiImages: []
}

function _setState(propName, data) {
	_state[propName] = data
	_subscribers[propName].forEach(fn => fn())
}

export default class ImageService {
	addSubscribers(propName, fn) {
		_subscribers[propName].push(fn)
	}
	get apiImages() {
		return _state.apiImages
	}
	getApiImages() {
		imgApi.get()
			.then(response => {
				console.log(response)
				let image = new Image(response.data)
				_setState('apiImages', image)
				console.log(_state)
			})
			.catch(err => {
				console.error(err)
			})
	}
}


