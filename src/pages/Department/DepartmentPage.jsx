import { Route, Routes } from 'react-router-dom'
import ListDepartment from '../../components/Department/ListDepartment'

const DepartmentPage = () =>{
    return(
        <>
            <Routes>
                <Route path='/' element = {<ListDepartment />}/>
            </Routes>
        </>
    )
}

export default DepartmentPage