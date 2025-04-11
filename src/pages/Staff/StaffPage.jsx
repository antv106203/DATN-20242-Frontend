import { Route, Routes } from 'react-router-dom'
import ListStaff from '../../components/Staff/ListStaff'

const StaffPage = () =>{
    return(
        <>
            <Routes>
                <Route path='/' element = {<ListStaff />}/>
            </Routes>
        </>
    )
}

export default StaffPage