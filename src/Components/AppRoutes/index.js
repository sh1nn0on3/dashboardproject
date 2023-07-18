import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../../Pages/Dashbaord";
import Inventory from "../../Pages/Courses";
import Orders from "../../Pages/NewCourse";
import Users from "../../Pages/Users";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}></Route>
      <Route path="/inventory" element={<Inventory />}></Route>
      <Route path="/orders" element={<Orders />}></Route>
      <Route path="/users" element={<Users />}></Route>
    </Routes>
  );
}
export default AppRoutes;
