import React,{ useEffect, useState }  from 'react'
import { Link, useNavigate} from 'react-router-dom';
import {Button} from 'reactstrap'
import axios from 'axios';
import { toast } from 'react-toastify';
import Ngo from "./Ngo"
import './ProfileDonor.css'
import MailIcon from '@mui/icons-material/Mail';
import CallIcon from '@mui/icons-material/Call';
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
    <div className='fl'>
      <div>
      <Link to='/'>
           <img
            className="hr_icon"
            src="images/logo.png"
            alt=""
        />
        </Link> 
        <Button  className='log' onClick={()=>Route()}>Logout</Button>
      </div>
      <div className='nm '>
     <h2> {donor.name}</h2>
     </div>
     <div className='det'>
    <h4><CallIcon /> {donor.phoneno}</h4>
    <h4><MailIcon /> {donor.email}</h4>
    </div>
    <div className="ctns">
        {
            donation.length>0? donation.map((item)=><h4>You made a donation of an Amount of : Rs {item.donatedamt} to {item.volunteerto} foundation, under the donation name: {item.donorname}</h4>)
            :<h4>No Donations Yet!!</h4>
        }  
      </div>
       
    
    </div>
  )
}

export default ProfileDonor