import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import './Review.css';


const Review = () => {
    return (
        <>
            <div className='text-center'>
                <h2>What Our Traveller Say About Us</h2>
            </div>
            <CardGroup className='p-5 gap-4'>
                <Card>
                    <Card.Img variant="top" className="my-review"  src="https://i.ibb.co/16qVDw7/customer1.png" />
                    <Card.Body>
                        <Card.Title>Rostoni james</Card.Title>
                        <Card.Text>
                            They are provide really amazing service free lunch,breakfast and lot of srvices really like thier service
                        </Card.Text>
                    </Card.Body>
                   
                </Card>
                <Card>
                    <Card.Img variant="top" className="my-review"  src="https://i.ibb.co/603WP2g/customer2.png" />
                    <Card.Body>
                        <Card.Title>Jahid Hasan</Card.Title>
                        <Card.Text>
                            They feature some humorous, insightful, wise and popular sayings
                        </Card.Text>
                    </Card.Body>
                    
                </Card>
                <Card>
                    <Card.Img variant="top" className="my-review" src="https://i.ibb.co/Fq1r5VR/customer3.png" />
                    <Card.Body>
                        <Card.Title>Shawn Paul</Card.Title>
                        <Card.Text>
                            Extra ordinary services i travelled with my wife and children theey are really honest thier services
                        </Card.Text>
                    </Card.Body>
                    
                </Card>
            </CardGroup>
        </>
    );
};

export default Review;