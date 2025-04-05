import Sidebar from "../components/Sidebar/Sidebar"
import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard/Dashboard";
import "./Layout.css"

const Layout = () =>{
    return(
        <div className="container-layout">
            <Sidebar />
            <div className="right">
                <Routes>
                    <Route path="/dashboard/*"element = {<Dashboard />} />
                </Routes>
            </div>
        </div>
    )
}

export default Layout