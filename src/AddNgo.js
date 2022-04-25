import React, { Fragment, useState,useEffect } from 'react'
import {Button, Form,FormGroup,Label,Input,FormText,Col} from 'reactstrap';
import Footer from './Footer';
import axios from 'axios';
import {useNavigate,Link} from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './AddNgo.css'
toast.configure()

function AddNgo() {
const [ngoDetails,setNgoDetails] = useState({category:"animal welfare"});
var [photo, setPhoto] = useState(null);
let history=useNavigate();
const Route=()=> {
  history('/signin/profile')
   
 }
 useEffect(()=>{
   if(localStorage.getItem('token')==='in')
     Route();
 
 });
const [id,setId] = useState(1);
const uploadImage = (event) => {

  setPhoto(event.target.files[0]);
  console.log(photo);

}
const formHandler=(e)=>{
  console.log(ngoDetails);
  postDatatoServer(ngoDetails);
  e.preventDefault();
};
const  postDatatoServer= (data) =>{
  var formData = new FormData();
  formData.append('file', photo);
  formData.append('email', data['email']);
  formData.append('name', data['name']);
  formData.append('vision', data['vision']);
  formData.append('loc', data['loc']);
  formData.append('phoneno', data['phoneno']);
  formData.append('address', data['address']);
  formData.append('password', data['password']);
  formData.append('desc', data['desc']);
  formData.append('category', data['category']);
  formData.append('campaign1', data['campaign1']);
  formData.append('campaign2', data['campaign2']);
  formData.append('campaign3', data['campaign3']);
  axios.post("http://localhost:8096/api/addaNgo",formData,{ headers: {
    "Content-Type": "multipart/form-data",
  },
}).then(
  (response)=>{
    console.log(response);
    setNgoDetails(response.data);
    toast.success("Successfully Added")
   history('/')
},(error)=>{
    toast.error("Unable to Sign Up")
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
        <div>
        <Form className='frm'>
          <FormGroup className='frm-inputs'>
          <Label for="Name" className='frm-label'>
              Ngo Name
            </Label>
                <Input className='frm-input'
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
  <FormGroup className='frm-inputs'>
    <Label for="email" className='frm-label' >
      Email
    </Label >
    <Input className='frm-input'
      id="email"
      name="email"
      placeholder="Enter Ngo Email"
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
      placeholder="Enter Your Ngo Vision"
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
      placeholder="Enter Your Ngo Address"
      type="text"
      onChange={(e)=>{setNgoDetails({...ngoDetails,"address":e.target.value});
    setId(e.target.value);
    console.log(id);
    }}  
    />
  </FormGroup>
  <FormGroup className='frm-inputs'>
          <Label for="loc" className='frm-label'>
              Working IN
            </Label>
                <Input className='frm-input'
      id="loc"
      name="loc"
      placeholder="List the States Actively Working in"
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
      placeholder="Enter Your Ngo Phone No"
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
      placeholder="Details of Running Campaign"
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
      placeholder="Details of Running Campaign"
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
      placeholder="Details of Running Campaign"
      type="textarea"
      onChange={(e)=>{setNgoDetails({...ngoDetails,"campaign3":e.target.value});
    setId(e.target.value);
    console.log(id);
    }}  
    />
  </FormGroup>
  <FormGroup row className='frm-inputs'> 
    <Label for="exampleFile" sm={2} className='frm-label'>
      Upload Banner
    </Label>
    <Col sm={10}>
      <Input
        id="exampleFile"
        name="file"
        type="file"
        onChange = {uploadImage} className='frm-input'
      />
    </Col>
  </FormGroup>
  
  <Button className ='frm-input-btn' onClick={(e)=>{console.log(ngoDetails);formHandler(e)}}>
          REGISTER
        </Button>
        <div className='button'>
        <Link to='/'><Button color ='warning' outline >Go Back</Button></Link>
        </div>
      </Form>
      </div>
    </div>
  )
}

export default AddNgo