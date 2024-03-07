import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "../auth/Axios";
import NewDoc from './NewDoc'
import HeroDoc from './HeroDoc'
const ListDoc = ()=>{
    const [arr, setArr] = useState("");
    useEffect(()=>{
      const fetchApi= async()=>{
        const res = await axios.get("/doc/all")
        //console.log(res);
        setArr(res.data.respond);
      }
      fetchApi();
    }, [])
    return (
      <>
        <HeroDoc></HeroDoc>
      <div id="list" style={{display: 'grid', gridTemplateColumns: 'auto auto', gap: '0.9rem', marginTop: '3rem'}}>
        {arr?arr.map(item=>{
          //console.log(item.username);
          return (
          <div key={item.username} >
            <Link to={`/doctors/${item.username}`} style={{margin: '0rem', textDecoration: 'none'}}>
              <NewDoc name={item.username}></NewDoc>
            </Link>
          </div>)
        }):null}
      </div>
      </>
    )
  }

  export default ListDoc
  