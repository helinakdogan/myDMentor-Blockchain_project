import { BrowserRouter, Route, Routes } from "react-router-dom";
import Customers from "../Pages/Customers";
import Inventory from "../Pages/Inventory";
import Orders from "../Pages/Orders";
import Messaging from "../Pages/Messaging/Messaging";
import Home from "../Pages/Home/Home";
import Mentors from "../Pages/Mentors/Mentors";
import Mentees from "../Pages/Mentees/Mentees";
import Bridge from "../Pages/Bridge/Bridge";



function AppRoutes() {
  return (
    <Routes>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/mentors" element={<Mentors />}></Route>
      <Route path="/mentees" element={<Mentees />}></Route>
      <Route path="/inventory" element={<Inventory />}></Route>
      <Route path="/myprogram" element={<Orders />}></Route>
      <Route path="/mymentees" element={<Customers />}></Route>
      <Route path="/messaging" element={<Messaging />}></Route>
      <Route path="/bridge" element={<Bridge />}></Route>
    </Routes>
  );
}
export default AppRoutes;
