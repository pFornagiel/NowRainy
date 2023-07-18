/// <reference types="vite-plugin-svgr/client" />
import { useWeatherContext } from "../../utils/hooks/weatherContext";
import { useTransitionContext } from "../../utils/hooks/transitionContext";
import { useFirstRenderContext } from "../../utils/hooks/firstRenderContext";
import getIconArray from "../../utils/getIconArray";


const style = "w-full h-20 fill-white mt-[-15px] ml-[10px]"

// Maybe not the most elegant of solutions, but works fine
const iconArray = getIconArray(style);

const IconWeather = () => {
    const weatherContextObject = useWeatherContext();
    const transitionContextObject=  useTransitionContext()
    const firstRenderContextObject = useFirstRenderContext();

    const Icon = iconArray[weatherContextObject?.weatherObject?.currentWeather.iconNumber ?? 10 ]
    return ( 
        <div className={`${firstRenderContextObject?.firstRender ? 'w-0' : 'w-36'} h-min ${transitionContextObject?.transition}-animation`}>
            {Icon}
        </div>
     );
}
 
export default IconWeather;