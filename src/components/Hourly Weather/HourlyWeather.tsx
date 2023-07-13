import { useEffect } from "react";
import { useWeatherContext } from "../../utils/hooks/weatherContext";
import { useTransitionContext } from "../../utils/hooks/transitionContext";
import { useFirstRenderContext } from "../../utils/hooks/firstRenderContext";


import ForecastWindow from './ForecastWindow';

const generateIndexes = (startingIndex: number|undefined, numberOfIndexes: number, step: number) => {
    if(!startingIndex) return []
    if(numberOfIndexes<=0) return []
    if(startingIndex + numberOfIndexes  *step <0) return []
    return Array.from({length: numberOfIndexes}, (u,i) => startingIndex + i * step)
}

const HourlyWeather = () => {
    const weatherContextObject =  useWeatherContext();
    const transitionContextObject = useTransitionContext();
    const firsRenderContextObject = useFirstRenderContext()

    const hourlyWeather = weatherContextObject?.weatherObject?.hourlyWeather;
    
    const timeArray = hourlyWeather?.time.map(element => (new Date(element * 1000)).getHours());
    const startingIndex = timeArray?.findIndex((index) => index === (new Date()).getHours());
    const indexes = generateIndexes(startingIndex, 4,3)

    

    
    useEffect(() => {
        // For loggin
        
    }, [weatherContextObject?.weatherObject])

    return ( 
        // ${transitionContextObject?.transition}-animation`}
        <div className={` w-full h-32 bg-slate-800 rounded-xl backdrop-blur-lg bg-opacity-20 transition-all  duration-500 ${firsRenderContextObject?.firstRender ? "opacity-0" : "opacity-100"} flex justify-center items-center`}>
            {indexes.map(index => {
                console.log(index, hourlyWeather)
                if(!index || !hourlyWeather?.weatherCode) return
                return(
                    <ForecastWindow key={index} icon={hourlyWeather?.iconNumber[index]} temperature={hourlyWeather?.temperature[index]} time={(new Date(hourlyWeather?.time[index] * 1000)).getHours()}/>
                ) 
            })}
        </div>
     );
}
 
export default HourlyWeather;