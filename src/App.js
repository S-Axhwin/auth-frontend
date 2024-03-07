import AuthOutlet from '@auth-kit/react-router/AuthOutlet';
import { Route, Routes, useSearchParams } from 'react-router-dom';
import Login from './components/login/Login';
import Products from './components/Common/Products';
import { Outlet } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from './components/auth/Axios';
import Nav from './components/Common/Nav'
import ListDoc from './components/Doctor/Doctor'
import DocCard from "./components/Doctor/NewDoc"
import HeroDoc from './components/Doctor/HeroDoc'
import Wrapper from './components/appointment/Wrapper';
const Users = ()=>{
  return <>Users</>
}



export default function App() {
 
 return (
   
     <Routes>
       <Route element={<AuthOutlet fallbackPath='/login' />}>
         <Route path='/' element={<Nav/>} >
          <Route path='/doctors' element={<ListDoc></ListDoc>}/>
          <Route path='doctors/:name' element={<DocCard/>}/>
          <Route path='doctors/appointment/:name' element={<Wrapper></Wrapper>}></Route>
          <Route path='/test' element={<Wrapper></Wrapper>}></Route>
         </Route>
       </Route>
       <Route path='/login' element={<Login/>}/>
     </Routes>
   
 );
}