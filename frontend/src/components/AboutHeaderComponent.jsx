import React from 'react'
import { Link } from "react-router-dom";


const AboutHeaderComponent = () => {
  return (
    <div className="container-xxl bg-primary page-header">
      <div className="container text-center">
          <h1 className="text-white animated zoomIn mb-3">About Us</h1>
          <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center">
                  <li className="breadcrumb-item"><Link to="/" className='text-white'>Home</Link></li>
                  <li className="breadcrumb-item"><Link to="/features" className="text-white">Features</Link></li>
                  <li className="breadcrumb-item text-white active" aria-current="page">About</li>
              </ol>
          </nav>
      </div>
    </div>
  )
}

export default AboutHeaderComponent