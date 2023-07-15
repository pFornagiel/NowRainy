import { useTransitionContext } from "../../utils/hooks/transitionContext";
import { useWeatherContext } from "../../utils/hooks/weatherContext";

const Temperature = () => {
    const transitionContextObject = useTransitionContext();
    const weatherContextObject = useWeatherContext();
    
    const temperatrue = weatherContextObject?.weatherObject?.currentWeather.temperature;
    const weatherName = weatherContextObject?.weatherObject?.currentWeather.weatherName;
    const maxTemperature = weatherContextObject?.weatherObject?.currentWeather.maxTemperature;
    const minTemperature = weatherContextObject?.weatherObject?.currentWeather.minTemperature;
    return ( 
        <div className={`${transitionContextObject?.transition}-animation flex flex-col justify-center items-center w-full text-white h-64`}>
            
            <div className="text-8xl font-thin relative mt-8">{temperatrue ? `${Math.round(temperatrue)}`: ''}<span className="absolute top-2 text-5xl w-0 inline-block">{temperatrue?'º':''}</span></div>
            <div className="text-xl text-gray-200" >{weatherName}</div>
            <div className="text-xl text-gray-200" >{maxTemperature && minTemperature? `H:${Math.round(maxTemperature)}º L:${Math.round(minTemperature)}º`: ''}</div> 
            <div className="text-md text-gray-100  font-normal text-center mt-auto" >{weatherContextObject?.weatherObject?.currentWeather.randomSentence}</div>   
        </div>
     );
}
 
export default Temperature;