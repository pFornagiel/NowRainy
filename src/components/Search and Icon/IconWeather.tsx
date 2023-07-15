/// <reference types="vite-plugin-svgr/client" />
import { useWeatherContext } from "../../utils/hooks/weatherContext";
import { useTransitionContext } from "../../utils/hooks/transitionContext";
import getIconArray from "../../utils/getIconArray";


const style = "w-full h-full fill-white mt-[-20px]"

// Maybe not the most elegant of solutions, but works fine
const iconArray = getIconArray(style);

const IconWeather = () => {
    const weatherContextObject = useWeatherContext();
    const transitionContextObject=  useTransitionContext()

    const Icon = iconArray[weatherContextObject?.weatherObject?.currentWeather.iconNumber ?? 10 ]
    return ( 
        <div className={`w-36 h-min ${transitionContextObject?.transition}-animation`}>
            {Icon}
        </div>
     );
}
 
export default IconWeather;