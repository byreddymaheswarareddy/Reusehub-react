import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

const Forgotpassword = () => {
  const [email, setEmail] = useState('');
  const [showOTP, setShowOTP] = useState(false);
  const [otp, setOtp] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add logic here to send an email with the OTP to the entered email address
    // For simplicity, we'll generate a random 4-digit OTP for demonstration purposes
    const generatedOTP = Math.floor(1000 + Math.random() * 9000);
    setOtp(generatedOTP);
    setShowOTP(true);
  };

  return (
    <div className='pb-5 mt-5'> 
    <div className="container mt-5 ">
      <h2>Forgot Password</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-2">
          Submit
        </Button>
      </Form>

      {showOTP && (
        <div className="mt-4">
          <p>An OTP has been sent to your email address.</p>
          <p>Enter the 4-digit OTP below:</p>
          <Form.Control
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            maxLength={4}
            required
          />
          <Button variant="success" className="mt-2">
            Verify OTP
          </Button>
        </div>
      )}

      <div className="mt-3">
        <Link to="/">Back to Login</Link>
      </div>
    </div>
    </div>
  );
};

export default Forgotpassword;
