import { useEffect } from "react";
import { useWeatherContext } from "../../utils/hooks/weatherContext";
import { useTransitionContext } from "../../utils/hooks/transitionContext";
import { useFirstRenderContext } from "../../utils/hooks/firstRenderContext";


import HourWindow from './HourWindow';

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

    return (
        <>
            <div className={`text-lg font-normal text-center mt-auto text-white ${transitionContextObject?.transition}-animation`} >{weatherContextObject?.weatherObject?.currentWeather.randomSentence}</div>   
            
        <div className={` my-3 w-full h-32 min-h-[8rem] bg-slate-800 rounded-xl backdrop-blur-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] bg-opacity-20 transition-all  duration-500 ${firsRenderContextObject?.firstRender ? "opacity-0" : "opacity-100"} flex justify-center items-center`}>
            {indexes.map(index => {
                if(!index || !hourlyWeather?.weatherCode) return
                return(
                    <HourWindow key={index} icon={hourlyWeather?.iconNumber[index]} temperature={hourlyWeather?.temperature[index]} time={(new Date(hourlyWeather?.time[index] * 1000)).getHours()}/>
                ) 
            })}
        </div>
        </>
     );
}
 
export default HourlyWeather;