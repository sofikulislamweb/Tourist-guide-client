import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
    const {Name,description,img,price,_id } = props.service;
    return (
        <div className="col-md-4 col-12 col-sm-12 py-2 text-center">
            <div className="card">
                <img className="img-fluid " src={img} className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <h4 className="card-title">{Name}</h4>
                    <h6>Service Price: {price}</h6>
                    <p className="card-text">{description}</p>

                    {/* =========Dinamic Route setup=========== */}

                    <Link to={`/purchase/${_id}`} ><button className="btn-sm live login bg-success text-light"><i className="fas fa-cart-plus"></i> Purchase Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Service;