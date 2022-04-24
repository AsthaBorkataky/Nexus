import { Button } from 'reactstrap';
import React, {Link, useEffect} from 'react'
import {Modal,ModalBody,ModalFooter,ModalHeader} from 'reactstrap'
import { Route, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

function Profile() {
  var x = localStorage.getItem("token");
  let history=useNavigate();
  var ngo = JSON.parse(localStorage.getItem('ngo'));
  const Route=()=>{
    localStorage.clear();
    toast.success("Logged out Successfully")
    history('/');
  }
  const Rout=()=>{
    history('/update');
  }
  
  
  const Delete=()=>{
    localStorage.clear();
    axios.delete("http://localhost:8096/api/ngolist/"+ngo.id).then(
    (response)=>{
      console.log(response);
      toast.success("Successfully Deleted")
     history('/')
  },(error)=>{
      toast.error("Unable to Delete")
      console.log(error);
      
    })

  }
  
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
      <Button onClick={()=>Rout()}>Edit Profile</Button>
      <Button onClick={()=>Route()} >Logout</Button>
      <Button onClick={()=>Delete()} >Delete</Button>
      
    </div>
  )
}

export default Profile