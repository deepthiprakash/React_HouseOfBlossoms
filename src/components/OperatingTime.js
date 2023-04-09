import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ListGroup from 'react-bootstrap/ListGroup';

function OperatingTime({timeData}) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <div>
     <Button variant="primary" onClick={handleShow}>
       Availability
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> Availability</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <ListGroup>
      <ListGroup.Item>Monday | {timeData.Monday}</ListGroup.Item>
      <ListGroup.Item>Tuesday | {timeData.Tuesday}</ListGroup.Item>
      <ListGroup.Item>Wednesday | {timeData.Wednesday}</ListGroup.Item>
      <ListGroup.Item>Thursday | {timeData.Thursday}</ListGroup.Item>
      <ListGroup.Item>Friday | {timeData.Friday}</ListGroup.Item>
      <ListGroup.Item>Saturday | {timeData.Saturday}</ListGroup.Item>
      <ListGroup.Item>Sunday | {timeData.Sunday}</ListGroup.Item>
    </ListGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default OperatingTime