import React, { useEffect, useState } from "react";
import axios from "axios";
import { Row, Col, Container,Card } from "react-bootstrap";
import './Page2.css'



function Page2() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function fetchproducts() {
      const { data } = await axios.get("/api/categoires");
      
      setProducts(data);
    }
    fetchproducts();
  },[]);

  return (
    <Container>
      <div className="hg">

   
    <h1 className="top">Categories that you can get work done or get to do freelancing.</h1>
    <Row>
       {products.map((product)=>(
        <Col key={product.id} sm={12} md={6} lg={4} xl={3}>
          <Card className="my-2  p-2 rounded">
          <img src={product.image}/>
          </Card>
          <h3>{product.Categoriesname}</h3>
            
            
        </Col>

       ))}

    </Row>
    </div>
    <hr></hr>
    </Container>
      
      
   
  )
}

export default Page2;
