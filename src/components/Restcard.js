import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './Restcardd.css';

function Restcard({restdata}) {
  return (
    <div>
      <Link to={`/view-restaurant/${restdata.id}`} style={{textDecoration:"none",color:"white"}}>
         <Card id='cal' style={{ width: '18rem' }}>
      <Card.Img variant="top" src={restdata.photograph} />
      <Card.Body>
        <Card.Title className='text-center border p-3'>{restdata.name}</Card.Title>
        <Card.Text>
          <p>
           <strong>cuisine Type</strong> {restdata.cuisine_type}
          </p>
          <p>
           <strong>Neighborhood</strong> {restdata.neighborhood}
          </p>
        </Card.Text>
      </Card.Body>
    </Card>
    </Link>
    </div>
  )
}

export default Restcard