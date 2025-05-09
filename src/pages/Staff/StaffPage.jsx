import { Route, Routes } from 'react-router-dom'
import ListStaff from '../../components/Staff/ListStaff'
import CreateStaff from '../../components/Staff/CreateStaff'
import { withAuthorization } from '../../hoc'

const StaffPage = () =>{
    return(
        <>
            <Routes>
                <Route path='/' element = {<ListStaff />}/>
                <Route path='/create-staff' element = {<CreateStaff />}/>
            </Routes>
        </>
    )
}

export default withAuthorization(StaffPage, ["ADMIN", "GAURD"]);