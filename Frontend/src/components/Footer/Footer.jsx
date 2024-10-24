import React from 'react';
import './Footer.css';
import { assets } from '../../assets/assets';

const Footer = () => {
    return (
        <div className="footer">
                <div className="footer-logo">
                    <img src={assets.bag} alt="Logo" className="logo-image" />
                    <h1 className="company-name">DressHub</h1>
                </div>
                <ul className="footer-links">
                    <li>Company</li>
                    <li>Products</li>
                    <li>Offices</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            <div className="footer-social">
                <img src={assets.instagram_icon} alt="Instagram" />
                <img src={assets.pintester_icon} alt="Pinterest" />
                <img src={assets.whatsapp_icon} alt="WhatsApp" />
            </div>
            <hr />
            <div className="footer-bottom">
                © 2024 DressHub. All rights reserved.
            </div>
        </div>
    )
}

export default Footer;
