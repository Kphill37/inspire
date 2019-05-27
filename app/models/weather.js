export default class Weather {
  constructor(data) {
    console.log('[RAW WEATHER API DATA]', data);
    this.city = data.name
    this.kelvin = data.main.temp
    this.fahrenheit = this.convertToF()
    this.icon = data.weather[0].icon
  }
  convertToF() {
    return this.kelvin * 1.8 - 459.67
  }
}