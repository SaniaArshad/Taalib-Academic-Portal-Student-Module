import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Attendance.css';
import Sidebar from './sideBar';
import Nav from './nav';

const FeeChallanView = () => {
  const [feeChalans, setFeeChalans] = useState([]);
  const [error, setError] = useState('');

  const students = JSON.parse(localStorage.getItem('user'));
  const studentId = students.student._id;
  const token = students.token;

  useEffect(() => {
    const fetchFeeChalans = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/students/${studentId}/fee-chalan`, {
          headers: { token: token }
        });
        setFeeChalans(response.data);
        setError('');
      } catch (err) {
        setError(err.response.data.error);
        setFeeChalans([]);
      }
    };
    fetchFeeChalans();
  }, [studentId, token]);

  return (
    <div>
      <Nav />
      <Sidebar/>
      <br></br>
      <h2 className="attendance-heading">View Fee Challan</h2>
      <div className="fee-challans-container">
        <h2>Fee Challans</h2>
        {error && <p className="error-message">{error}</p>}
        {feeChalans.length > 0 ? (
          <div>
            {feeChalans.map((feeChalan) => (
              <div className="fee-challan-item" key={feeChalan._id}>
                <p>Is Paid: {feeChalan.isPaid ? 'Yes' : 'No'}</p>
                <p>Challan ID: {feeChalan._id}</p>
                <a href={feeChalan.pathToFile}>Download Receipt</a>
                <hr />
              </div>
            ))}
          </div>
        ) : (
          <p className="no-challans">No fee challans found for the student</p>
        )}
      </div>
    </div>
  );
};

export default FeeChallanView;
