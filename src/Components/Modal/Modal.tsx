import React, { Dispatch, SetStateAction } from "react";
import Auth from "../Auth/Auth";

const Modal = ({openModal, setOpenModal}: { openModal: boolean, setOpenModal: Dispatch<SetStateAction<boolean>>}) => {
    return (
        <div className={`modal ${openModal && "d-block"}`}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title al-atems=center">Sign In</h5>
                        <button type="button" 
                                className="btn-close" 
                                data-bs-dismiss="modal" 
                                aria-label="Close"
                                onClick={()=> setOpenModal(false)}>
                        </button>
                    </div>
                    <div className="modal-body">
                        <Auth/>
                    </div>
                    <div className="modal-footer text-start">
                        <div className="footer .ml-auto">
                            <h6>New to Movie app? <a href="">Sign up now.</a></h6>
                        </div>
                        <p>This page is protected by Google reCAPTCHA to 
                            ensure youre not a bot.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;