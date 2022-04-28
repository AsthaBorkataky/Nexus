import React, { useState } from 'react'
import './Header.css'
//To import the icons from material-UI icons you need to copy the commands from the links
import SearchIcon from "@mui/icons-material/Search";
//import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'reactstrap';
import { ToastContainer ,toast} from 'react-toastify';
import {BrowserRouter,Link, NavLink} from "react-router-dom";
import Home from "./Home";
function Header(){
 const [srch,setSrch]=useState({catg:"",type :"2"})
 const initialState = {
  catg: "",
  type: 2
};
useState(initialState);

 

  return (
    <div className='header'>
        {/* to use this way u need to store the images in the public folder*/}
        <Link to='/'><img
            className="header_icon"
            src="images/logo.png"
            alt=""
        /></Link>
    

        <div className='header-center'>
             <input type ="text" onChange={(e)=>{setSrch({...srch,"catg":e.target.value})}}/>
             <Link to="/allngos" state={srch}><SearchIcon/></Link>
        </div>

          <div className='header_right' id='myDiv'>
         
          <Link to='/addngo'><Button className='host' color ='warning' outline> Host Your Ngo</Button></Link>
          <Link to='/adddonor'><Button className='don' color ='warning' outline>Be a Donor</Button></Link>
          
            <Link to ='/signin'><Button className='sign' color ='warning' outline>Sign In</Button></Link>
            </div>
        </div> 
    
    
  )
}

export default Header