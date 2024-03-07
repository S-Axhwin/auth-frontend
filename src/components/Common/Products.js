import React from 'react'
import axios from "../auth/Axios"
import { Outlet } from 'react-router-dom'


const Products = () => {
const check = async () => {
    try {
        const token = localStorage.getItem("token")
        const res = await axios.post("/api/token", {token} );
        console.log(res);
    } catch (error) {
        console.error(error);
    }
}
  return (
    <div>
        Products <br/>
        <button
        className='btn btn-primary'
        onClick={check}>
            click me
        </button>
        <Outlet></Outlet>
    </div>
  )
}

export default Products