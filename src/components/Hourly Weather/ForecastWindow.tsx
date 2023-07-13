import {Icon_0, Icon_1, Icon_2, Icon_3, Icon_4, Icon_5, Icon_6, Icon_7, Icon_8, Icon_9} from '../../assets/icons';
import { useTransitionContext } from '../../utils/hooks/transitionContext';

interface ForecastWindowProps {
    time: number,
    temperature: number,
    icon: number
}



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

const ForecastWindow = ( {time, temperature, icon} : ForecastWindowProps) => {
    const transitionContextObject = useTransitionContext();
    let formatedTime = time === (new Date()).getHours() ? 'Now' : String(time).length > 1 ? `${String(time)}:00`: `0${String(time)}:00`;

    return ( 
        <div className={` p-2 h-full w-full ${transitionContextObject?.transition}-animation flex flex-col justify-center items-center text-white`}>
                <h6>{Math.round(temperature) + "º"}</h6>
                {iconArray[icon]}
                <h6>{formatedTime}</h6>
        </div>
     );
}
 
export default ForecastWindow;