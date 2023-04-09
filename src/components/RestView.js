
import { useParams } from 'react-router-dom'
import {React,useState,useEffect} from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Review from './Review';
import OperatingTime from './OperatingTime';
import './Restcardd.css'

function RestView() {
  
     //state to store api
     var [Allrestaurents,setRestaurents]=useState([])
     //function to call api
     const fetchRest=async()=>{
        const result=await fetch('/restaurants.json')
        result.json().then(
         data=>{
             setRestaurents(data.restaurants)
         }
        )
     }
     const params=useParams()
    //  console.log(params.id);
    //  console.log(Allrestaurents);
    const restaurant = Allrestaurents.find(item=>item.id==params.id)
     useEffect(()=>{
         fetchRest()},[])

         
  return (
    <>
    {
      restaurant?(
      <Row>
       <Col id='cal' lg={6} md={6} className='p-5 pt-5 pb-5 ms-5 text-center'>
         <img className='rounded border' style={{height:'600px'}} src={restaurant.photograph}/>
       </Col>
       <Col id='cal' className='me-5 mt-5' >
       <ListGroup variant='flush'>
      <ListGroup.Item><h2 className='text-primary'>{restaurant.name}</h2></ListGroup.Item>
      <ListGroup.Item><p> <strong>Price :-</strong>{restaurant.price} </p></ListGroup.Item>
      <ListGroup.Item><p> <strong>Imported Date :-</strong>{restaurant.imported} </p></ListGroup.Item>
      <ListGroup.Item><p> <strong>Longivity:-</strong>{restaurant.longivity} </p></ListGroup.Item>
      <ListGroup.Item>
        <div className='mt-4'><OperatingTime timeData={restaurant.operating_hours}></OperatingTime></div>
        <div className='mt-3'><Review timeDat={restaurant.reviews}></Review></div>
      </ListGroup.Item>
    </ListGroup>
       </Col>
    </Row>):""
  }
  </>
  )
  
}

export default RestView