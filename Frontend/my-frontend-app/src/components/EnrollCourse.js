import React, { useState } from 'react';
import axios from 'axios';
import './Attendance.css';
import Sidebar from './sideBar';
import Nav from './nav';

const EnrollCourse = () => {
  const [courseId, setCourseId] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const students = JSON.parse(localStorage.getItem('user'));
  const studentId = students.student._id;
  const token = students.token;

  const handleEnroll = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/students/enroll', {
        studentId: studentId,
        courseId
      }, {
        headers: { token: token }
      });
      setSuccess(response.data.message);
      setError('');
    } catch (err) {
      setError(err.response.data.message);
      setSuccess('');
    }
  };

  return (
    <div>
      <Nav />
      <Sidebar/>
      <br></br>
      <h2 className="attendance-heading">Course Enrollment</h2>
      <div className="enroll-course-container">
        {error && <p>{error}</p>}
        {success && <p>{success}</p>}
        <div className="feedback-form">
          <form onSubmit={handleEnroll}>
            <div className="form-group">
            <label htmlFor="studentId" className="form-label">Student ID</label>
  <br />
  <input type="text" value={studentId} disabled className="form-input" />
</div>
<div className="form-group">
  <label htmlFor="courseId" className="form-label">Course ID:</label>
              <input type="text" className="form-input"  id="courseId" value={courseId} onChange={(e) => setCourseId(e.target.value)} />
            </div>
            <button className="form-button" type="submit">Enroll</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EnrollCourse;
