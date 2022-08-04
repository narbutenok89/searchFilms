import React, { useContext } from "react";
import FilmCards from "../Components/Films/FilmCards";
import { globalContext } from "../Context/Wachlist/WachlistContext";

const WatchList = () => {
    const { globalState } = useContext(globalContext);
    
    return (
        <>
            {globalState.watchlist.length === 0 ? <h3 className="mt-3" style={{color:"white"}}>Please add some movies</h3> : null}
            <FilmCards films={globalState.watchlist} />          
        </>
    );
};

export default WatchList;