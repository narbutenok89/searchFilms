import React, { Dispatch, SetStateAction, useContext } from "react";
import { Link } from "react-router-dom";
import Context from "../../Context/context";
import "./NavBar.css";

const NavBar = ({setOpenModal}: {setOpenModal: Dispatch<SetStateAction<boolean>>}) => {
    const { isAuth, setIsAuth } = useContext(Context);

    const logout = () => {
        localStorage.clear();
        setIsAuth(false);
    };

    return (
        <nav className="navbar navbar-expand-lg" style={{backgroundColor: "#2C4A52"}}>
            <div className="container-fluid ms-3">
                {isAuth
                    ?
                    <>
                        <ul className="navbar-nav w-100 mb-2 mb-lg-0">
                            <li className="nav-item">
                                    <h2 className= "title_app_movie">Movie app</h2> 
                            </li>                            
                            <li className="nav-item">
                                <Link to="home" className="nav-link active" aria-current="page">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="watchlist" className="nav-link">WatchList</Link>
                            </li>
                        </ul>
                        <button className="btn btn-primary" onClick={() => logout()}>Logout</button>
                    </>
                    :
                    <>
                        <ul className="navbar-nav w-100 mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="home" className="nav-link">
                                    <h2 className="title_app_movie">Movie app</h2> 
                                </Link>
                            </li>   
                            <li className="nav-item">
                                <Link to="home" className="nav-link active" aria-current="page">Home</Link>
                            </li>
                        </ul>
                        <button className="btn btn-primary" onClick={() => setOpenModal(true)}>Login</button>
                    </>
                }
            </div>
        </nav>
    );
};

export default NavBar;