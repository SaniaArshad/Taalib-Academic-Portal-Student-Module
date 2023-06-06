import React, { useState } from 'react';
import axios from 'axios';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const PaymentForm = () => {
  const [studentID, setStudentID] = useState('');
  const [amount, setAmount] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const stripe = useStripe();
  const elements = useElements();

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
        token: "tok_visa",
      });

      console.log(response.data.success); // Success message

    } catch (err) {
      console.error(err);
      setErrorMessage('Payment failed');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="studentID">Student ID:</label>
        <input
          id="studentID"
          type="text"
          value={studentID}
          onChange={(e) => setStudentID(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="amount">Amount:</label>
        <input
          id="amount"
          type="text"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <div className="card-details">
        <label htmlFor="card-details">Card Details:</label>
        <CardElement
          id="card-details"
          options={{ style: { base: { fontSize: '16px' } } }}
        />
      </div>
      <div>
        <button type="submit" disabled={!stripe}>
          Pay ${amount}
        </button>
      </div>
      {errorMessage && <div>{errorMessage}</div>}
    </form>
  );
};

export default PaymentForm;
