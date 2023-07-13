import * as React from "react";
import { useContext, useState } from "react";

type transitionName = "entry" | "exit"

interface transitionContextObject{
    transition: transitionName,
    setTransition: React.Dispatch<React.SetStateAction<transitionName>>
}

interface Props {
    children: React.ReactNode
  }
  

// The React.Context<number>
const TransitionContext = React.createContext<transitionContextObject|null>(null);

const useTransitionContext = () => {
    return useContext(TransitionContext)
}

const TransitionContextProvider = ({children} : Props) => {
    const [transition, setTransition] = useState<transitionName>("entry");

    return ( 
        <TransitionContext.Provider value={{transition, setTransition}}>
            { children }
        </TransitionContext.Provider>
     );
}

export {useTransitionContext, TransitionContextProvider}
export type {transitionName}