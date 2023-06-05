// src/components/Feedback.js
import React, { useState } from 'react';
import axios from 'axios';

const Feedback = ({ studentId }) => {
  const [feedback, setFeedback] = useState('');
  const [teacherId, setTeacherId] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/students/feedback', { feedback, teacherId, studentId }, {
        headers: { token: localStorage.getItem('token') },
      });
        setFeedback('');
        setTeacherId('');
    } catch (err) {
        setError('Error submitting feedback');
        }
    };

    return (
        <div>
            <h2>Feedback</h2>
            {error && <p>{error}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Feedback:</label>
                    <input
                        type="text"
                        value={feedback}
                        onChange={(e) => setFeedback(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Teacher ID:</label>
                    <input
                        type="text"
                        value={teacherId}
                        onChange={(e) => setTeacherId(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Feedback;

