import React from 'react'
import useSignIn from 'react-auth-kit/hooks/useSignIn';
import { useFormik } from "formik";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const signIn = useSignIn();
  const Navi = useNavigate()
  const onSubmit = async (values) => {
    console.log("Values: ", values);
    //setError("");
    try {
      const response = await axios.post(
        "http://localhost:5001/api/login",
        values
      );
      console.log(response.data.token);
      signIn({
        auth: {
          token: response.data.token,
          type: 'Bearer'
        }
      })
      Navi("/products");
    } catch (err) {
      console.log("Error: ", err);
    }
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit,
  });

  return (
    <>
    <form onSubmit={formik.handleSubmit}> 
      <input
        name='username'
        type='text'
        value={formik.values.username}
        onChange={formik.handleChange}
        />
      <input
        type='password' 
        name='password'
        value={formik.values.password}
        onChange={formik.handleChange}
      />
      <button type='Submit'>Login</button>
    </form>
    </>
  )
}

export default Login