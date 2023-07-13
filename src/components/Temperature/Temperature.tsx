import { useTransitionContext } from "../../utils/hooks/transitionContext";
import { useWeatherContext } from "../../utils/hooks/weatherContext";

const Temperature = () => {
    const transitionContextObject = useTransitionContext();
    const weatherContextObject = useWeatherContext();
    
    const temperatrue = weatherContextObject?.weatherObject?.currentWeather.temperature;
    const weatherName = weatherContextObject?.weatherObject?.currentWeather.weatherName;
    return ( 
        <div className={`${transitionContextObject?.transition}-animation flex flex-col justify-center items-center w-full text-white`}>
            <div className="text-8xl font-thin relative">{temperatrue ? `${Math.round(temperatrue)}`: ''}<span className="absolute top-2 text-5xl w-0 inline-block">{temperatrue?'º':''}</span></div>
            
            <div className="text-xl text-gray-200" >{weatherName}</div>
        </div>
     );
}
 
export default Temperature;