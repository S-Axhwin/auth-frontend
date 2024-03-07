import React, { useState } from 'react'
import useSignIn from 'react-auth-kit/hooks/useSignIn';
import { useFormik } from "formik";
import axios from '../auth/Axios';
import { useNavigate } from 'react-router-dom';
import Form from './Form';

const Login = () => {
  const signIn = useSignIn();
  const Navi = useNavigate();
  const [isDoc, setDoc] = useState(false);
  const onSubmit = async (values) => {
    
    //setError("");
    try {
      const response = await axios.post(`api/login/${isDoc?"doc":"user"}`,
        values
      );
      console.log(response.data.token);
      signIn({
        auth: {
          token: response.data.token,
          type: 'Bearer'
        }
      })
      localStorage.setItem("token", response.data.token)
      Navi("/doctors");
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
    <Form formik={formik} setDoc={setDoc} isDoc={isDoc} ></Form>
  )
}

export default Login
