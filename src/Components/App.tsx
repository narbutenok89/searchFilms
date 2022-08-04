import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom"
import Context from "../Context/context";
import  { GlobalStore } from "../Context/Wachlist/WachlistContext";
import "./App.css";
import AppRoutes from "./AppRoutes";
import Modal from "./Modal/Modal";
import NavBar from "./NavBar/NavBar";

function App() {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if(token) {
      setIsAuth(true);
    }
  });

  const [openModal, setOpenModal] = useState(false);

  return (
    <Context.Provider value={{isAuth, setIsAuth, setOpenModal}}>
      <GlobalStore>
        <BrowserRouter>
        <div className="App">
          <NavBar setOpenModal={setOpenModal}/>          
          <AppRoutes/>
          <Modal openModal={openModal} setOpenModal={setOpenModal}/>
        </div> 
      </BrowserRouter>
      </GlobalStore>      
    </Context.Provider>
  );
}

export default App;
