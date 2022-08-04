import { Dispatch, SetStateAction } from "react";

export interface IModal {
    setOpenModal: Dispatch<SetStateAction<boolean>>
}