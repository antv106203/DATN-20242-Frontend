import { Route, Routes } from 'react-router-dom'
import ListStaff from '../../components/Staff/ListStaff'
import CreateStaff from '../../components/Staff/CreateStaff'
import { withAuthorization } from '../../hoc'
import StaffDetail from '../../components/Staff/StaffDetail'

const StaffPage = () =>{
    return(
        <>
            <Routes>
                <Route path='/' element = {<ListStaff />}/>
                <Route path='/create-staff' element = {<CreateStaff />}/>
                <Route path='/:_id' element = {<StaffDetail/>}/>
            </Routes>
        </>
    )
}

export default withAuthorization(StaffPage, ["ADMIN", "GAURD"]);