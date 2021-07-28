import React from 'react'
import { Link } from 'react-router-dom'
import {Navbar,Nav,Container,} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const header = () => {
    return (
        <div className="header">

       


            <Navbar bg="dark" variant="dark" float="left">
    <Container>
  
    <Nav className="me-auto  ">
    <Nav><Link  to="/Home" style={{
        marginLeft:"30px",
          fontSize:"30px",
          textAlign:"center",
          textDecoration:'None',
          color:"Grey",
          marginRight:"0px",
          float:"left"
          }}>Home</Link></Nav>

      <Nav><Link  to="/About" style={{
           marginLeft:"30px",
          fontSize:"30px",
          textAlign:"center",
          textDecoration:'None',
          color:"Grey",
          }}>About</Link></Nav>
      <Nav><Link  to="/Profile" style={{
          marginLeft:"30px",
          fontSize:"30px",
          textAlign:"center",
          textDecoration:'None',
          color:"Grey",
          }}>Profile</Link></Nav>
      <Nav><Link  to="/Dashboard" style={{
             marginLeft:"30px",
          fontSize:"30px",
          textAlign:"center",
          textDecoration:'None',
          color:"Grey",
          }}>Dashboard</Link></Nav>

      
            
    </Nav>
    </Container>
  </Navbar>



 

        </div>
    )
}

export default header
