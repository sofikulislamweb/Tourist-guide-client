import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import "./Header.css";

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar
                className="py-3"
                collapseOnSelect
                expand="lg"
                bg="dark"
                variant="dark"
                sticky="top"
            >
                <Container>
                    <Navbar.Brand
                        as={Link}
                        to="/"
                        className="d-flex align-items-center"
                    >

                        <h4 className="fs-3 fw-bold ">
                            TOUR <span className="word-color">GUIDE</span>
                        </h4>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto mx-auto ">
                            <Nav.Link as={Link} to="/home">
                                Home
                            </Nav.Link>
                            {user?.email && (
                                <>
                                    <Nav.Link as={Link} to="/mybooking">
                                        My Bookings
                                    </Nav.Link>
                                    <Nav.Link as={Link} to="/managebooking">
                                        Manage All Booking
                                    </Nav.Link>
                                    <Nav.Link as={Link} to="/addnewbooking">
                                        Add New Booking
                                    </Nav.Link>
                                </>
                            )}
                            <Nav.Link as={Link} to="/about">
                                About
                            </Nav.Link>
                            <Nav.Link as={Link} to="/contact">
                                Contact
                            </Nav.Link>
                        </Nav>

                        {user?.email ? (
                            <span>
                                <span className="username">
                                    {user?.displayName}
                                </span>
                                <button className='btn btn-danger'>
                                    <span className=" logout" onClick={logOut}>
                                        Log Out
                                    </span>
                                </button>
                            </span>
                        ) : (
                            <Nav>
                                <button className='btn btn-warning'><Nav.Link
                                    as={Link}
                                    to="/login"
                                >
                                    Log in
                                </Nav.Link></button>
                            </Nav>
                        )}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;
