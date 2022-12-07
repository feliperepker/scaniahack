import React from "react";
import { Route, Routes, Navigate, Outlet, useNavigate } from "react-router-dom";
import { ControlTower } from "../pages/ControlTower";
import { DetailsCT } from "../pages/DetailsCT";
import { Login } from "../pages/Login";
import { SupInformations } from "../pages/SupInformations";
import { Supplier } from "../pages/Supplier";
import { isAuthenticated } from "../services/auth";

const PrivateRoutes = () => {
  return(
    isAuthenticated() ? <Outlet/> : <Navigate to="/"/>
  )
}
 
export function AppRoutes(){
  return(
      <Routes>
        <Route path="/" element ={<Login/>}/>
        <Route element={<PrivateRoutes/>}>
          <Route element={<ControlTower/>} path="/controltower"/>
          <Route element={<Supplier/>} path="/supplier"/>
          <Route element={<SupInformations/>} path="/supplierdatas"/>
          <Route element={<DetailsCT/>} path="/DetailsCT"/>
        </Route>
      </Routes>
    
  )

}