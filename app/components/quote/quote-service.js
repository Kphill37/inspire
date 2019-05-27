import Quote from "../../models/Quote.js";

// @ts-ignore
const _quoteApi = axios.create({
	baseURL: '//bcw-sandbox.herokuapp.com/api/quotes',
	timeout: 3000
});

//private

let _state = {
	quote: {}
}

let _subscribers = {
	quote: []
}

function _setState(propName, data) {
	_state[propName] = data
	_subscribers[propName].forEach(fn => fn())
}


//public


export default class QuoteService {
	addSubscribers(propName, fn) {
		_subscribers[propName].push(fn)
	}
	get Quote() {
		return _state.quote
	}
	getQuote() {
		_quoteApi.get().then(res => {
			console.log(res.data.quote)
			_setState('quote', new Quote(res.data.quote))
		})
	}
}
