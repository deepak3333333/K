import React from 'react'
import { Container } from 'react-bootstrap'
import Page1 from './Page1'
import Page2 from './Page2'



function HomeScreens() {
  return (
   <Container style={{ maxWidth: '97vw' }}    >
    <Page1/>
    <Page2/>
   
    

   </Container>
  )
}

export default HomeScreens
