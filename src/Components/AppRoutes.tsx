import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Context from "../Context/context";
import Film from "../Pages/Film";
import Home from "../Pages/Home";
import WatchList from "../Pages/WatchList";

const AppRoutes = () => {
    const { isAuth } = useContext(Context);
    return (
        isAuth
            ?
        <Routes>
            <Route path="home" element={<Home/>} />
            <Route path="home/:movie_id" element={<Film/>} />
            <Route path="watchlist" element={<WatchList/>} />
            <Route path="*" element={<Home/>} />
        </Routes>
        :
        <Routes>
            <Route path="home" element={<Home/>} />
            <Route path="home/:movie_id" element={<Film/>} />
            <Route path="*" element={<Home/>} />
        </Routes>
    );
};

export default AppRoutes;
