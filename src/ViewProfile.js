import React ,{ useEffect, useState } from 'react'
import axios from 'axios';
import { toast } from "react-toastify";
import {useLocation,Link} from 'react-router-dom';


export default function ViewProfile() {
    const [ngo,setNgo]=useState([])
    const location=useLocation()
    const {id}=location.state
    const getNgoFromServer = () => {
        axios.get("http://localhost:8096/api/ngolist/"+id).then(
            (response) => {
                console.log(id);
                setNgo(response.data);
                },
            (error) => {
                console.log(error);
                toast.error(id, {position: "bottom-center",}
                );
            }
        )
    }
    useEffect(() => {
        getNgoFromServer()
    }, []);
  return (
    <div>
        <h1>This is profile {ngo.name}</h1>
      <h1>This is profile {ngo.desc}</h1>
      <h1>This is profile {ngo.category}</h1>
      <h1>This is profile {ngo.vision}</h1>
      <h1>This is profile {ngo.address}</h1>
      <h1>This is profile {ngo.phoneno}</h1>
      <h1>This is profile {ngo.loc}</h1>
      <h1>This is profile {ngo.campaign1}</h1>
      <h1>This is profile {ngo.campaign2}</h1>
      <h1>This is profile {ngo.campaign3}</h1>
      <h1>This is profile {ngo.email}</h1>
    </div>
  )
}
