import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../auth/Axios';
import Snackbar from './Snackbar';
import { Link } from 'react-router-dom';

const Form = () => {
  const params = useParams();
  const [username, setuser] = useState();
  const [reason, setreason] = useState();
  const [open, setOpen] = useState(false);
  useEffect(()=>{
    const fecthApi = async()=>{
      try{
        const res = await axios.get( `/api/check/doc/${params.name}`);
        //console.log(res.data);
        setuser(res.data.username);
      }catch(err){
        //console.log(err);
        setuser("doctor not found")
      }
    }
    fecthApi()
  }, [params.name])

  const handleSubmit = async(e)=>{
    e.preventDefault();
    //console.log(params);
    const [date, time] = [e.target.date.value, e.target.time.value]
    console.log(date, time);
    const conf = window.confirm("Do you want to book appointment")
    try{
      const token = localStorage.getItem("token");
      if(token && conf){
        ///api/appointment/:name
        //console.log(username);
        const res = await axios.post(`/api/appointment/${username}`, {token, date, time });
        //console.log(res);
        //console.log(res.status===200);
        if(res.status === 200){
          setreason('booked appointment');
          //console.log('insider');
          //navi("/doctors/appointment")
          setOpen(true)
        }
      }else{
        setreason("booking cancled")
        setOpen(true)
      }
    }catch(e){
      console.log(e);
      setreason('booking failed')
      setOpen(true)
    }

  }
  return (
    <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '0.9rem'}}>
        <h6  style={{color: 'white', margin: '0', padding: '0'}}>Doctor Name:</h6>
        <h6  style={{color: 'white', margin: '0', padding: '0'}}>{username || "loading"}</h6>
        <input name='date' type='date' required />
        <input name='time' type='time' required />
        <Snackbar reason={reason} open={open} setOpen={setOpen}></Snackbar>
        {open?<Link to={"/doctors/app"} >See All Appointment</Link>:null}
        
    </form>
  )
}

export default Form