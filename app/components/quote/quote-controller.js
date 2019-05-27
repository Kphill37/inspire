import QuoteService from "./quote-service.js";

let _qs = new QuoteService()


function _drawQuote() {
  let template = ''
  let text = _qs.Quote.body
  template += text
  document.getElementById("quote").innerText = template
}

export default class QuoteController {
  constructor() {
    _qs.addSubscribers('quote', _drawQuote)
    _qs.getQuote()
  }

}
