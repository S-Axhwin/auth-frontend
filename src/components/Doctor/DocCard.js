import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "../auth/Axios";
import doctor from '../doctor.png'

const DocCard = (props)=>{
    const params = useParams();
    const [docName, setdocName] = useState();
    const [notfound, setNotfound] = useState();
    useEffect(()=>{
      
      const fetchApi = async()=>{
        const res = await axios.get(`/doc/${params.name}`)
        //console.log(res.data);
        setdocName(res.data.username);
        if(!res.data.username){
          setNotfound(true);
        }
      }
      fetchApi();
  
    }, [])
    return (
      <div style={{display: 'flex', justifyContent: 'center'}}>
        {!docName?notfound?<>not doctor found with name: {params.name}</>:<>loading</>:
        <>
      <img src={doctor} width={'300vw'} height={'auto'} style={{borderRadius: '1rem 0 0 1rem'}}></img>
      <div style={{width: 'fit-content', backgroundColor: 'gray', padding: '4rem', borderRadius: '0 1rem 1rem 0'}} >
        doctor name: {docName}
      </div>
        </>
      }
      </div>
    )
  }
  
export default DocCard