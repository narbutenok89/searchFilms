import { createContext } from "react";
import { IAuth } from "./IAuth";
import { IModal } from "./IModal";

type Registration = IAuth & IModal;


const Context = createContext({} as Registration);
export default Context;