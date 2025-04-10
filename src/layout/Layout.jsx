import Sidebar from "../components/Sidebar/Sidebar"
import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard/Dashboard";
import "./Layout.css"
import Header from "../components/Header/Header";
import DepartmentPage from "../pages/Department/DepartmentPage";

const Layout = () =>{
    return(
        <div className="container-layout">
            <Sidebar />
            <div className="right-layout">
                <Header /> 
                <Routes>
                    <Route path="/dashboard/*"element = {<Dashboard />} />
                    <Route path="/department/*"element = {<DepartmentPage />} />
                </Routes>
            </div>
        </div>
    )
}

export default Layout