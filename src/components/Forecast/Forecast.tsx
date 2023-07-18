import { useFirstRenderContext } from "../../utils/hooks/firstRenderContext";
import { useTransitionContext } from "../../utils/hooks/transitionContext";
import { useWeatherContext } from "../../utils/hooks/weatherContext";
import ForecastRow from "./ForecastRow";

const Forecast = () => {
    const weatherContextObject = useWeatherContext();
    const transitionContextObject=  useTransitionContext();
    const firstRenderContextObject = useFirstRenderContext();
    const forecast = weatherContextObject?.weatherObject?.forecast;

    return ( 
        <div className={`h-60 my-3 w-full px-2 bg-slate-800 rounded-xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] backdrop-blur-lg bg-opacity-20 transition-all  duration-500 ${firstRenderContextObject?.firstRender ? "opacity-0" : "opacity-100"} flex-col justify-center items-center overflow-auto`}>
            {weatherContextObject?.weatherObject?.forecast.time.map((element:number, i:number) => {
                if(!forecast || !element) return
                return(
                    <ForecastRow 
                      day={forecast?.time[i]} 
                      weatherCode={forecast?.weatherCode[i]} 
                      minTemperature={forecast.minTemperature[i]} 
                      maxTemperature={forecast.maxTemperature[i]}
                      key={forecast.time[i]}
                    />
                )
            })}
        </div>
     );
}
 
export default Forecast;