import React, { Fragment, useState } from 'react'
import {Button, Form,FormGroup,Label,Input,FormText} from 'reactstrap';
import Footer from './Footer';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

function AddNgo() {
const [ngoDetails,setNgoDetails] = useState({category:"animal welfare"});
let history=useNavigate();
const [id,setId] = useState(1);
const formHandler = (e) =>{
  e.preventDefault();
  axios.post("http://localhost:8096/api/saveNgo",ngoDetails).then(
  (response)=>{
    console.log(response);
    setNgoDetails(response.data);
   history('/')
},(error)=>{
    console.log(error);
    
  })
}

return (
    <div>
        <Form>
          <FormGroup>
          <Label for="Name">
              Ngo Name
            </Label>
                <Input
      id="name"
      name="name"
      placeholder="Enter Your Ngo Name"
      type="name"
      onChange={(e)=>{setNgoDetails({...ngoDetails,"name":e.target.value});
    setId(e.target.value);
    console.log(id);
    }}  
    />
  </FormGroup>
  <FormGroup>
    <Label for="email">
      Email
    </Label>
    <Input
      id="email"
      name="email"
      placeholder="Enter Ngo Email"
      type="email"
      onChange={(e)=>{setNgoDetails({...ngoDetails,"email":e.target.value})}}
    />
  </FormGroup>
  <FormGroup>
    <Label for="password">
      Password
    </Label>
    <Input
      id="password"
      name="password"
      placeholder="password"
      type="password"
      onChange={(e)=>{setNgoDetails({...ngoDetails,"password":e.target.value})}}
    />
  </FormGroup>
  <FormGroup>
          <Label for="Vision">
              VISION
            </Label>
                <Input
      id="vison"
      name="vision"
      placeholder="Enter Your Ngo Vision"
      type="text"
      onChange={(e)=>{setNgoDetails({...ngoDetails,"vision":e.target.value});
    setId(e.target.value);
    console.log(id);
    }}  
    />
  </FormGroup>
  <FormGroup>
          <Label for="Address">
              Address
            </Label>
                <Input
      id="address"
      name="address"
      placeholder="Enter Your Ngo Address"
      type="text"
      onChange={(e)=>{setNgoDetails({...ngoDetails,"address":e.target.value});
    setId(e.target.value);
    console.log(id);
    }}  
    />
  </FormGroup>
  <FormGroup>
          <Label for="loc">
              Location
            </Label>
                <Input
      id="loc"
      name="loc"
      placeholder="Enter Your Ngo State Location"
      type="text"
      onChange={(e)=>{setNgoDetails({...ngoDetails,"loc":e.target.value});
    setId(e.target.value);
    console.log(id);
    }}  
    />
  </FormGroup>
  <FormGroup>
          <Label for="Phone No">
              Phone No
            </Label>
                <Input
      id="phoneno"
      name="phoneno"
      placeholder="Enter Your Ngo Phone No"
      type="tel" pattern='[0-9]{10}'
      onChange={(e)=>{setNgoDetails({...ngoDetails,"phoneno":e.target.value});
    setId(e.target.value);
    console.log(id);
    }}  
    />
  </FormGroup>
  <FormGroup>
    <Label for="exampleSelect">
      Your Category
    </Label>
    <Input
      id="exampleSelect"
      name="select"
      type="select"
      onChange={(e)=>{setNgoDetails({...ngoDetails,"category":e.target.value})}}
    >
      <option label='Animal Welfare' value="animal welfare" />
      <option label='Forest Conservation' value="forest conservation" />
      <option label='Aiding The Old' value="aiding the old"/>
      <option label='Women Empowerment' value="women empowerment"/>
      <option label='Child Education' value="child education"/>
      <option label='Healthcare' value="healthcare"/>
      <option label='Empowering The Disabled' value="empowering the disabled"/>
      <option label='Water Conservation' value="water conservation"/>
      <option label='Food Managment' value="food managment"/>
    </Input>
  </FormGroup>
  <FormGroup>
    <Label for="desc">
      Enter Ngo Description
    </Label>
    <Input
      id="exampleText"
      name="text"
      type="textarea"
      onChange={(e)=>{setNgoDetails({...ngoDetails,"desc":e.target.value})}}
    />
    <FormGroup>
          <Label for="Campaign1">
              Enter your First Running Campaign
            </Label>
                <Input
      id="campaign1"
      name="campaign1"
      placeholder="Enter Your First Recent Campaign"
      type="text"
      onChange={(e)=>{setNgoDetails({...ngoDetails,"campaign1":e.target.value});
    setId(e.target.value);
    console.log(id);
    }}  
    />
  </FormGroup>
  <FormGroup>
          <Label for="Campaign2">
              Enter your Second Running Campaign
            </Label>
                <Input
      id="campaign2"
      name="campaign2"
      placeholder="Enter Your Second Running Campaign"
      type="text"
      onChange={(e)=>{setNgoDetails({...ngoDetails,"campaign2":e.target.value});
    setId(e.target.value);
    console.log(id);
    }}  
    />
  </FormGroup>
  <FormGroup>
          <Label for="Campaign3">
              Enter your Third Recent Campaign
            </Label>
                <Input
      id="campaign3"
      name="campaign3"
      placeholder="Enter Your Third Recent Campaign"
      type="text"
      onChange={(e)=>{setNgoDetails({...ngoDetails,"campaign3":e.target.value});
    setId(e.target.value);
    console.log(id);
    }}  
    />
  </FormGroup>
  </FormGroup>
  <Button onClick={(e)=>{console.log(ngoDetails);formHandler(e)}}>
    Submit
  </Button>
</Form>
<Footer/>
    </div>
  )
}

export default AddNgo