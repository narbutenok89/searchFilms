import React, { createContext, useReducer, useEffect, ReactNode, ReactElement, useRef} from "react";
import AppReducer from "./reducer";
import { ContextType, GlobalStateInterface } from './types';

export function GlobalStore({ children }: { children: ReactNode }): ReactElement {
  const [globalState, dispatch] = useReducer(AppReducer,initialState);
  
  return (
    <globalContext.Provider 
      value={{ globalState, dispatch }}
    >{children}
    </globalContext.Provider>
  )
}

export const globalContext = createContext({} as ContextType);

const initialState: GlobalStateInterface = {
  watchlist: []
}


 