import { useRef } from "react";
import useBlobBackground from "./hooks/useBlobBackground";
import { useFirstRenderContext } from "../../utils/hooks/firstRenderContext";

// INTERFACES AND TYPES DECLARATION

interface BlobBackgroundProps {
  children: JSX.Element | JSX.Element[],
}

const BlobBakcground = (props: BlobBackgroundProps): JSX.Element => {
  const firsRenderObject = useFirstRenderContext();

  // Set up the background
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useBlobBackground(canvasRef);


  const styleToBeReviewed = "lg:max-w-7xl"

  return (
    <>
      <span className="hidden h-20 h-90%"></span>
      <div className=" relative flex items-center w-screen h-screen justify-center font-main">
        <canvas className=" absolute left-0 top-0 " ref={canvasRef}></canvas>
        <div className={` max-w-sm ${firsRenderObject?.firstRender ? 'max-h-20': 'max-h-[90%]'} w-[80%] h-full bg-opacity-25 bg-slate-800 rounded-xl backdrop-blur-lg shadow-lg transition-all ease-in-out delay-500 duration-500 flex flex-col p-6 overflow-hidden`}>
          {props.children}
        </div>
      </div>
    </>
  );
}

export default BlobBakcground;