import React from 'react'

const ServiceHeaderComponent = () => {
  return (
    <div className="container-xxl bg-primary page-header">
    <div className="container text-center">
            <h1 className="text-white animated zoomIn mb-3">Services</h1>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center">
                    <li className="breadcrumb-item"><a className="text-white" href="#">Home</a></li>
                    <li className="breadcrumb-item"><a className="text-white" href="#">Pages</a></li>
                    <li className="breadcrumb-item text-white active" aria-current="page">Services</li>
                </ol>
            </nav>
        </div>
    </div>
  )
}

export default ServiceHeaderComponent