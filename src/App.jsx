/* eslint-disable no-unused-vars */
import { useState } from 'react'
// import './App.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Login from './pages/Login/Login'
import { useDispatch, useSelector } from 'react-redux'
import PrivateRoute from './components/PrivateRoute'
import Layout from './layout/Layout'

const  App = () => {

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to='/at/dashboard' />} />
          <Route path='/login' element = { <Login />}/>
          <Route element={<PrivateRoute isAuthenticated={isAuthenticated} dispatch={dispatch} />}>
            <Route path='/at/*' element={<Layout />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
