import * as React from "react";
import { useContext, useState } from "react";

interface firstRenderContextObject{
    firstRender: boolean,
    setFirstRender: React.Dispatch<React.SetStateAction<boolean>>
}

interface Props {
    children: React.ReactNode
  }
  

// The React.Context<number>
const firstRenderContext = React.createContext<firstRenderContextObject|null>(null);

const useFirstRenderContext = () => {
    return useContext(firstRenderContext)
}

const FirstRenderContextProvider = ({children} : Props) => {
    const [firstRender, setFirstRender] = useState<boolean>(true);

    return ( 
        <firstRenderContext.Provider value={{firstRender, setFirstRender}}>
            { children }
        </firstRenderContext.Provider>
     );
}

export {useFirstRenderContext, FirstRenderContextProvider}