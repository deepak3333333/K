import React, { useState} from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  Card,
  InputGroup,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";


import Message from "../Message";


function LoginScreen() {
  const navigate=useNavigate()
  
  const [email,setEmail]=useState("")
  const [pass1,setpass1]=useState("")
  
  const [error,setError]=useState("")
  const [show,changeshow]=useState("fa fa-eye-slash")
  

  




  const submitHandler=(e)=>{
    e.preventDefault()

   }

  const showPassword=()=>{

    var x=document.getElementById("pass1")
   
    if(x.type==="password"){
      x.type="text";
      
      changeshow(`fa fa-eye`);
    }
    else{
      x.type="password";
     
      changeshow(`fa fa-eye-slash`)
    }
  };










  return (
    <>
      <Container className="mt-1">
        <Row>
          <Col md={4}></Col>
          <Col md={4}>
            <Card>
              <Card.Header as="h3" className="text-center  bg-black text-light">
                Login
              </Card.Header>
              <Card.Body>
                {error && <Message variant='danger'>{error}</Message>}
                
                <Form onSubmit={submitHandler}>
                 
                  <Form.Group className="mb-1" controlId="email">
                    <Form.Label>
                      <span>
                      <i class="fa fa-envelope-square" ></i>
                      </span>
                      Email Address
                    </Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter your Email Address"
                      value={email}
                      onChange={(e)=>setEmail(e.target.value)}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-1 " >
                    <Form.Label>
                      <span>
                        <i className={show}></i>
                      </span>
                      Password
                    </Form.Label>
                    <InputGroup className="mb-2 ">
                      <InputGroup.Checkbox  onClick={showPassword}/>{" "}
                      <Form.Control
                        placeholder="Enter password"
                        required
                        type="password"
                        id="pass1"
                        value={pass1}
                        onChange={(e)=>setpass1(e.target.value)}
                      />
                    </InputGroup>
                    
                  </Form.Group>

                  
                  <br />
                  <div className="d-grid gap-2">
                    <Button className="btn btn-md btn-success" type="submit">
                      Login
                    </Button>
                  </div>
                </Form>
                <Row className="py-3">
                  <Col>
                    New User
                    <Link to="/signup">Signup</Link>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}></Col>
        </Row>
      </Container>
    </>
  );
}

export default LoginScreen;
