// src/components/StudentMarks.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StudentMarks = ({ studentId }) => {
  const [marks, setMarks] = useState([]);
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchMarks = async () => {
      try {
        const res = await axios.get(`/students/marks/${studentId}`, {
          headers: { token: localStorage.getItem('token') },
        });
        setMarks(res.data.marks);
        setCourses(res.data.courses);
      } catch (err) {
        setError(err.response.data.message);
      }
    };
    fetchMarks();
  }, [studentId]);

  return (
    <div>
      <h2>Marks</h2>
      {error && <p>{error}</p>}
      <table>
        <thead>
          <tr>
            <th>Course</th>
            <th>Type of Assessment</th>
            <th>Total Marks</th>
            <th>Obtained Marks</th>
            <th>Weightage</th>
            <th>Teacher</th>
          </tr>
        </thead>
        <tbody>
          {marks.map((mark, index) => (
            <tr key={index}>
              <td>{courses.find((course) => course._id === mark.course).name}</td>
              <td>{mark.typeOfAssessment}</td>
              <td>{mark.totalMarks}</td>
              <td>{mark.obtainedMarks}</td>
              <td>{mark.weightage}</td>
              <td>{mark.teacher.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentMarks;
