import { Button } from 'reactstrap';
import React, {Link, useEffect, useState} from 'react'
import {Modal,ModalBody,ModalFooter,ModalHeader} from 'reactstrap'
import { Route, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Profile.css"
import MailIcon from '@mui/icons-material/Mail';
import CallIcon from '@mui/icons-material/Call';
import base_url from "./bootapi";



function Profile() {
  var x = localStorage.getItem("token");
  let history=useNavigate();
  var ngo = JSON.parse(localStorage.getItem('ngo'));
  console.log(ngo.id)
  const [image, setImage] = useState('');
    
  useEffect(() => {
      fetchCategoryImage(ngo.id)
  },[]);

  const fetchCategoryImage = (id ) => {
      if (id !== null) {
          axios.get(`${base_url}/ngo/image/`+id, { responseType: 'blob' }).then(
              response => {
              if (response.data) {
                  setImage(URL.createObjectURL(response.data))
              } else {

              }
          }).catch(error => {
              console.log("Error", error);
          })
      }
  }
  const Route=()=>{
    localStorage.clear();
    toast.success("Logged out Successfully")
    history('/');
  }
  const Rout=()=>{
    history('/update');
  }
  const Back=()=>{
    history('/');
  }
  const Donations=()=>{
    history('/ngodonations');
  }
  
  
  const Delete=()=>{
    localStorage.clear();
    axios.delete(`${base_url}/ngolist/`+ngo.id).then(
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
    <div className='full'>
      <div className='in'>
         <Button  className='ed' onClick={()=>Rout()}>Edit Profile</Button>
         <Button className='de' onClick={()=>Donations()}>Donations</Button>
         <Button className='de' onClick={()=>Back()}>Home</Button>
         <Button className='de' onClick={()=>Delete()} >Delete</Button>
         <Button className='de' onClick={()=>Route()} >Logout</Button>
         <h1>{ngo.name}</h1>
    </div>
    <div  >
      <img className='im' src={image}/>
</div>
    <div className='ds'>
      <h4>{ngo.desc}</h4>
      </div>
      <div className='cat'>
      <h4 >Our Ngo works in the domain of: {ngo.category}</h4>
      </div>
      <div className='vi'>
      <h4>Our Vision: {ngo.vision}</h4>
      </div>
      <div className='loc'>
      <h4>We are working dilligently towards our Vision in the following States: {ngo.loc}</h4>
      </div>
      <div className='cm'>
        <h2>Currently Running Campaigns</h2>
      </div>
      <div className='cm1'><h4>{ngo.campaign1}</h4></div>
      <div className='cm1'> <h4>{ngo.campaign2}</h4></div>
      <div className='cm1'><h4>{ngo.campaign3}</h4></div>
      <div className='ad'><h3>Address :</h3> <h4>{ngo.address}</h4></div>
      <div className='ph'>
      <h4><MailIcon/>{ngo.email}</h4>
      <h4><CallIcon/>{ngo.phoneno}</h4>
      </div>
      
    </div>
  )
}

export default Profile