import React, { useEffect, useState } from 'react'
import Axios from '../../auth/Axios'
import './allapp.css'
const Allapp = () => {
  const [appoint, setappoint] = useState();
  useEffect(()=>{
    const fetchApi = async()=>{
        const token = localStorage.getItem("token")
        const res =  await Axios.post("/api/doc/app", {token});
        console.log(res.data.allAppointment);
        setappoint(res.data.allAppointment);

    }
    fetchApi();
  }, [])
  return (
    <div style={{width: '100%', paddingTop: '2rem'}}>
     <table style={{width: 'fit-content', margin: 'auto'}} className='table'>
        <tr style={{color: 'white'}}>
            <th style={{width: '40%'}}>Patient</th>
            <th style={{width: '30%'}}>time</th>
            <th style={{width: '40%'}}>date</th>
        </tr>
     {appoint?appoint.map(item=>{
         return (<tr>
            <td>{item.patientName}</td>
            <td>{item.time}</td>
            <td>{item.date}</td>
            </tr>)
        })
        
        : <>{"loading"}</>}    
    </table>
    </div>
  )
}

export default Allapp