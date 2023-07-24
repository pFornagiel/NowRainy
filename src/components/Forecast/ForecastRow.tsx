import getIconArray from "../../utils/getIconArray";
import { useTransitionContext } from "../../utils/hooks/transitionContext"

interface ForecastRowProps {
    day: number,
    weatherCode: number,
    minTemperature: number,
    maxTemperature: number
}

// Set up Universal Icon Array
const style = ' w-14 h-10 fill-white p-0 inline-block '
const iconArray = getIconArray(style)

const ForecastRow = ({ day, weatherCode, minTemperature, maxTemperature }: ForecastRowProps) => {
    const transitionContexObject = useTransitionContext();
    const dateDate = new Date(day * 1000)
    const formatedWeekDay = dateDate.getDay() === (new Date()).getDay() ? 'Today' : dateDate.toLocaleDateString('en-US', { weekday: 'long' });
    const formatedWeatherCode = Number(String(weatherCode)[0])
    const formatedMinTemperature = Math.round(minTemperature)
    const formatedMaxTemperature = Math.round(maxTemperature)

    return (
        <div className={`w-full h-10 flex items-center justify-between text-white ${transitionContexObject?.transition}-animation text-lg my-2`}>
            <div>
                {iconArray[formatedWeatherCode]}
                <h6 className=" text-left w-12 ml-2 inline-block">{formatedWeekDay}</h6>
            </div>
            <h6 className="mr-4"><span className=" text-gray-200 ">{`${formatedMinTemperature}º`}</span> |  {`${formatedMaxTemperature}º`}</h6>
        </div>
    );
}

export default ForecastRow;