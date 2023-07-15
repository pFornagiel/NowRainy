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
        <div className={`h-60 my-3 w-full  p-2 bg-slate-800 rounded-xl backdrop-blur-lg bg-opacity-20 transition-all  duration-500 ${firstRenderContextObject?.firstRender ? "opacity-0" : "opacity-100"} flex flex-col justify-center items-center`}>
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