import React from 'react'
import { useState, useEffect } from 'react'
import WorkerCard from './WorkerCard'

const TeamComponent = () => {
    let [workers, setWorkers]=useState([]);

    useEffect(() => {
      getWorkers()
    }, [])
  
    let getWorkers = async () => {
      let response = await fetch("http://127.0.0.1:8000/api/workers/?limit=4&offset=1/")
      let data = await response.json()
      setWorkers(data.results)
    } 

  return (
    <div className="container-xxl py-6">
    <div className="container">
        <div className="mx-auto text-center wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: "600px"}}>
            <div className="d-inline-block border rounded-pill text-primary px-4 mb-3">Our Team</div>
            <h2 className="mb-5">Meet Our Team Members</h2>
        </div>
        <div className="row g-4">
        {workers.map((worker, index) => (
            <WorkerCard key={index} worker={worker} />
        ))}
        </div>
    </div>
</div>
  )
}

export default TeamComponent