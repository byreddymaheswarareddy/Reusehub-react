import React from 'react';
import { Link } from'react-router-dom';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";


function Footer() {
  return (
    <footer className="text-center footer">
      <div className="footer-section contact">
        <h4>Contact</h4>
        <p>Email: reusehub@support.com</p>
        <p>Phone: 7675041953</p>
        <p>Hyderabad, Telangana India</p>
      </div>

      <div className="footer-section links">
        <h4>Links</h4>
        <ul>
          <li><a href="/privacy">Privacy Policy</a></li>
          <li><a href="/terms">Terms</a></li>
          <li><a href="/shipping">Shipping</a></li>
        </ul>
      </div>

      <div className="footer-section">
        <h4>Social</h4>
        <Link to="/" className='social'><FaFacebook /></Link> 
        <Link to="/" className='social'><FaInstagram /></Link> 
        <Link to="/" className='social'><FaSquareXTwitter /></Link> 
      </div>

      <div className="footer-section copyright">
        <p className="copyright">© Copyright ReUseHub</p>
      </div>
    </footer>
  );
}

export default Footer;
