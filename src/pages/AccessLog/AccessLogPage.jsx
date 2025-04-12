import { Route, Routes } from 'react-router-dom'
import ListAccessLog from '../../components/AccessLog/ListAccessLog'

const AccessLogPage = () =>{
    return(
        <>
            <Routes>
                <Route path='/' element = {<ListAccessLog />}/>
            </Routes>
        </>
    )
}

export default AccessLogPage