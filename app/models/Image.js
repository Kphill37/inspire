export default class Image {
  constructor(data) {
    this._id = data._id
    this.url = data.url
    this.large_url = data.large_url
    this.copyright = data.copyright
    this.site = data.site
  }
}
