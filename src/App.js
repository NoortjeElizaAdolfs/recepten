import React from 'react'
import {BrowserRouter, Routes,Route } from "react-router-dom"
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import AuthGuard from "./Guards/AuthGuard";
import Inspiratie from "./Pages/Inspiratie";
import Cocktails from "./Pages/Cocktails";
import Recepten from "./Pages/Recepten";
import Home from "./Pages/Home";

const App = () => {
  
  return (
    <div>
      <BrowserRouter> 
      <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>} />
          <Route path="/" element={<AuthGuard><Home/></AuthGuard>}/>
          <Route path="/recepten" element={<AuthGuard><Recepten/></AuthGuard>}/>
          <Route path="/inspiratie" element={<AuthGuard><Inspiratie/></AuthGuard>}/>
          <Route path="/cocktails" element={<AuthGuard><Cocktails/></AuthGuard>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
