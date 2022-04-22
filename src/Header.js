import React from 'react'
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
function Header() {

  const btnHandle =()=>{
    toast("this is my toast messsage");
  };

  return (
    <div className='header'>
        {/* to use this way u need to store the images in the public folder*/}
        <img
            className="header_icon"
            src="images/logo.png"
            alt=""
        />
    

        <div className='header-center'>
             <input type ="text"/>
             <SearchIcon/>
        </div>

          <div className='header_right'>
         
          <Link to='addngo'><Button color ='warning' outline> Host Your Ngo</Button></Link>
          
            <Link to ='signin'><Button color ='warning' outline>Sign In</Button></Link>
            </div>
        </div> 
    
    
  )
}

export default Header