import React from 'react'
import { Button, Jumbotron } from 'react-bootstrap';

function Welcome() {
  return (
    <Jumbotron className="text-center">
      
    <h1>Bookstore</h1>
    <p>
      My first React Bookstore
    </p>
   
    <p>
      <Button variant="primary">Buy some books now</Button>
    </p>
  </Jumbotron>
  )
}

export default Welcome