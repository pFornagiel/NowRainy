import { useEffect, useRef } from "react";
import { useBlobBackground, udpateColours } from "./hooks/useBlobBackground";
import { useFirstRenderContext } from "../../utils/hooks/firstRenderContext";
import { useWeatherContext } from "../../utils/hooks/weatherContext";

// INTERFACES AND TYPES DECLARATION \\

interface BlobBackgroundProps {
  children: JSX.Element | JSX.Element[],
}

const BlobBackground = (props: BlobBackgroundProps): JSX.Element => {
  const firsRenderObject = useFirstRenderContext();
  const weatherContextObject = useWeatherContext();

  // Set up the background
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useBlobBackground(canvasRef);

  // Change background colours whenever weather changes
  useEffect(() => {
    if (!weatherContextObject?.weatherObject) return
    udpateColours(weatherContextObject?.weatherObject?.currentWeather.iconNumber, 10, canvasRef)
  }, [weatherContextObject?.weatherObject])

  return (
    <div className="  relative flex items-center w-screen h-screen justify-center font-main ">
      <canvas className=" bg-[hsl(215,100%,74%)] [transition:background-color_0.5s_cubic-bezier(0.37,0,0.63,1)] absolute left-0 top-0 w-screen h-screen " ref={canvasRef}></canvas>
      <div className={` h-full max-w-sm ${firsRenderObject?.firstRender ? 'max-h-20 p-6 overflow-hidden' : 'max-h-[85%] p-6 overflow-auto'} w-[95%]  bg-opacity-25 bg-slate-800 rounded-xl backdrop-blur-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-[max-height] ease-in-out delay-500 duration-500 flex flex-col sm:p-6 [scrollbar-width:none]`}>
        {props.children}
      </div>
    </div>
  );
}

export default BlobBackground;