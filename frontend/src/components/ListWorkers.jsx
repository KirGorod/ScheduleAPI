import React from 'react'
import {useState, useEffect} from 'react'
import WorkerCard from './WorkerCard'


const ListWorkers = () => {
  let [workers, setWorkers] = useState([]);
  let [specs, setSpecs] = useState([]);

  useEffect(() => {
    getWorkers()
  }, [])

  useEffect(() => {
    getSpecs()
  }, [])


  let getWorkers = async () => {
    let response = await fetch("http://127.0.0.1:8000/api/workers/");
    let data = await response.json();
    setWorkers(data);
  } 

  let getSpecs = async () => {
    let response = await fetch("http://127.0.0.1:8000/api/specializations/");
    let data = await response.json();
    setSpecs(data)
  }

  let filterWorkers = (event) => {
    if (event.target.textContent == "All") {
      getWorkers()
    }
    setWorkers(workers.filter(
      (worker) => worker.specialization == event.target.textContent
    ))
  };


  return (
    <div>
    <div className="container-xxl bg-primary page-header">
        <div className="container text-center">
            <h1 className="text-white animated zoomIn mb-3">Our Team</h1>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center">
                    <li className="breadcrumb-item"><a className="text-white" href="#">Home</a></li>
                    <li className="breadcrumb-item"><a className="text-white" href="#">Pages</a></li>
                    <li className="breadcrumb-item text-white active" aria-current="page">Our Team</li>
                </ol>
            </nav>
        </div>
    </div>
    <div className="container-xxl py-6">
      <div className="container">
        <div className="mx-auto text-center wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: "600px"}}>
            <div className="d-inline-block border rounded-pill text-primary px-4 mb-3">Our Team</div>
            <h2 className="mb-5">Meet Our Team Members</h2>
        </div>
        <div>
          <h3 className='text-bold'>Filter by Specialization: 
            <button className='btn btn-outline-success ms-3' onClick={filterWorkers}>All</button>
            {specs.map(item => (
              <button className='btn btn-outline-info ms-3' onClick={filterWorkers} key={item}>
                {item}
              </button>
            ))}
          </h3>
        </div>
        <div className="row g-4">
        {workers.map((worker, index) => (
            <WorkerCard key={index} worker={worker} />
        ))}
        </div>
      </div>
    </div>
    </div>
  )
}

export default ListWorkers