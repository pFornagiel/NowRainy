import getIconArray from "../../utils/getIconArray";
import { useTransitionContext } from "../../utils/hooks/transitionContext"

interface ForecastRowProps {
    day: number,
    weatherCode: number,
    minTemperature: number,
    maxTemperature: number
}

const style = ' w-32 h-12 fill-white mt-[-20px] mb-[-20px] p-0 m-0 overflow'
const iconArray = getIconArray(style)

const ForecastRow = ({day, weatherCode, minTemperature, maxTemperature} : ForecastRowProps) => {
    const transtiionContexObject = useTransitionContext();
    const dateDate = new Date(day*1000)
    const formatedWeekDay = dateDate.getDay() === (new Date()).getDay() ? 'Today' : dateDate.toLocaleDateString('en-US', { weekday: 'short' });
    const formatedWeatherCode = Number(String(weatherCode)[0])
    const formatedMinTemperature = Math.round(minTemperature)
    const formatedMaxTemperature = Math.round(maxTemperature)

    return ( 
        <div className={`w-full h-8 flex items-center justify-evenly text-white ${transtiionContexObject?.transition}-animation`}>
            <h6>{formatedWeekDay}</h6>
            {iconArray[formatedWeatherCode]}
            <h6>{`H:${formatedMinTemperature} L:${formatedMaxTemperature}`}</h6>


        </div>
     );
}
 
export default ForecastRow;