import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";



const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);
  
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <Link to='/' className='navbar-brand'>
          ScheduleAPI
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {/* <li className="nav-item">
              <Link to='about/' className='nav-link active'>
                About
              </Link>
            </li> */}
            <li className="nav-item">
              <Link to='workers/' className='nav-link active'>
                Workers
              </Link>
            </li>
          </ul>
        </div>

        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul className="navbar-nav ">
          {user ? (
                <>
                  {/* <Link to="/">Home</Link>
                  <Link to="/protected">Protected Page</Link> */}
                  <a className='nav-link disabled'>Hello, {user.username}</a>
                  <a className='btn btn-outline-danger' onClick={logoutUser}>Logout</a>
                </>
              ) : (
                <>
                  <li className="nav-item pe-2">
                    <Link to="/login" className='btn btn-outline-success'>Login</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/register" className='btn btn-outline-info'>Register</Link>
                  </li>
                  
                </>
              )}		
          </ul>		  
        </div>
        
      </div>
    </nav>
  )
}

export default Navbar