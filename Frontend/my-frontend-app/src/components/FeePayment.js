import React, { useState } from 'react';
import axios from 'axios';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';


const FeePayment = ({ studentId }) => {
  const [amount, setAmount] = useState('');
  const [error, setError] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsProcessing(true);

    try {
      const { data } = await axios.post('/students/payment', {
        studentID: studentId,
        amount: amount,
      });

      const clientSecret = data.clientSecret;

      const paymentResult = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });

      if (paymentResult.error) {
        setError(paymentResult.error.message);
        setIsProcessing(false);
      } else {
        setError('');
        setPaymentSuccess(true);
        setIsProcessing(false);
      }
    } catch (err) {
      setError(err.response.data.error);
      setIsProcessing(false);
    }
  };

  return (
    <div>
      <h2>Fee Payment</h2>
      {error && <p>{error}</p>}
      {paymentSuccess ? (
        <p>Payment successful!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>
            Amount:
            <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
          </label>
          <label>
            Card details:
            <CardElement />
          </label>
          <button type="submit" disabled={!stripe || isProcessing}>
            {isProcessing ? 'Processing...' : 'Pay'}
          </button>
        </form>
      )}
    </div>
  );
};

export default FeePayment;
