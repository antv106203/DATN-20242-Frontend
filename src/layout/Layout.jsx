import Sidebar from "../components/Sidebar/Sidebar"
import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard/Dashboard";
import "./Layout.css"
import Header from "../components/Header/Header";
import DepartmentPage from "../pages/Department/DepartmentPage";
import StaffPage from "../pages/Staff/StaffPage";
import AccessLogPage from "../pages/AccessLog/AccessLogPage";

const Layout = () =>{
    return(
        <div className="container-layout">
            <Sidebar />
            <div className="right-layout">
                <Header /> 
                <Routes>
                    <Route path="/dashboard/*"element = {<Dashboard />} />
                    <Route path="/department/*"element = {<DepartmentPage />} />
                    <Route path="/staff/*"element = {<StaffPage />} />
                    <Route path="/history/*"element = {<AccessLogPage />} />
                </Routes>
            </div>
        </div>
    )
}

export default Layout