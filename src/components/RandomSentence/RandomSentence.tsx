import { useTransitionContext } from "@/context/transitionContext";
import { useWeatherContext } from "@/context/weatherContext";

const randomSentence = () => {
  const transitionContextObject = useTransitionContext();
  const weatherContextObject = useWeatherContext();

  return (
    <div className={`text-lg font-normal text-center mt-auto text-white ${transitionContextObject?.transition}-animation`}>
      {weatherContextObject?.weatherObject?.currentWeather.randomSentence}
    </div>
  );
}

export default randomSentence;