import React from "react";
import './Ngo.css'
import { Grid } from '@mui/material'
import { Link } from "react-router-dom";

import{
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    CardFooter,
    Button,
    Container
} from 'reactstrap';
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer,toast} from 'react-toastify';


function Ngo({ngo}){
   
    const btnHandle =()=>{
        toast("this is my toast messsage");
      };
    
    return(
        <Card>
                <CardBody className="box"> 
                <CardSubtitle className="ngo-name"> {ngo.name}</CardSubtitle>
                <CardText className="ngo-category">{ngo.category}</CardText>
                <CardText className="ngo-desc">{ngo.desc}</CardText>
                <Container className="text-center">
                <Link to="/viewProfile" state={{id :ngo.id}}>
                <Button color="danger">View More</Button> </Link>
                </Container>
                 </CardBody>
                 </Card>
            
        
     
    
    )
}

export default Ngo;

