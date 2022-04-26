import React from 'react'
import { useNavigate } from 'react-router-dom';
import {Button} from 'reactstrap'
import { toast } from 'react-toastify';
toast.configure()

function ProfileDonor() {
    let history=useNavigate();
    const Route=()=>{
        localStorage.clear();
        toast.success("Logged out Successfully")
        history('/');
      }
  return (
    <div>
    <h1>This is Donor Profile</h1>
    <Button onClick={()=>Route()}>Logout</Button>
    </div>
  )
}

export default ProfileDonor