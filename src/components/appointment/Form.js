
import React from 'react';
import { Button } from '@mui/material';

const Form = () => {
  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(e.target.date.value, e.target.time.value);
  }
  return (
    <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '0.9rem'}}>
        <input name='date' type='date' required />
        <input name='time' type='time' required />
        <Button type='submit' variant='contained' >book</Button>
    </form>
  )
}

export default Form