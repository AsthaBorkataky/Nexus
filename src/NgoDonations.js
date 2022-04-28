import { Domain } from '@mui/icons-material';
import React from 'react'
import { Button } from 'reactstrap';
import {Link } from "react-router-dom";
import Footer from './Footer';

function NgoDonations() {
    var ngo = JSON.parse(localStorage.getItem('ngo'));
  return (
      <div>
    <div className='ngd'>
        <h2>Donations Received</h2>
        <div className="cntns">
        {
            ngo.donatedetails.length>0?ngo.donatedetails.map((item)=><h4>The Ngo Received donation of an Amount of : Rs {item.donatedamt},  under the donation name: {item.donorname}</h4>)
            :<h4>No Donations Yet!!</h4>
        }  
      </div>
      <div>
        <Link to ="/signin/profile"><Button className='g'>Back To Profile</Button></Link>
        </div>
    </div>
      <Footer/>
      </div>
  )
}

export default NgoDonations