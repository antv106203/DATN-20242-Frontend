import { Route, Routes } from 'react-router-dom'
import ListDepartment from '../../components/Department/ListDepartment'
import DetailDepartment from '../../components/Department/DetailDepartment'

const DepartmentPage = () =>{
    return(
        <>
            <Routes>
                <Route path='/' element = {<ListDepartment />}/>
                <Route path='/:_id' element = {<DetailDepartment />}/>
            </Routes>
        </>
    )
}

export default DepartmentPage