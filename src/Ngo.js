import React from "react";

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
            <CardBody>
                <CardSubtitle className="font-weight-bold"> {ngo.name}</CardSubtitle>
                <CardText>{ngo.email}</CardText>
                <CardText>{ngo.phoneno}</CardText>
                <CardText>{ngo.category}</CardText>
                <CardText>{ngo.vision}</CardText>
                <Container className="text-center">
                    <Button color="danger">View More</Button>
                </Container>
            </CardBody>
        </Card>
        
    
    )
}

export default Ngo;

