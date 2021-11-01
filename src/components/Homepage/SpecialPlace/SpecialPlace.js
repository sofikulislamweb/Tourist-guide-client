import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./SpecialPlace.css";

const SpecialPlace = () => {
    return (
        <div className="special-place">
            <Container>
                <Row className="d-flex align-items-center">
                    <Col md={6} xs={12}>
                        <img
                            className="img-fluid"
                            src="https://cdn.pixabay.com/photo/2016/08/15/08/22/greece-1594689_1280.jpg"
                            alt=""
                        />
                    </Col>
                    <Col md={6} xs={12}>
                        <h4>WELCOME TO, TOUR GUIDE</h4>
                        <i><h5>Our special package waiting for you</h5></i>
                        <p>
                            “Travel is fatal to prejudice, bigotry, and
                            narrow-mindedness, and many of our people need it
                            sorely on these accounts. Broad, wholesome,
                            charitable views of men and things cannot be
                            acquired by vegetating in one little corner of the
                            earth all one’s lifetime.” – Mark Twain
                        </p>
                        <button className="btn btn-warning">learn more...</button>
                    </Col>
                    
                </Row>
            </Container>
        </div>
    );
};

export default SpecialPlace;
