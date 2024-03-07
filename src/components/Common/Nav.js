import { Outlet } from "react-router-dom"
const Nav = ()=>{
    return (
      <>
      <nav style={{display: 'flex', justifyContent: 'space-around', color: 'white'}}>
        <strong>ProHealth</strong>
        <ul style={{display: 'flex', justifyContent: 'space-around', gap: '1rem', listStyle: 'none', color: 'white'}}>
          <li>HOME</li>
          <li>DOTORS</li>
        </ul>
      </nav>
      <Outlet/>
      </>
    )
  }
  
export default Nav;