import * as React from "react";
import { useContext, useState } from "react";
import { transitionContextObject, transitionName, Props } from "@/types/utils/IContext";


const TransitionContext = React.createContext<transitionContextObject | null>(null);

const useTransitionContext = () => {
  return useContext(TransitionContext)
}

const TransitionContextProvider = ({ children }: Props) => {
  const [transition, setTransition] = useState<transitionName>("entry");

  return (
    <TransitionContext.Provider value={{ transition, setTransition }}>
      {children}
    </TransitionContext.Provider>
  );
}

export { useTransitionContext, TransitionContextProvider }
export type { transitionName }