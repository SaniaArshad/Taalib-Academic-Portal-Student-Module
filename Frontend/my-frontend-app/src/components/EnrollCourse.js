// src/components/EnrollCourse.js
import React, { useState } from 'react';
import axios from 'axios';

const EnrollCourse = ({ studentId }) => {
  const [courseId, setCourseId] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleEnroll = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/students/enroll', { 
        studentId: studentId,
        courseId
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
      <h2>Enroll in a Course</h2>
      {error && <p>{error}</p>}
      {success && <p>{success}</p>}
      <form onSubmit={handleEnroll}>
      <div>
        <label>Student ID:</label>
        <input
          type="text"
          value={studentId} // Display the studentID from props
          disabled
        />
      </div>
        <label htmlFor="courseId">Course ID:</label>
        <input type="text" id="courseId" value={courseId} onChange={(e) => setCourseId(e.target.value)} />
        <button type="submit">Enroll</button>
      </form>
    </div>
  );
};

export default EnrollCourse;
