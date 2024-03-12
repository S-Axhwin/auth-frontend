import React, { useEffect, useReducer, useState } from 'react'
import axios from '../auth/Axios'
import '../Doctor/ViewApp/allapp.css'
const ACTION = {
    INIT: 'init',
    CANCLE: 'cancle',
}

const Booked = () => {
  const reduce = (state, action)=>{
    switch(action.type){
        case ACTION.INIT:
            return action.payload;
        default:
            return state;
    }
  }
  const [state, dispatch] = useReducer(reduce, []);

  useEffect(()=>{
    const fecthApi = async()=>{
        const token = localStorage.getItem("token");
        try{
            const res = await axios.post("/api/app", {token});
            console.log(res.data.appointment);
            dispatch({type: ACTION.INIT, payload: res.data.appointment})
        }catch(e){
            
        }
    }
    fecthApi();
  }, [])
  return (
    <div >
    <table  className='table' style={{width: 'fit-content', margin: 'auto'}} >
        <tr style={{color: 'white'}}>
            <th style={{width: "50%"}}>DoctorName</th>
            <th style={{width: "20%"}}>Time</th>
            <th style={{width: "30%"}}>Date</th>
        </tr>
    {state?.map((item)=>{
        return (
            <tr>
                <td >{item.username}</td>
                <td>{item.time}</td>
                <td>{item.date}</td>
            </tr>
        )
    })}
    </table>
    </div>
  )
}

export default Booked