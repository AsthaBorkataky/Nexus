import React, { useState, useEffect} from "react";
import Ngo from "./Ngo";
import axios from 'axios';
import { toast } from "react-toastify";
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

    const [ngos,setNgos]=useState([])
    const getAllNgosFromServer = () => {
        axios.get("http://localhost:8096/api/ngolist").then(
            (response) => {
                console.log(response.data);
                setNgos(response.data);
                },
            (error) => {
                console.log(error);
                toast.error("something went wrong", {position: "bottom-center",}
                );
            }
        )
    }
    useEffect(() => {
        getAllNgosFromServer()
    }, []);
  return (
    <div>
        <h1>All Ngos</h1>
        <p>List of Ngos are as Follows</p>
        {
            ngos.length>0? ngos.map((item)=><Ngo key={item.id} ngo ={item}/>)
            :"No Ngos Found"
        }
    </div>
  )
}

export default AllNgos