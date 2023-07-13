/// <reference types="vite-plugin-svgr/client" />
import { useWeatherContext } from "../../utils/hooks/weatherContext";
import { useTransitionContext } from "../../utils/hooks/transitionContext";
import {Icon_0, Icon_1, Icon_2, Icon_3, Icon_4, Icon_5, Icon_6, Icon_7, Icon_8, Icon_9} from '../../assets/icons';


const style = "w-full h-full fill-white mt-[-20px]"

// Maybe not the most elegant of solutions, but works fine
const iconArray = [<Icon_0 className={style}></Icon_0>,
                   <Icon_1 className={style}></Icon_1>, 
                   <Icon_2 className={style}></Icon_2>, 
                   <Icon_3 className={style}></Icon_3>, 
                   <Icon_4 className={style}></Icon_4>, 
                   <Icon_5 className={style}></Icon_5>, 
                   <Icon_6 className={style}></Icon_6>, 
                   <Icon_7 className={style}></Icon_7>, 
                   <Icon_8 className={style}></Icon_8>, 
                   <Icon_9 className={style}></Icon_9>, 
                   <div></div>]
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