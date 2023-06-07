import React, { useState } from 'react';
import axios from 'axios';
import './Attendance.css';
import Sidebar from './sideBar';
import Nav from './nav';

const teachers = [
  { _id: '647e760a940abe12c57333ac', name: 'Jane Doe' },
  { _id: '647e7498940abe12c573337f', name: 'John Smith' },
  { _id: '647e7513940abe12c5733382', name: 'Jacob Adams' },
  { _id: '647e7526940abe12c5733385', name: 'Mia Green' },
  { _id: '647e7536940abe12c5733388', name: 'Benjamin Scott' },
  { _id: '647e7540940abe12c573338b', name: 'Emma Hall' },
  { _id: '647e754a940abe12c573338e', name: 'Joseph Walker' },
  { _id: '647e7553940abe12c5733391', name: 'Ava Thomas' },
  { _id: '647e755b940abe12c5733394', name: 'James Martinez' },
  { _id: '647e7586940abe12c5733397', name: 'Sophia Taylor' },
  { _id: '647e75c9940abe12c573339d', name: 'William Anderson' },
  { _id: '647e75d7940abe12c57333a0', name: 'Olivia Wilson' },
  { _id: '647e75e4940abe12c57333a3', name: 'Daniel Davis' },
  { _id: '647e75f1940abe12c57333a6', name: 'Emily Brown' },
  { _id: '647e75fe940abe12c57333a9', name: 'Michael Johnson' },
  { _id: '64801f3db5ceb52f5445ca56', name: 'Abdullah Abid' },
];

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
          <label className="form-label">Teacher:</label>
          <select
            className="form-input"
            value={teacherID}
            onChange={(e) => setTeacherID(e.target.value)}
          >
            <option value="">Select a teacher</option>
            {teachers.map(teacher => (
              <option key={teacher._id} value={teacher._id}>{teacher.name}</option>
            ))}
          </select>
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
