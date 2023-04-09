import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <div>
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src="/logo2.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            House of Blossoms
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header