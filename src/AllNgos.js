import React, { useState, useEffect} from "react";
import Ngo from "./Ngo";
import axios from 'axios';
import { toast } from "react-toastify";
import {useLocation} from 'react-router-dom';
/*{
    name:"Ngo water",
    category:"animal",
    email:"el@gmail.com",
    phoneno:"90349",
    vision:"save water"
},
{
    name:"Ngo water",
    category:"animal",
    email:"el@gmail.com",
    phoneno:"90349",
    vision:"save water"
},
{
    name:"Ngo water",
    category:"animal",
    email:"el@gmail.com",
    phoneno:"90349",
    vision:"save water"
}*/

function AllNgos() {

    const location=useLocation()
    const {catg}=location.state
    const [ngos,setNgos]=useState([])
    const getAllNgosFromServer = () => {
        axios.get("http://localhost:8096/api/ngocategory/"+catg).then(
            (response) => {
                console.log(catg);
                setNgos(response.data);
                },
            (error) => {
                console.log(error);
                toast.error(catg, {position: "bottom-center",}
                );
            }
        )
    }
    useEffect(() => {
        getAllNgosFromServer()
    }, []);
  return (
    <div>
        <h1>Ngo Results</h1>
        <p>List of Ngos are as Follows</p>
        {
            ngos.length>0? ngos.map((item)=><Ngo key={item.id} ngo ={item}/>)
            :"No Ngos Found"
        }
    </div>
  )
}

export default AllNgos