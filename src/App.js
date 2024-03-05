import AuthOutlet from '@auth-kit/react-router/AuthOutlet';
import { Route, Routes } from 'react-router-dom';
import useSignIn from 'react-auth-kit/hooks/useSignIn';
import Login from './components/Login';
const Users = ()=>{
  return <>Users</>
}

const Products = ()=>{
  return <>Products</>
}


export default function App() {
 
 return (
   
     <Routes>
       <Route element={<AuthOutlet fallbackPath='/login' />}>
         <Route path='/' element={<Users/>} />
         <Route path='/products' element={<Products/>} />
       </Route>
       <Route path='/login' element={<Login/>}/>
     </Routes>
   
 );
}