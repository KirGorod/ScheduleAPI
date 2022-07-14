import React, {useState, useEffect, useRef, useCallback } from 'react'
import { useParams } from 'react-router-dom'
import DateTimePicker from 'react-datetime-picker';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import { useContext } from "react";
import AuthContext from "../context/AuthContext";


const localizer = momentLocalizer(moment)


const WorkerPage = () => {
  const [appDate, setAppDate] = useState(new Date());
  let { worker_id } = useParams();
  let [worker, setWorker]= useState([]);
  let [appointmens, setAppointments] = useState([])
  const { user, logoutUser } = useContext(AuthContext);
  
  useEffect(() => {
    getWorker()
    getAppointments()
  }, [])

  let getWorker = async () => {
    let response = await fetch(`http://127.0.0.1:8000/api/worker/${worker_id}/`)
    let data = await response.json()
    setWorker(data)
  }
  
  let convertEvent = (appointments) => {
    let response = []
    for (let appointment of appointments) {
      let data = {
        id: appointment.id,
        title: `Appointment with ${appointment.customer_data['first_name']} ${appointment.customer_data['last_name']}`,
        start: new Date(`${appointment.date}T${appointment.start_time}`),
        end: new Date(`${appointment.date}T${appointment.end_time}`)
      }
      response.push(data)
    }

    return response
  }

  let getAppointments = async () => {
    let response = await fetch(`http://127.0.0.1:8000/api/appointments?worker=${worker_id}`)
    let data = await response.json()
    setAppointments(data)
  }

  let addAppointment = async () => {
    let data = {
      start_time: appDate.getHours() + ':' + appDate.getMinutes(),
      end_time: (appDate.getHours() + 1) + ':' + appDate.getMinutes(),
      date: appDate.getFullYear() + '-' + (appDate.getMonth() + 1) + '-' + appDate.getDate(),
      customer: user.user_id,
      worker: worker_id,
    }

    let response = await fetch(`http://127.0.0.1:8000/api/appointments/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": 'application/json'
      },
      body: JSON.stringify(data)
    })
    let content = await response.json()
    if (response.ok) {
      window.location.reload();
    } else {
      window.alert(content['non_field_errors'])
    }
  
    // window.location.reload();
    // setAppointments(appointmens => ([...appointmens, data]))
    // console.log("APP: ", appointmens)
  }


  // let myEventsList = [
  //   {
  //     id: 4,
  //     title: "Some Event",
  //     start: new Date(2022, 6, 9, 0, 0, 0),
  //     end: new Date(2022, 6, 9, 1, 0, 0)
  //   },
  // ]



  const clickRef = useRef(null)

  useEffect(() => {
    /**
     * What Is This?
     * This is to prevent a memory leak, in the off chance that you
     * teardown your interface prior to the timed method being called.
     */
    return () => {
      window.clearTimeout(clickRef?.current)
    }
  }, [])

  const onSelectSlot = useCallback((slotInfo) => {
    /**
     * Here we are waiting 250 milliseconds (use what you want) prior to firing
     * our method. Why? Because both 'click' and 'doubleClick'
     * would fire, in the event of a 'doubleClick'. By doing
     * this, the 'click' handler is overridden by the 'doubleClick'
     * action.
     */
    window.clearTimeout(clickRef?.current)
    clickRef.current = window.setTimeout(() => {
      setAppDate(slotInfo['start'])
    }, 250)
  }, [])


    const myRef = useRef(null)
    const executeScroll = () => myRef.current.scrollIntoView()    
 
  return (
    <div>
      {/* <div className="container-xxl bg-primary hero-header">
        <h3>{worker.first_name} {worker.last_name}</h3>
        <small>{worker.specialization}</small>
        <div>{worker.info}</div>
        <div>Worker Calendar:</div>
      </div> */}
      <div className="container-xxl bg-primary page-header">
      <div className="container">
          <div className="row g-5 align-items-center">
              <div className="col-lg-6 text-center text-lg-start">
                  <h1 className="text-white mb-4 animated zoomIn">{worker.first_name} {worker.last_name}</h1>
                  <img className="img-fluid rounded-circle w-25 m-2 mb-4" src={worker.avatar} alt=""/>
                  <p className="text-white pb-3 animated zoomIn fst-italic">{worker.slogan}</p>
                  <p className="text-white pb-3 animated zoomIn"><span className="fw-bold">Specialization:</span> {worker.specialization}</p>
              </div>
              <div className="col-lg-6 text-center text-lg-start">
                  <p className="text-white pb-3 animated zoomIn">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis fugit quibusdam neque officiis quidem, quos praesentium repudiandae, nulla provident voluptatum optio consequuntur exercitationem modi cumque deleniti magnam accusantium dolorum veniam, earum rem corrupti cupiditate ullam iste temporibus. In possimus aliquam quaerat? Rerum, dolores magni? Doloremque minima beatae omnis nesciunt incidunt.</p>
                  <button onClick={executeScroll} className="btn btn-outline-light rounded-pill border-2 py-3 px-5 animated slideInRight">Book an Appointment</button>
              </div>
          </div>
      </div>
    </div>
    <div ref={myRef}>
      <Calendar
        localizer={localizer}
        events={convertEvent(appointmens)}
        views={['month','work_week', 'day']}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        onSelectSlot={onSelectSlot}
        selectable
      />
    </div>
      <p>Select appointment time: </p>
      <div>
        <DateTimePicker onChange={setAppDate} value={appDate} format="y-MM-dd hh:mm a" />
      </div>
      <button onClick={addAppointment}>Submit</button>
    </div>
  )
}

export default WorkerPage