import WeatherService from "./weather-service.js";

var _weatherService = new WeatherService()

function drawWeather() {
	let template = ''
	let temp = _weatherService.Weather.convertToF()
	console.log(temp)
	template += temp.toFixed(1) + "° F"
	document.getElementById("weather").innerText = template
}

export default class WeatherController {

	constructor() {
		_weatherService.addSubscriber('weather', drawWeather)
		_weatherService.getWeather()
	}

}
