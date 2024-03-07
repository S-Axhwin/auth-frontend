import React from 'react'

const Form = (props) => {
  return (
    <div style={{margin: 'auto', height: '100vh', display: 'flex', justifyContent: 'center'}}>
    <div className=' modal-dialog-centered' style={{color: 'white'}}>
    <form onSubmit={props.formik.handleSubmit}>
    <div className="mb-3">
      <label className="form-label">username</label>
      <input 
        type="text"
        name='username'
        className="form-control"
        value={props.formik.values.username}
        onChange={props.formik.handleChange}
      />
    </div>
    <div className="mb-3">
      <label className="form-label">Password</label>
      <input
        type="password"
        className="form-control" 
        name='password'
        value={props.formik.values.password}
        onChange={props.formik.handleChange} />
    </div>
    <div>
    <input
      type="checkbox"
      checked={props.isDoc} 
      onChange={()=>props.setDoc(res=>!res)}
      />
    <label>login as doctor</label>
    </div>
    <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    </div>
    </div>
  )
}

export default Form