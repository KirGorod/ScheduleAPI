import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AuthContext from "./context/AuthContext";
import { useContext } from 'react'

import Home from './Pages/Home'
import About from './Pages/About'
import ErrorPage from './Pages/ErrorPage'
import WorkersPage from './Pages/WorkersPage'
import WorkerPage from './Pages/WorkerPage'
import LoginPage from './Pages/LoginPage'
import RegisterPage from './Pages/RegisterPage'
import FeaturesPage from './Pages/FeaturesPage'
import ServicePage from './Pages/ServicePage'

const RoutesHelper = () => {

  const { user, logoutUser } = useContext(AuthContext);

  return (
    <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/features' element={<FeaturesPage />} />
            <Route path='/services' element={<ServicePage />} />
            <Route path='/workers' element={<WorkersPage />} />
            {user ? 
            (<><Route path='/worker/:worker_id' element={<WorkerPage />} /></>) 
            : 
            (<><Route path='/worker/:worker_id' element={<LoginPage />} /></>)}
            <Route path='/worker/:worker_id' element={<WorkerPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='*' element={<ErrorPage />} />
    </Routes>
  )
}

export default RoutesHelper