import React, { useState, useEffect} from "react";
import Ngo from "./Ngo";
import axios from 'axios';
import { toast } from "react-toastify";
import {useLocation,Link} from 'react-router-dom';
import {Button} from 'reactstrap';
import Header from "./Header";
import './AllNgo.css'
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
    var pat;
    const location=useLocation()
    const val=location.state
    const [ngos,setNgos]=useState([])
    if(val.type==1)
         pat="http://localhost:8096/api/ngocategory/"+val.catg;
    else
        pat="http://localhost:8096/api/ngoq/"+val.catg;
    const getAllNgosFromServer = () => {

        axios.get(pat).then(
            (response) => {
                console.log(val);
                setNgos(response.data);
                },
            (error) => {
                console.log(error);
                toast.error(val, {position: "bottom-center",}
                );
            }
        )
    }
    useEffect(() => {
        getAllNgosFromServer()
    }, []);
  return (
    <div>
        <div>
        <Link to='/'>
      <img
            className="ic"
            src="images/logo.png"
            alt=""
        />
        </Link> 
         <Link to='/addngo'><Button className='hst' color ='warning' outline> Host Your Ngo</Button></Link>
         
           <Link to ='/signin'><Button className='sgn' color ='warning' outline>Sign In</Button></Link>
        </div>
        <div className="contains">
        {
            ngos.length>0? ngos.map((item)=><Ngo key={item.id} ngo ={item}/>)
            :<h2>No Ngos Found!!!</h2>
        }
        </div>
        
    </div>
  )
}

export default AllNgos