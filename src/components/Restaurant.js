import {React,useState,useEffect} from 'react'
import Restcard from './Restcard'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function Restaurant() {
    //state to store api
    var [restaurentList,setRestaurent]=useState([])
    //function to call api
    const fetchdata=async()=>{
       const result=await fetch('/restaurants.json')
       result.json().then(
        data=>{
            setRestaurent(data.restaurants)
        }
       )
    }
    console.log(restaurentList);
    useEffect(()=>{
        fetchdata()},[])
    
  return (
    <Row>
     {
        restaurentList.map(items=>(
            <Col className='p-5' lg={4} md={6}>
            <Restcard restdata={items}></Restcard>
            </Col>
        ))
     }
    </Row>
  )
}

export default Restaurant