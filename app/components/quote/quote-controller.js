import QuoteService from "./quote-service.js";

let _qs = new QuoteService()


function _drawQuote() {
  let template = ''
  let text = _qs.Quote.body
  template += `<span title="${_qs.Quote.author}">${text}</span>`

  document.getElementById("quote").innerHTML = template
}

export default class QuoteController {
  constructor() {
    _qs.addSubscribers('quote', _drawQuote)
    _qs.getQuote()
  }

}
