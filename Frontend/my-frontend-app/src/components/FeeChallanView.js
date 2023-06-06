import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FeeChallanView = ({ studentId }) => {
  const [feeChalans, setFeeChalans] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchFeeChalans = async () => { 
      try {
        const response = await axios.get(`http://localhost:3000/students/${studentId}/fee-chalan`);
        setFeeChalans(response.data);
        setError('');
      } catch (err) {
        setError(err.response.data.error);
        setFeeChalans([]);
      }
    };
    fetchFeeChalans();
  }, [studentId]);

  return (
    <div>
      <h2>Fee Challans</h2>
      {error && <p>{error}</p>}
      {feeChalans.length > 0 ? (
        <div>
          {feeChalans.map((feeChalan) => (
            <div key={feeChalan._id}>
              <p>Is Paid: {feeChalan.isPaid ? 'Yes' : 'No'}</p>
              <p>Challan ID: {feeChalan._id}</p>
              <a href={feeChalan.pathToFile}>Download Receipt</a>
              <hr />
            </div>
          ))}
        </div>
      ) : (
        <p>No fee challans found for the student</p>
      )}
    </div>
  );
};

export default FeeChallanView;
