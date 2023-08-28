import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/home";

export const AppRoutes = () => {
  return (
    <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/register" element={""}/>
       <Route path="/login" element={""}/>
       <Route path="/dashboard" element={""}/>
    </Routes>
  )
};
