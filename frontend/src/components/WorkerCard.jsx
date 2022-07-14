import React from 'react'
import {Link} from 'react-router-dom'

const ListWorker = ({worker}) => {
  
  return (
    // <div className="col-3">
    //   <div className="card" style={{width: "18rem"}}>
    //     <img src={ require("../assets/placeholder.jpeg")} />
    //     <div className="card-body">
    //       <h5 className="card-title">{worker.first_name} {worker.last_name}</h5>
    //       <p className="card-text">{worker.info}</p>
    //       <Link to={`/worker/${worker.id}`} className='btn btn-primary'>More</Link>
    //     </div>
    //   </div>
    // </div>
    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
    <div className="team-item h-100">
            <h5>{worker.first_name} {worker.last_name}</h5>
            <img className="img-fluid rounded-circle w-100 mb-4" src={worker.avatar} alt=""/>
            <p className="mb-4">{worker.slogan}</p>
            <div className="d-flex justify-content-center">
                {/* <a className="btn btn-square text-primary bg-white m-1" href=""><i className="fab fa-facebook-f"></i></a>
                <a className="btn btn-square text-primary bg-white m-1" href=""><i className="fab fa-twitter"></i></a>
                <a className="btn btn-square text-primary bg-white m-1" href=""><i className="fab fa-linkedin-in"></i></a> */}
                <Link to={`/worker/${worker.id}`} className='btn btn-square text-primary bg-white m-1'><i className="bi bi-calendar-check fa-2x"></i></Link>
            </div>
        </div>
    </div>
  )
}

export default ListWorker