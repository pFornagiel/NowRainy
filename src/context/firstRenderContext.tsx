import * as React from "react";
import { useContext, useState } from "react";
import { firstRenderContextObject, Props } from "@/types/utils/IContext";


const firstRenderContext = React.createContext<firstRenderContextObject | null>(null);

const useFirstRenderContext = () => {
  return useContext(firstRenderContext)
}

const FirstRenderContextProvider = ({ children }: Props) => {
  const [firstRender, setFirstRender] = useState<boolean>(true);

  return (
    <firstRenderContext.Provider value={{ firstRender, setFirstRender }}>
      {children}
    </firstRenderContext.Provider>
  );
}

export { useFirstRenderContext, FirstRenderContextProvider }