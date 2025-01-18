interface hourlyWeatherObject {
  time: number[],
  temperature: number[],
  weatherCode: number[],
  iconNumber: number[]
}

interface currentWeatherObject {
  isDay: number,
  temperature: number,
  time: number,
  weatherCode: number,
  weatherName: string,
  iconNumber: number,
  winddirection: number,
  windspeed: number,
  maxTemperature: number,
  minTemperature: number,
  randomSentence: string
}

interface forecastObject {
  maxTemperature: number[],
  minTemperature: number[],
  weatherCode: number[],
  time: number[]
}

interface weatherInformationObject {
  currentWeather: currentWeatherObject,
  hourlyWeather: hourlyWeatherObject,
  forecast: forecastObject
}

export {weatherInformationObject}