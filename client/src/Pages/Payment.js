import React, { useState } from 'react';
import NavBar from '../Components/NavBar';
import { PayPalButton } from 'react-paypal-button-v2'; // Import from react-paypal-button-v2 only
import {TextField } from "@mui/material";
import '../styles/Payment.css';

const initialOptions = {
  'client-id': 'AbhfZU1xYqOiebj4XZ8e1XNvKAXdBc2OWxpFaT-9xfzsAUfyH9k_b31cTIylTuAPNxwieuKovBEHH_lp',
  currency: 'MAD',
  intent: 'capture',
};

export default function Payment() {
  const [sessionId, setSessionId] = useState('');
  const [hours, setHours] = useState('');

  const handlePaymentSuccess = (details, data) => {
    // Handle payment success, e.g., update database, show success message, etc.
    console.log('Payment successful', details, data);
  };

  const handlePaymentError = (error) => {
    // Handle payment error, e.g., show error message to the user
    console.error('Payment error', error);
  };

  const handlePaymentCancel = (data) => {
    // Handle payment cancellation, e.g., show message to the user
    console.warn('Payment cancelled', data);
  };

  const handlePayment = () => {
    // TODO: Add logic to handle the payment
    // You may need to send a request to your server to create a PayPal order
    const options = {
      clientId: 'AbhfZU1xYqOiebj4XZ8e1XNvKAXdBc2OWxpFaT-9xfzsAUfyH9k_b31cTIylTuAPNxwieuKovBEHH_lp', // Replace with your actual client ID
      intent: 'capture', // or 'authorize'
      currency: 'MAD', // or your desired currency
    };
  };

  return (
    <>
      <NavBar />
      <div className="PaymentContainer">
        <h1>Payment</h1>
        <form>
          <TextField
            label="Session ID"
            variant="outlined"
            value={sessionId}
            onChange={(e) => setSessionId(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Number of Hours"
            variant="outlined"
            value={hours}
            onChange={(e) => setHours(e.target.value)}
            fullWidth
            margin="normal"
          />

      
        </form>
        <div className="PayPalButtonContainer">
          <PayPalButton
            amount={hours*5}

            options={{
              
              clientId: 'AbhfZU1xYqOiebj4XZ8e1XNvKAXdBc2OWxpFaT-9xfzsAUfyH9k_b31cTIylTuAPNxwieuKovBEHH_lp',
            }} // Replace with your actual client ID
            onSuccess={handlePaymentSuccess}
            onError={handlePaymentError}
            onCancel={handlePaymentCancel}
          />
        </div>
      </div>
    </>
  );
}
