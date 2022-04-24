import React, { Fragment, useState,useEffect } from 'react'
import {Button, Form,FormGroup,Label,Input,FormText} from 'reactstrap';
import Footer from './Footer';
import axios from 'axios';
import {useNavigate,Link} from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './AddNgo.css'
toast.configure()

function Update() {
var ngo = JSON.parse(localStorage.getItem('ngo'));
const [ngoDetails,setNgoDetails] = useState(ngo);
let history=useNavigate();

const [id,setId] = useState(1);
const formHandler = (e) =>{
  e.preventDefault();
  axios.put("http://localhost:8096/api/ngolist/"+ngo.id,ngoDetails).then(
  (response)=>{
    console.log(response);
    setNgoDetails(response.data);
    localStorage.setItem('ngo', JSON.stringify(response.data))
    toast.success("Successfully Updated")
   history('/signin/profile')
},(error)=>{
    toast.error("Unable to Update")
    console.log(error);
    
  })
}
  return (
        <div>
          <div>
            <Link to='/'>
          <img
                className="icon"
                src="images/logo.png"
                alt=""
            />
            </Link>
          </div>
          <h2>Update The Required Fields</h2>
            <div>
            <Form className='frm'>
              <FormGroup className='frm-inputs'>
              <Label for="Name" className='frm-label'>
                  Ngo Name
                </Label>
                    <Input className='frm-input'
          id="name"
          name="name"
          placeholder={ngo.name}
          type="name"
          onChange={(e)=>{setNgoDetails({...ngoDetails,"name":e.target.value});
        setId(e.target.value);
        console.log(id);
        }}  
        />
      </FormGroup>
      <FormGroup className='frm-inputs'>
        <Label for="email" className='frm-label' >
          Email
        </Label >
        <Input className='frm-input'
          id="email"
          name="email"
          placeholder={ngo.email}
          type="email"
          onChange={(e)=>{setNgoDetails({...ngoDetails,"email":e.target.value})}}
        />
      </FormGroup>
      <FormGroup className='frm-inputs'> 
        <Label for="password" className='frm-label'>
          Password
        </Label>
        <Input className='frm-input'
          id="password"
          name="password"
          placeholder="password"
          type="password"
          onChange={(e)=>{setNgoDetails({...ngoDetails,"password":e.target.value})}}
        />
      </FormGroup>
      <FormGroup className='frm-inputs'>
              <Label for="Vision" className='frm-label'>
                  VISION
                </Label>
                    <Input className='frm-input'
          id="vison"
          name="vision"
          placeholder={ngo.vision}
          type="text"
          onChange={(e)=>{setNgoDetails({...ngoDetails,"vision":e.target.value});
        setId(e.target.value);
        console.log(id);
        }}  
        />
      </FormGroup>
      <FormGroup className='frm-inputs'>
              <Label for="Address" className='frm-label'>
                  Main Office Address
                </Label>
                    <Input className='frm-input'
          id="address"
          name="address"
          placeholder={ngo.address}
          type="text"
          onChange={(e)=>{setNgoDetails({...ngoDetails,"address":e.target.value});
        setId(e.target.value);
        console.log(id);
        }}  
        />
      </FormGroup>
      <FormGroup className='frm-inputs'>
              <Label for="loc" className='frm-label'>
                  Location
                </Label>
                    <Input className='frm-input'
          id="loc"
          name="loc"
          placeholder={ngo.loc}
          type="text"
          onChange={(e)=>{setNgoDetails({...ngoDetails,"loc":e.target.value});
        setId(e.target.value);
        console.log(id);
        }}  
        />
      </FormGroup>
      <FormGroup className='frm-inputs'> 
              <Label for="Phone No" className='frm-label'>
                  Contact Details
                </Label>
                    <Input className='frm-input'
          id="phoneno"
          name="phoneno"
          placeholder={ngo.phoneno}
          type="tel" pattern='[0-9]{10}'
          onChange={(e)=>{setNgoDetails({...ngoDetails,"phoneno":e.target.value});
        setId(e.target.value);
        console.log(id);
        }}  
        />
      </FormGroup>
      <FormGroup className='frm-inputs'>
        <Label for="exampleSelect" className='frm-label'>
          Ngo Category
        </Label>
        <Input className='frm-input'
          id="exampleSelect"
          name="select"
          type="select"
          onChange={(e)=>{setNgoDetails({...ngoDetails,"category":e.target.value})}}
        >
          <option label='Animal Welfare' value="Animal Welfare"  className='option'/>
          <option label='Forest Conservation' value="Forest Conservation" className='option'/>
          <option label='Aiding The Old' value="Aiding The Old" className='option'/>
          <option label='Women Empowerment' value="Women Empowerment" className='option'/>
          <option label='Child Education' value="Child Education" className='option'/>
          <option label='Healthcare' value="Healthcare" className='option'/>
          <option label='Empowering The Disabled' value="Empowering The Disabled" className='option'/>
          <option label='Water Conservation' value="Water Conservation" className='option'/>
          <option label='Food Managment' value="Food Managment" className='option'/>
        </Input>
      </FormGroup>
      <FormGroup className='frm-inputs'>
        <Label for="desc" className='frm-label'>
          Enter Ngo Description
        </Label>
        <Input className='frm-input'
          id="exampleText"
          name="text"
          type="textarea"
          placeholder={ngo.desc}
          onChange={(e)=>{setNgoDetails({...ngoDetails,"desc":e.target.value})}}
        />
        </FormGroup>
        <FormGroup className='frm-inputs'>
              <Label for="Campaign1" className='frm-label'> 
                  Campaign 1
                </Label>
                    <Input className='frm-input'
          id="campaign1"
          name="campaign1"
          placeholder={ngo.campaign1}
          type="textarea"
          onChange={(e)=>{setNgoDetails({...ngoDetails,"campaign1":e.target.value});
        setId(e.target.value);
        console.log(id);
        }}  
        />
      </FormGroup>
      <FormGroup className='frm-inputs'>
              <Label for="Campaign2" className='frm-label'>
                  Campaign 2
                </Label>
                    <Input className='frm-input'
          id="campaign2"
          name="campaign2"
          placeholder={ngo.campaign2}
          type="textarea"
          onChange={(e)=>{setNgoDetails({...ngoDetails,"campaign2":e.target.value});
        setId(e.target.value);
        console.log(id);
        }}  
        />
      </FormGroup>
      <FormGroup className='frm-inputs'>
              <Label for="Campaign3" className='frm-label'>
                  Campaign 3
                </Label>
                    <Input className='frm-input'
          id="campaign3"
          name="campaign3"
          placeholder={ngo.campaign3}
          type="textarea"
          onChange={(e)=>{setNgoDetails({...ngoDetails,"campaign3":e.target.value});
        setId(e.target.value);
        console.log(id);
        }}  
        />
      </FormGroup>
      
      <Button className ='frm-input-btn' onClick={(e)=>{console.log(ngoDetails);formHandler(e)}}>
              CONFIRM UPDATE
            </Button>
            <div className='button'>
            <Link to='/signin/profile'><Button color ='warning' outline >Go Back</Button></Link>
            </div>
          </Form>
          </div>
        </div>
      )
}

export default Update