import React, { useState } from 'react';
import axios from 'axios';
import './Attendance.css';
import Sidebar from './sideBar';
import Nav from './nav';

const courses = [
  { _id: '647e78ad2c4494e080cae54e', name: 'Math' },
  { _id: '647e78be2c4494e080cae557', name: 'English' },
  { _id: '647e78de2c4494e080cae564', name: 'Science' },
  { _id: '647e79122c4494e080cae573', name: 'Social Studies' },
  { _id: '647e79482c4494e080cae582', name: 'Computer Science' },
  { _id: '647e78052c4494e080cae545', name: 'Music' },
  { _id: '647e795a2c4494e080cae593', name: 'Physical Education' },
  { _id: '647e796a2c4494e080cae5a6', name: 'Arts and Craft' },
  { _id: '647e79fb2c4494e080cae5bb', name: 'Environmental Studies' },
  { _id: '647e7a0e2c4494e080cae5d2', name: 'History' },
  { _id: '647e7a3d2c4494e080cae5eb', name: 'Geography' },
  { _id: '647e7a502c4494e080cae606', name: 'Civics' },
  { _id: '647e7a702c4494e080cae623', name: 'General Knowledge' },
  { _id: '647e7ac22c4494e080cae642', name: 'Critical Thinking and Problem Solving' },
  { _id: '647e7ad82c4494e080cae663', name: 'Life Skills Education' },
  { _id: '647f7bba7a6f84283230e6db', name: 'The Subtle Art Of Nothing' },
];

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
        courseId: courseId
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
              <label htmlFor="courseId" className="form-label">Course:</label>
              <select className="form-input" id="courseId" value={courseId} onChange={(e) => setCourseId(e.target.value)}>
                <option value="">Select a course</option>
                {courses.map(course => (
                  <option key={course._id} value={course._id}>{course.name}</option>
                ))}
              </select>
            </div>
            <button className="form-button" type="submit">Enroll</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EnrollCourse;
