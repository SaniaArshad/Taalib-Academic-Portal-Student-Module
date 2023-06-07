import React, { useState } from 'react';
import axios from 'axios';
import './Attendance.css';
import Sidebar from './sideBar';
import Nav from './nav';

const FeedbackForm = () => {
  const [feedback, setFeedback] = useState('');
  const [teacherID, setTeacherID] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const students = JSON.parse(localStorage.getItem('user'));
  const studentId = students.student._id;
  const token = students.token;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/students/feedback', {
        studentID: studentId,
        feedback,
        teacherID,
      }, {
        headers: { token: token }
      });
      console.log(response.data.message);
      setFeedback('');
      setTeacherID('');
    } catch (err) {
      console.error(err);
      setErrorMessage('Server error');
    }
  };

  return (
    <div>
      <Nav />
      <Sidebar/>
      <br></br>
      <h2 className="attendance-heading">Feedback Form</h2>
      <form className="feedback-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">Student ID:</label>
          <input
            type="text"
            value={studentId}
            disabled
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Feedback:</label>
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            className="form-input"
          ></textarea>
        </div>
        <div className="form-group">
          <label className="form-label">Teacher ID:</label>
          <input
            type="text"
            value={teacherID}
            onChange={(e) => setTeacherID(e.target.value)}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <button type="submit" className="form-button">Submit Feedback</button>
        </div>
        {errorMessage && <div className="form-error">{errorMessage}</div>}
      </form>
    </div>
  );
};

export default FeedbackForm;
