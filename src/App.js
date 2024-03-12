import AuthOutlet from '@auth-kit/react-router/AuthOutlet';
import { Route, Routes } from 'react-router-dom';
import Login from './components/login/Login';
import {  useState } from 'react';
//import axios from './components/auth/Axios';
import Nav from './components/Common/Nav'
import ListDoc from './components/Doctor/Doctor'
import DocCard from "./components/Doctor/NewDoc"
//import HeroDoc from './components/Doctor/HeroDoc'
import Wrapper from './components/appointment/Wrapper';
import Booked from './components/appointment/Booked';
import Allapp from './components/Doctor/ViewApp/Allapp';
//import axios from './components/auth/Axios';
//import Cal from "./components/appointment/Cal"




export default function App() {
 const [isDoc, setDoc] = useState(false);
 //const [pri, setPri] = useState(false);

 return (
     <Routes>
       <Route element={<AuthOutlet fallbackPath='/login' />}>
        {}
         <Route path='/' element={<Nav/>} >
          <Route path='/doctors' element={<ListDoc></ListDoc>}/>
          <Route path='doctors/:name' element={<DocCard/>}/>
          <Route path='doctors/app' element={<Booked></Booked>}></Route>
          <Route path='doctors/appointment/:name' element={<Wrapper></Wrapper>}></Route>
          <Route path='/test' element={<Allapp></Allapp>}></Route>
         </Route>
       </Route>
       <Route path='/login' element={<Login isDoc={isDoc} setDoc={setDoc}/>}/>
     </Routes>
   
 );
}