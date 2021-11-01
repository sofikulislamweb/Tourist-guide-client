import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import "./Footer.css";

const Footer = () => {
    const { user } = useAuth();
    return (
        <div className="footer-style py-5">
            <Container>
                <Row>
                    <Col md={4} xs={12} className="my-3">
                        <div>
                            <h3>TOUR GUIDE</h3>
                            <p>
                                "Money can't buy happiness." <br /> Successful
                                people realize that events are often random
                            </p>
                            <div className="footer-icon">
                                <i className="fab fa-facebook"></i>
                                <i className="fab fa-twitter-square"></i>
                                <i className="fab fa-linkedin"></i>
                                <i className="fab fa-instagram"></i>
                            </div>
                        </div>
                    </Col>
                    <Col md={4} xs={12} className="my-3">
                        <div>
                            <h2 className="mb-3">Quick Links</h2>
                            <div>
                                <Link to="/" className="quick-link">
                                    Home
                                </Link>
                            </div>
                            <div className="quick-link">
                                <Link to="/contact" className="quick-link">
                                    contact
                                </Link>
                            </div>
                            <div>
                                <Link to="/about" className="quick-link">
                                    about
                                </Link>
                            </div>
                            <div>
                                {!user?.email && (
                                    <Link to="/login" className="quick-link">
                                        Log In
                                    </Link>
                                )}
                            </div>
                        </div>
                    </Col>
                    <Col md={4} xs={12} className="my-3">
                        <div>
                            <h2 className="mb-3">Our Address</h2>
                            <div>
                                <span>USA, 1123/345</span>
                            </div>
                            <div className="my-2">
                                <span>7182-3678-32</span>
                            </div>
                            <div>
                                <span>Sofikul@gmail.com</span>
                            </div>
                        </div>
                    </Col>

                </Row>
            </Container>
        </div>
    );
};

export default Footer;
