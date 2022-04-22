import { LineAxisOutlined } from '@mui/icons-material';
import React, { Fragment, useState } from 'react'
import {Button, Form,FormGroup,Label,Input,FormText} from 'reactstrap';
import Footer from './Footer';
import axios from 'axios';

function AddNgo() {
const [ngoDetails,setNgoDetails] = useState({category:"animal welfare"});
const formHandler = (e) =>{
  e.preventDefault();
  axios.post("http://localhost:8096/api/saveNgo",ngoDetails).then(
  (response)=>{
    console.log(response);
    setNgoDetails(response.data);

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
      placeholder="enter your ngo name"
      type="name"
      onChange={(e)=>{setNgoDetails({...ngoDetails,"name":e.target.value})}}
      
    />
  </FormGroup>
  <FormGroup>
    <Label for="email">
      Email
    </Label>
    <Input
      id="email"
      name="email"
      placeholder="enter Ngo email"
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
      placeholder="password placeholder"
      type="password"
      onChange={(e)=>{setNgoDetails({...ngoDetails,"password":e.target.value})}}
    />
  </FormGroup>
  <FormGroup>
    <Label for="exampleSelect">
      Select
    </Label>
    <Input
      id="exampleSelect"
      name="select"
      type="select"
      onChange={(e)=>{setNgoDetails({...ngoDetails,"category":e.target.value})}}
    >
      <option label='Animal Welfare' value="animal" />
      
      <option>
        2
      </option>
      <option>
        3
      </option>
      <option>
        4
      </option>
      <option>
        5
      </option>
    </Input>
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