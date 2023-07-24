import * as React from "react";
import { useContext, useState } from "react";
import axios from "axios";
import { getRandomSentence } from "../weatherLines";

interface hourlyWeatherObject  {
    time: number[],
    temperature: number[],
    weatherCode: number[],
    iconNumber: number[]
}

interface currentWeatherObject  {
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

interface weatherInformationObject{
    currentWeather : currentWeatherObject,
    hourlyWeather : hourlyWeatherObject,
    forecast: forecastObject
}

interface weatherContextObject {
    weatherObject: null | weatherInformationObject,
    setWeatherObject: (weatheData: any) => void
}

interface Props {
    children: React.ReactNode
  }

// UTILITIES USED TO WORK WITH THE HOOK \\

const fetchWeatherData = async (lat: number, log: number) => {
    return await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${log}&hourly=temperature_2m,weathercode&current_weather=true&timeformat=unixtime&forecast_days=7&timezone=auto&daily=temperature_2m_max,temperature_2m_min,weathercode`)
  }

// HOOK FUNCTIONS \\

const WeatherContext= React.createContext<weatherContextObject|null>(null);

const useWeatherContext = () => {
    return useContext(WeatherContext)
}

const WeatherContextProvider = ({children} : Props) => {
    const [weatherObject, setWeatherContextObject] = useState<weatherInformationObject|null>(null);

    const setWeatherObject = (weatherData: any) => {
        let weatherName = '';
        let weatherCode = String(weatherData.data.current_weather.weathercode)[0]
        switch(weatherCode){
            case '0':
                weatherName = 'Clear Skies'
                break;
            case "1":
                weatherName = 'Mainly Clear'
                break;
            case "2":
                weatherName = 'Partly Cloudy'
                break;
            case "3":
                weatherName = 'Overcast'
                break;
            case "4":
                weatherName = 'Fog'
                break;
            case "5":
                weatherName = 'Drizzle'
                break;
            case "6":
                weatherName = 'Rain'
                break;
            case "7":
                weatherName = 'Snow'
                break;
            case "8":
                weatherName = 'Shower'
                break;
            case "9":
                weatherName = 'Thunderstorm'
                break;
            default:
                weatherName = ''
                weatherCode = '10'

        }
        const newHourlyCodesArray = weatherData.data.hourly.weathercode.map((code:number) => String(code)[0])
        const newWeatherObject = {
            currentWeather: {
                ...weatherData.data.current_weather, 
                iconNumber: Number(weatherCode), 
                weatherName: weatherName, 
                maxTemperature: weatherData.data.daily.temperature_2m_max[0], 
                minTemperature: weatherData.data.daily.temperature_2m_min[0], 
                randomSentence: getRandomSentence(Number(weatherCode))
            }, 
            hourlyWeather: {
                time: weatherData.data.hourly.time, 
                weatherCode: weatherData.data.hourly.weathercode, 
                temperature: weatherData.data.hourly.temperature_2m, 
                iconNumber: newHourlyCodesArray
            },
            forecast: {
                maxTemperature: weatherData.data.daily.temperature_2m_max, 
                minTemperature: weatherData.data.daily.temperature_2m_min, 
                weatherCode: (weatherData.data.daily.weathercode),
                time: weatherData.data.daily.time
            }}
        setWeatherContextObject(newWeatherObject)
    }

    return ( 
        <WeatherContext.Provider value={{weatherObject, setWeatherObject}}>
            {children}
        </WeatherContext.Provider>  
        );
}
 
export {WeatherContextProvider, useWeatherContext, fetchWeatherData};
export type {weatherInformationObject, hourlyWeatherObject}