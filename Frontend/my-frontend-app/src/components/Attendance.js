
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Attendance = ({ studentId }) => {
  const [attendance, setAttendance] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchAttendance = async () => {
      try {
        const response = await axios.get(`/students/attendance/${studentId}`, {
          headers: { token: localStorage.getItem('token') },
        });
        setAttendance(response.data.attendance);
      } catch (err) {
        setError('Error fetching attendance');
      }
    };

    fetchAttendance();
  }, [studentId]);

  return (
    <div>
      <h2>Attendance</h2>
      {error && <p>{error}</p>}
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {attendance.map((entry) => (
            <tr key={entry._id}>
              <td>{new Date(entry.date).toLocaleDateString()}</td>
              <td>{entry.isPresent ? 'Present' : 'Absent'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Attendance;
