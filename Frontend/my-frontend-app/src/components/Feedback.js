import React, { useState } from 'react';
import axios from 'axios';

const FeedbackForm = ({ studentId }) => {
  const [feedback, setFeedback] = useState('');
  const [teacherID, setTeacherID] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/students/feedback', {
        studentID: studentId, // Include the studentID from props
        feedback,
        teacherID,
      });
      console.log(response.data.message); // Success message
      // Reset form values
      setFeedback('');
      setTeacherID('');
    } catch (err) {
      console.error(err);
      setErrorMessage('Server error');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Student ID:</label>
        <input
          type="text"
          value={studentId} // Display the studentID from props
          disabled
        />
      </div>
      <div>
        <label>Feedback:</label>
        <textarea
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        ></textarea>
      </div>
      <div>
        <label>Teacher ID:</label>
        <input
          type="text"
          value={teacherID}
          onChange={(e) => setTeacherID(e.target.value)}
        />
      </div>
      <div>
        <button type="submit">Submit Feedback</button>
      </div>
      {errorMessage && <div>{errorMessage}</div>}
    </form>
  );
};

export default FeedbackForm;
