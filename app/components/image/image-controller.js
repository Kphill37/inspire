import ImageService from "./image-service.js";
//private


function _drawBackground() {
  let template = ''
  let image = _is.apiImages
  template += image.url
  document.body.style.backgroundImage = `url('${template}')`
}




const _is = new ImageService()

//public
export default class ImageController {
  constructor() {
    _is.addSubscribers('apiImages', _drawBackground)
    _is.getApiImages()
  }

}

