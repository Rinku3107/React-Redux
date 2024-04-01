import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Badge from '@mui/material/Badge';

function Header() {
    return (
        <div>
            <Navbar bg="light" data-bs-theme="light">
                <Container>
                    <Navbar.Brand href="#home">Vinayak</Navbar.Brand>
                    <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    </Nav>
                    <Badge badgeContent={4} color="primary">
                    <i class="fa-solid fa-cart-shopping"></i>
                    </Badge>
                    
                </Container>
            </Navbar>
        </div>
    )
}

export default Header
