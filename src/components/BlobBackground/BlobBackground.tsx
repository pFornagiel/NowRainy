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
      <div className="  relative flex items-center w-screen h-screen justify-center font-main overflow-hidden position: fixed;
      ">
        <canvas className=" absolute left-0 top-0 w-screen h-screen " ref={canvasRef}></canvas>
        <div className={` h-max max-w-sm ${firsRenderObject?.firstRender ? 'max-h-20 p-6': 'max-h-[85%] p-6'} w-[95%]  bg-opacity-25 bg-slate-800 rounded-xl backdrop-blur-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-[max-height] ease-in-out delay-500 duration-500 flex flex-col sm:p-6 overflow-hidden`}>
          {props.children}
        </div>
      </div>
  );
}

export default BlobBakcground;