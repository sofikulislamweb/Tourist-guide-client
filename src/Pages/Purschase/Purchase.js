import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const Purchase = (props) => {
    const { Name, description, img, price,  } = props.service;
    const { Id } = useParams()
    console.log(Id)
    const [details, setDetails] = useState([])
    const [service, setService] = useState({});

    useEffect(() => {
        fetch('http://localhost:5000/packages')
            .then(res => res.json())
            .then(data => setDetails(data.products))
    }, []);
    console.log(details)

    useEffect(() => {
        const getDetails = details.find(detail => detail.id === parseFloat(Id))
        setService(getDetails)
    }, [details])

    return (
        <div className="col-md-8 col-12 col-sm-12 py-2 text-center m-auto my-5">
            <div className="card">
                <img className="img-fluid " src={img} className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <h4 className="card-title">{Name}</h4>
                    <h6> Service Price: {price}</h6>
                    <p className="card-text mx-3">{description}</p>
                    <Link to="/home" ><button className="btn-sm live "> Back to Punches </button></Link>

                </div>
            </div>
        </div>
    );
};


export default Purchase;