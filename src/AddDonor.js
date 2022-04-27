import React, { Fragment, useState,useEffect } from 'react'
import {Button, Form,FormGroup,Label,Input,FormText,Col} from 'reactstrap';
import Footer from './Footer';
import axios from 'axios';
import {useNavigate,Link} from 'react-router-dom';

import 'react-toastify/dist/ReactToastify.css';
import './AddDonor.css'
import { toast } from 'react-toastify';
toast.configure()

function AddDonor() {
    const [donorDetails,setDonorDetails] = useState({type:"Individual Donor"});
    let history=useNavigate();
    const Route=()=> {
      console.log(localStorage.getItem('token'))
     history('/signin/profile')
      
    }
    const dRoute=()=> {
      console.log(localStorage.getItem('dtoken'))
     history('/profiledonor')
      
    }
    useEffect(()=>{
      if(localStorage.getItem('token'))
        Route();
      else if(localStorage.getItem('dtoken'))
        dRoute();
    
    });
    const formHandler=(e)=>{
        console.log(donorDetails);
        postData(donorDetails);
        e.preventDefault();

    };
    const postData=(data)=>{
        axios.post("http://localhost:8096/api/savedonor",data).then(
            (response)=>{
              console.log(response);
              setDonorDetails(response.data);
              toast.success("Successfully Added");
              history("/");
          },(error)=>{
              toast.error("Unable to Register")
              console.log(error);
              
            })
          }
return (
            <div> 
                <div>
            <Link to='/'>
            <img
                className="i"
                src="images/logo.png"
                alt=""
            />
            </Link>
            </div>
            <div>
            <Form className='f'>
            <FormGroup className='f-inputs'>
            <Label for="Name" className='f-label'>
                Donor Name
                </Label>
                    <Input className='f-input'
        id="name"
        name="name"
        placeholder="Enter Your Name"
        type="name"
        onChange={(e)=>{setDonorDetails({...donorDetails,"name":e.target.value});
       
        }}  
        />
        </FormGroup>
        <FormGroup className='f-inputs'>
        <Label for="email" className='f-label' >
        Email
        </Label >
        <Input className='f-input'
        id="email"
        name="email"
        placeholder="Enter Your Email"
        type="email"
        onChange={(e)=>{setDonorDetails({...donorDetails,"email":e.target.value})}}
        />
        </FormGroup>
        <FormGroup className='f-inputs'> 
        <Label for="password" className='f-label'>
        Password
        </Label>
        <Input className='f-input'
        id="password"
        name="password"
        placeholder="password"
        type="password"
        onChange={(e)=>{setDonorDetails({...donorDetails,"password":e.target.value})}}
        />
        </FormGroup>
        <FormGroup className='f-inputs'> 
          <Label for="Phone No" className='f-label'>
              Contact Details
            </Label>
                <Input className='f-input'
      id="phoneno"
      name="phoneno"
      placeholder="Enter Your Phone No"
      type="tel" pattern='[0-9]{10}'
      onChange={(e)=>{setDonorDetails({...donorDetails,"phoneno":e.target.value});
   
  
    }}  
    />
  </FormGroup>
  <FormGroup className='f-inputs'>
    <Label for="exampleSelect" className='f-label'>
      Donor Category
    </Label>
    <Input className='f-input'
      id="exampleSelect"
      name="select"
      type="select"
      onChange={(e)=>{setDonorDetails({...donorDetails,"type":e.target.value})}}
    >
      <option label='Private Organisation' value="Private Organisation"  className='op'/>
      <option label='Public Sector Organisation' value="Public Sector Organisation" className='op'/>
      <option label='Individual Donor' value="Individual Donor" className='op'/>
     </Input>
  </FormGroup>
  <Button className ='f-input-btn' onClick={(e)=>{console.log(donorDetails);formHandler(e)}}>
          REGISTER
        </Button>
        <div className='but'>
        <Link to='/'><Button color ='warning' outline >Go Back</Button></Link>
        </div>
      
        
        </Form>
        </div>
        </div>
        )
        }

        export default AddDonor