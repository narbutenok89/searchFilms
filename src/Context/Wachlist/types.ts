import { Dispatch } from "react";
import { IPopularFilm } from "../../Components/Films/IPopularFilm"

export interface GlobalStateInterface {
    watchlist: IPopularFilm[]
}

export type ActionType = {
  type: string;
  payload?: any;
};

export type ContextType = {
  globalState: GlobalStateInterface;
  dispatch: Dispatch<ActionType>;
};

