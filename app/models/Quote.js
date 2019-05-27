export default class Quote {
  constructor(data) {
    this.url = data.url
    this.author = data.author
    this.body = data.body
  }
  quoteTemplate() {
    return this.body
  }
}