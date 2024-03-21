/// <reference types="vite-plugin-svgr/client" />
import { useWeatherContext } from "@/context/weatherContext";
import { useTransitionContext } from "@/context/transitionContext";
import { useFirstRenderContext } from "@/context/firstRenderContext";
import getIconArray from "@/utils/getIconArray";



// Set up the Icon Array
const style = "w-full h-20 fill-white mt-[-8px] ml-[10px]"
const iconArray = getIconArray(style);

const IconWeather = () => {
  const weatherContextObject = useWeatherContext();
  const transitionContextObject = useTransitionContext()
  const firstRenderContextObject = useFirstRenderContext();

  const Icon = iconArray[weatherContextObject?.weatherObject?.currentWeather.iconNumber ?? 10]
  return (
    <div className={`${firstRenderContextObject?.firstRender ? 'w-0' : 'w-36'} h-min ${transitionContextObject?.transition}-animation`}>
      {Icon}
    </div>
  );
}

export default IconWeather;