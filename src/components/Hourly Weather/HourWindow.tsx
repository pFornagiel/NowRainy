import { useTransitionContext } from '@/context/transitionContext';
import getIconArray from '@/utils/getIconArray';

interface HourWindowProps {
  time: number,
  temperature: number,
  icon: number
}

// Set up the Universal Icon Array
const style = "w-12 h-full my-2 fill-white mt-[-20px] mb-[-20px] p-0 m-0"
const iconArray = getIconArray(style);

const HourWindow = ({ time, temperature, icon }: HourWindowProps) => {
  const transitionContextObject = useTransitionContext();
  const formatedTime = time === (new Date()).getHours() ? 'Now' : String(time).length > 1 ? `${String(time)}:00` : `0${String(time)}:00`;
  const formatedTemperature = Math.round(temperature);

  return (
    <div className={` p-2 h-32 w-full ${transitionContextObject?.transition}-animation flex flex-col justify-center items-center text-white`}>
      <h6 className=' text-lg'>{formatedTemperature + "º"}</h6>
      {iconArray[icon]}
      <h6 className=' text-lg'>{formatedTime}</h6>
    </div>
  );
}

export default HourWindow;