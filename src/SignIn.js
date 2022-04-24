import React, { Fragment, useEffect, useState } from 'react'
import {Button, Form,FormGroup,Label,Input,FormText} from 'reactstrap';
import Footer from './Footer';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Link, useNavigate } from "react-router-dom";
import './SignIn.css';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()
function SignIn(props) {
  let history= useNavigate();
  const [credentials, setCredentials] = useState({});
  const handleSubmit=(e)=>{
    console.log(credentials);
    postData(credentials);
    e.preventDefault();

};
const Route=()=> {
 history('/signin/profile')
  
}
useEffect(()=>{
  if(localStorage.getItem('token')==='in')
    Route();

});

  const postData=(data)=>{
    axios.post("http://localhost:8096/api/login",data).then(
        (response)=>{
            console.log(response);
            console.log(response.data);
          if(response.data === ""){ 
            toast.error("Invalid username and password, No such user exists",{
              position : "bottom-center",
            });}
          else {
                toast.success("Logged in!");
                localStorage.setItem('token','in')
                localStorage.setItem('ngo', JSON.stringify(response.data));
                
            Route();
            }
        },(error)=>{
            console.log(error);
            toast.error("Something went wrong!")
        }
    )
};


  return (
    <div>
          <div>
           <Link to='/'>
           <img
            className="header_icon"
            src="images/logo.png"
            alt=""
        />
        </Link> 
        </div>
        <div>
<Form className='form'>
  <div className="form-inputs">
    <Label
      className="form-label"
      for="exampleEmail"
    >
      Email
    </Label>
    <Input className='form-input'
      id="exampleEmail"
      name="email"
      placeholder="something@idk.cool"
      type="email"
      onChange={(e) => setCredentials({...credentials,"email":e.target.value})}
    />
  </div>
  <div className="form-inputs">
    <Label
      className="form-label"
      for="examplePassword"
    >
      Password
    </Label>
    <Input className='form-input'
      id="examplePassword"
      name="password"
      placeholder="Don't tell!"
      type="password"
      onChange={(e) => setCredentials({...credentials,"password":e.target.value})}
    />
  </div>
  <Button className='form-input-btn' onClick={handleSubmit}>
    SIGN IN
  </Button>
  <Link to='/'><Button color='warning' outline className='btn'>Go Back</Button></Link>
</Form>
</div>
<div>
<Footer className='footer'/>
</div>
    </div>
  )
}

export default SignIn