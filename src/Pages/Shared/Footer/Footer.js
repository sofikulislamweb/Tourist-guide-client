import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <div className="d-md-flex text-center footer text-white pb-2 pt-2 mt-5">
                {/* ========== footer course link ========== */}
                <div className="col-md-4 col-12 mt-5 mb-5 ">
                    <h5 className="">Our Special</h5>
                    <li className="li-style">Consultation</li>
                    <li className="li-style">Guide</li>
                    <li className="li-style">Couple Packages</li>

                </div>
                {/* ============footer nav link ============ */}
                <div className="col-md-4 mt-5 mb-5">
                    <h5>Contact Us</h5>
                    <li className="li-style ">+01852-1265122</li>
                    <li className="li-style">+01852-1265122</li>
                    <li className="li-style">info@example.com</li>
                    <li className="li-style">Consultation</li>
                </div>
                {/* =========== social media =========== */}
                <div className="col-md-4 mt-5 mb-5">
                    <h5>Social Link</h5>
                    <div className="text-info">
                        <i className="fs-2  m-2 fab fa-facebook"></i>
                        <i className="fs-2 m-2 fab fa-youtube ms-3"></i>
                        <i className="fs-2  m-2 fab fa-twitter ms-3"></i>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Footer;