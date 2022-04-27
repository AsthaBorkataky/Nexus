import React ,{ useEffect, useState } from 'react'
import axios from 'axios';
import { toast } from "react-toastify";
import {useLocation,Link,useNavigate} from 'react-router-dom';
import { Button } from 'reactstrap';
import "./Profile.css"
import MailIcon from '@mui/icons-material/Mail';
import CallIcon from '@mui/icons-material/Call';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()


export default function ViewProfile() {
    const [ngo,setNgo]=useState([])
    const location=useLocation()
    const {id}=location.state
    const getNgoFromServer = () => {
        axios.get("http://localhost:8096/api/ngolist/"+id).then(
            (response) => {
                console.log(id);
                setNgo(response.data);
                },
            (error) => {
                console.log(error);
                toast.error(id, {position: "bottom-center",}
                );
            }
        )
    }
    const [image, setImage] = useState('');
    let history= useNavigate();
    const Route=()=> {
        history('/signin/profile')
       }
  useEffect(() => {
      fetchCategoryImage(id)
      if(localStorage.getItem('token')){
        var ngo = JSON.parse(localStorage.getItem('ngo'));
        if(ngo.id==id)
            Route();
      }
  },[]);

  const fetchCategoryImage = (id ) => {
      if (id !== null) {
          axios.get("http://localhost:8096/api/ngo/image/"+id, { responseType: 'blob' }).then(
              response => {
              if (response.data) {
                  setImage(URL.createObjectURL(response.data))
              } else {

              }
          }).catch(error => {
              console.log("Error", error);
          })
      }
  }
    useEffect(() => {
        getNgoFromServer()
    }, []);
  return (
    <div className='full'>
      <div className='in'>
         <Link to='/donate' state={ngo}><Button className='b' >Donate</Button></Link>
         <Link to='/'><Button className='h'>Home</Button></Link>
         <h1>{ngo.name}</h1>
    </div>
    <div  >
      <img  className='im' src={image}/>
</div>
    <div className='ds'>
      <h4>{ngo.desc}</h4>
      </div>
      <div className='cat'>
      <h4 >Our Ngo works in the domain of: {ngo.category}</h4>
      </div>
      <div className='vi'>
      <h4> Our Vision: {ngo.vision}</h4>
      </div>
      <div className='loc'>
      <h4>We are working dilligently towards our Vision in the following States: {ngo.loc}</h4>
      </div>
      <div className='cm'>
        <h2>Currently Running Campaigns</h2>
      </div>
      <div className='cm1'><h4>{ngo.campaign1}</h4></div>
      <div className='cm1'> <h4>{ngo.campaign2}</h4></div>
      <div className='cm1'><h4>{ngo.campaign3}</h4></div>
      <div className='ad'><h3>Address :</h3> <h4>{ngo.address}</h4></div>
      <div className='ph'>
      <h4><MailIcon/>{ngo.email}</h4>
      <h4><CallIcon/>{ngo.phoneno}</h4>
      </div>
    </div>
  )
}
