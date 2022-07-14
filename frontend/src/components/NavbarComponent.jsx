import React from 'react'
import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";



const NavbarComponent = () => {
  const { user, logoutUser } = useContext(AuthContext);
  
  return (
    <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
        <Link to="/" className="navbar-brand p-0">
          <h1 className="m-0">Schedule API</h1>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="fa fa-bars"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto py-0">
                <NavLink to="/" className={(navData) => (navData.isActive ? 'nav-item nav-link active' : 'nav-item nav-link')}>Home</NavLink>
                <NavLink to='/about' className={(navData) => (navData.isActive ? 'nav-item nav-link active' : 'nav-item nav-link')}>About</NavLink>
                {/* <NavLink to='/service' className={(navData) => (navData.isActive ? 'nav-item nav-link active' : 'nav-item nav-link')}>Service</NavLink> */}
                <NavLink to='/workers' className={(navData) => (navData.isActive ? 'nav-item nav-link active' : 'nav-item nav-link')}>Workers</NavLink>
                {/* <div className="nav-item dropdown">
                    <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                    <div className="dropdown-menu m-0">
                        <a href="feature.html" className="dropdown-item">Features</a>
                        <a href="quote.html" className="dropdown-item">Free Quote</a>
                        <a href="team.html" className="dropdown-item">Our Team</a>
                        <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                        <a href="404.html" className="dropdown-item">404 Page</a>
                    </div>
                </div>
                <a href="contact.html" className="nav-item nav-link">Contact</a> */}
            </div>

            {user ? (
                <>
                  {/* <Link to="/">Home</Link>
                  <Link to="/protected">Protected Page</Link> */}
                  <a className='nav-link disabled text-white ms-3 me-3'>Hello, {user.username}</a>
                  <a className='btn btn-outline-danger' onClick={logoutUser}>Logout</a>
                </>
              ) : (
                <>
                  <Link to="/login" className='btn btn-light rounded-pill text-primary py-2 px-4 ms-lg-5'>Login</Link>
                  <Link to="/register" className='btn btn-light rounded-pill text-primary py-2 px-4 ms-lg-3'>Register</Link>
                  
                </>
              )}	
            
        </div>
    </nav>
  )
}

export default NavbarComponent