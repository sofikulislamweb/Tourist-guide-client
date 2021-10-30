import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import useFirebase from '../../Hooks/UseFirebase';
import logo from '../../images/logo.png'

const Header = () => {
    const { googleSignIn } = useFirebase();
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home"><img
                        src={logo}
                        width="80"
                        height="80"
                    /></Navbar.Brand>
                    <Nav
                        className="me-auto">
                        <Nav.Link to="#home">Home</Nav.Link>
                        <Nav.Link to="#features">Features</Nav.Link>
                        <Nav.Link to="#pricing">Pricing</Nav.Link>
                    </Nav>
                    <Nav.Link className='justifly-content-end'>

                        <button className='btn btn-primary' onClick={googleSignIn}>login</button>


                    </Nav.Link>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;