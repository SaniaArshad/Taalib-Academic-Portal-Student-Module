import React, { useState } from 'react';
import axios from 'axios';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import './Attendance.css';
import Sidebar from './sideBar';
import Nav from './nav';

const PaymentForm = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const amount = 38500;

  const students = JSON.parse(localStorage.getItem('user'));
  const studentID = students.student._id;
  const token = students.token;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    try {
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: elements.getElement(CardElement),
      });

      if (error) {
        throw new Error(error.message);
      }

      const response = await axios.post('http://localhost:3000/students/payment', {
        studentID,
        amount,
        token: paymentMethod.id,
      }, {
        headers: { token: token }
      });

      setPaymentSuccess(true); // Set payment success state

    } catch (err) {
      console.error(err);
      setErrorMessage('Payment failed');
    }
  };

  return (
    <div>
      <Nav />
      <Sidebar />

      <form onSubmit={handleSubmit} className="payment-form-container">
        <div className="card-details">
          <label htmlFor="card-details">Card Details:</label>
          <CardElement
            id="card-details"
            options={{ style: { base: { fontSize: '16px' } } }}
          />
        </div>
        <div>
          <button type="submit" disabled={!stripe} className="payment-button">
            Pay ${amount}
          </button>
        </div>
        {errorMessage && <div className="payment-error">{errorMessage}</div>}
        {paymentSuccess && (
          <div className="payment-success">Payment successful!</div>
        )}
      </form>
    </div>
  );
};

export default PaymentForm;
