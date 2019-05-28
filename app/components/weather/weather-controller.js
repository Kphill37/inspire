import WeatherService from "./weather-service.js";

var _weatherService = new WeatherService()

function drawWeather() {
	let template = ''
	let temp = _weatherService.Weather.convertToF()
	console.log(temp)
	template += temp.toFixed(1) + "° F"
	document.getElementById("tempte").innerHTML = `<img src='https://openweathermap.org/img/w/${_weatherService.Weather.icon}.png' alt="Icon">` + template
	// document.getElementById("weather").innerHTML = template
}

export default class WeatherController {

	constructor() {
		_weatherService.addSubscriber('weather', drawWeather)
		_weatherService.getWeather()
	}

}
