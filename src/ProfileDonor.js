import React,{ useEffect, useState }  from 'react'
import { useNavigate} from 'react-router-dom';
import {Button} from 'reactstrap'
import axios from 'axios';
import { toast } from 'react-toastify';
import Ngo from "./Ngo"
toast.configure()

function ProfileDonor() {
    let history=useNavigate();
    //const [ngo,setNgo]=useState([])
    //const [donor,setDonor]=useState()
    var donor=JSON.parse(localStorage.getItem('donor'));
    console.log(donor);
   // setDonor(JSON.parse(localStorage.getItem('donor')));
    var donation=donor.donatedetails;
    console.log(donation)
     useEffect(() => {
      var donor=JSON.parse(localStorage.getItem('donor'));
       axios.get("http://localhost:8096/api/donor/"+donor.id).then(
         (response) => {
            // setDonor(response.data);
             },
         (error) => {
             console.log("Lets Donate");
         }
     )
   },[]);
       
    const Route=()=>{
        localStorage.clear();
        toast.success("Logged out Successfully")
        history('/');
      }
  return (
    <div>
    <h1>This is Donor Profile: {donor.name}</h1>
    <h1>This is Donor Profile: {donor.phoneno}</h1>
    <h1>This is Donor Profile{donor.email}</h1>
    <h1>This is Donor Profile{donor.type}</h1>
    <div className="contains">
        {
            donation.length>0? donation.map((item)=><h2>{item.volunteerto},{item.donorname},{item.donatedamt},</h2>)
            :<h2>No Donations Found!!!</h2>
        }  
      </div>
       
    <Button onClick={()=>Route()}>Logout</Button>
    </div>
  )
}

export default ProfileDonor