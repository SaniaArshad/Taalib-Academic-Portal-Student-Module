import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Attendance.css';
import Sidebar from './sideBar';
import Nav from './nav';

const Attendance = () => {
  const [attendance, setAttendance] = useState([]);
  const [courses, setCourses] = useState([]);
  const students = JSON.parse(localStorage.getItem('user'));
  const studentId = students.student._id;
  const token = students.token;

  useEffect(() => {
    fetchAttendance();
  }, []);

  axios.defaults.headers.common['token'] = token;

  const fetchAttendance = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/students/attendance/${studentId}`);
      setAttendance(response.data.attendance);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Nav />
      <Sidebar />
      <br></br>
      <h2 className="attendance-heading">Attendance</h2>
      <div className="attendance-container">
        <table className="attendance-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Present</th>
            </tr>
          </thead>
          <tbody>
            {attendance.map((item) => (
              <tr key={item._id}>
                <td>{item.date}</td>
                <td>{item.isPresent ? 'Yes' : 'No'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Attendance;
