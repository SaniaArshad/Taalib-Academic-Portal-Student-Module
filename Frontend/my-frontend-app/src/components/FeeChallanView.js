// src/components/FeeChallanView.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FeeChallanView = ({ studentId }) => {
  const [feeChalan, setFeeChalan] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchFeeChalan = async () => {
      try {
        const response = await axios.get(`/students/${studentId}/fee-chalan`, {
          headers: { token: localStorage.getItem('token') },
        });
        setFeeChalan(response.data);
        setError('');
      } catch (err) {
        setError(err.response.data.error);
        setFeeChalan(null);
      }
    };
    fetchFeeChalan();
  }, [studentId]);

  return (
    <div>
      <h2>Fee Challan</h2>
      {error && <p>{error}</p>}
      {feeChalan ? (
        <div>
          <p>Challan ID: {feeChalan._id}</p>
          <p>Student ID: {feeChalan.studentID}</p>
          <p>Is Paid: {feeChalan.isPaid ? 'Yes' : 'No'}</p>
          {feeChalan.isPaid && <a href={feeChalan.pathToFile}>Download Receipt</a>}
        </div>
      ) : (
        <p>No fee challan found for the student</p>
      )}
    </div>
  );
};

export default FeeChallanView;
