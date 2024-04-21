import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  Card,
  InputGroup,
} from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {useSelector} from "react-redux"
import {useDispatch} from 'react-redux'

import Message from "../Message";
import { signup } from "../../actions/userActions";




function SignupScreen() {
  const navigate=useNavigate()
  const [fname,setFname]=useState("")
  const [lname,setLname]=useState("")
  const [email,setEmail]=useState("")
  const [pass1,setpass1]=useState("")
  const [pass2,setpass2]=useState("")
  const [message,setMessage]=useState("")
  const [show,changeshow]=useState("fa fa-eye-slash")
  const dispatch = useDispatch();
  const location=useLocation();
  const redirect=location.search?location.search.split("=")[1]:"/"
  

  const userSignup=useSelector((state)=>state.userSignup);
  const {error,loading,userInfo}=userSignup;

  useEffect(()=>{


    if(userInfo){
      navigate("/")
    }
  },[userInfo,redirect])


  




  const submitHandler=(e)=>{
    e.preventDefault()
    if(pass1 !== pass2){
      setMessage("password do not match")
      navigate("/signup")
    }
    
   
    else{
      dispatch(signup(fname,lname,email,pass1))
     setMessage("signup is success please ")
     navigate("/login")
    }
    
   


  }

  const showPassword=()=>{

    var x=document.getElementById("pass1")
    var z=document.getElementById("pass2")
    if(x.type==="password" && z.type==="password"){
      x.type="text";
      z.type="text";
      changeshow(`fa fa-eye`);
    }
    else{
      x.type="password";
      z.type="password";
      changeshow(`fa fa-eye-slash`)
    }
  };










  return (
    <>
      <Container className="mt-0">
        <Row>
          <Col md={4}></Col>
          <Col md={4}>
            <Card>
              <Card.Header as="h3" className="text-center  bg-black text-light">
                Signup
              </Card.Header>
              <Card.Body>
                {message && <Message variant='danger'>{error}</Message>}
                
                <Form onSubmit={submitHandler}>
                  <Form.Group className="mb-1 " controlId="fname">
                    <Form.Label>
                      <span>
                        <i className="fa fa-user"></i>
                      </span>
                      First Name
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your first Name"
                      value={fname}
                      onChange={(e)=>setFname(e.target.value)}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-1" controlId="lname">
                    <Form.Label>
                      <span>
                        <i className="fa fa-user"></i>
                      </span>
                      Last Name
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your Last Name"
                      value={lname}
                      onChange={(e)=>setLname(e.target.value)}
                      required
                    />
                  </Form.Group>
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
                    <small>
                      password must include atleast [1-9] [a-z] [A-z] [_$@*!..]
                      & 5 character{" "}
                    </small>
                  </Form.Group>

                  <Form.Group className="mb-2 " >
                    <Form.Label>
                    <span>
                        <i className={show}></i>
                      </span>
                      Conform Password
                    </Form.Label>
                    <InputGroup className="mb-1 ">
                      <InputGroup.Checkbox onClick={showPassword}/>{" "}
                      <Form.Control
                        placeholder="Conform password"
                        required
                        type="password"
                        id="pass2"
                        value={pass2}
                        onChange={(e)=>setpass2(e.target.value)}
                      />
                    </InputGroup>
                  </Form.Group>
                  <br />
                  <div className="d-grid gap-2">
                    <Button className="btn btn-md btn-success" type="submit">
                      Signup
                    </Button>
                  </div>
                </Form>
                <Row className="py-3">
                  <Col>
                    Already User?
                    <Link to="/login">Login</Link>
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

export default SignupScreen;
