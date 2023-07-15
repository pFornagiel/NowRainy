import { useEffect, useRef } from "react";
import {useBlobBackground, udpateColours} from "./hooks/useBlobBackground";
import { useFirstRenderContext } from "../../utils/hooks/firstRenderContext";
import { useWeatherContext } from "../../utils/hooks/weatherContext";

// INTERFACES AND TYPES DECLARATION

interface BlobBackgroundProps {
  children: JSX.Element | JSX.Element[],
}

const BlobBakcground = (props: BlobBackgroundProps): JSX.Element => {
  const firsRenderObject = useFirstRenderContext();
  const weatherContextObject = useWeatherContext();

  // Set up the background
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useBlobBackground(canvasRef);

  useEffect(() => {
    if(!weatherContextObject?.weatherObject) return
    udpateColours(weatherContextObject?.weatherObject?.currentWeather.iconNumber, 10)
  }, [weatherContextObject?.weatherObject])

  // const styleToBeReviewed = "lg:max-w-7xl"

  return (
      <div className=" relative flex items-center w-screen h-screen justify-center font-main">
        <canvas className=" absolute left-0 top-0 " ref={canvasRef}></canvas>
        <div className={` h-full min-h-20 max-w-sm ${firsRenderObject?.firstRender ? 'max-h-20': 'max-h-[90%]'} w-[95%]  bg-opacity-25 bg-slate-800 rounded-xl backdrop-blur-lg shadow-lg transition-all ease-in-out delay-500 duration-500 flex flex-col p-3 sm:p-6 overflow-hidden`}>
          {props.children}
        </div>
      </div>
  );
}

export default BlobBakcground;