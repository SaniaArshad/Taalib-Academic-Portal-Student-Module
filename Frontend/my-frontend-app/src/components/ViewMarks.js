// src/components/StudentMarks.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Attendance.css'; // Import the CSS file for styling

const StudentMarks = () => {
  const [marks, setMarks] = useState([]);
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState('');
  const students = JSON.parse(localStorage.getItem('user')); 
  console.log(students);
  const studentId = students.student._id;
  console.log(studentId);
  useEffect(() => {
    const fetchMarks = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/students/marks/${studentId}`, {
          headers: { token: localStorage.getItem('token') },
        });
        setMarks(response.data.marks);
        setCourses(response.data.courses);
      } catch (err) {
        setError(err.response.data.message);
      }
    };
    fetchMarks();
  }, [studentId]);

  const getCourseName = (courseId) => {
    const course = courses.find((course) => course._id === courseId);
    return course ? course.name : 'Unknown Course';
  };

  return (
    <div className="student-marks-container">
      <h2 className="student-marks-heading">Marks</h2>
      {error && <p>{error}</p>}
      <table className="student-marks-table">
        <thead>
          <tr>
            <th>Course</th>
            <th>Type of Assessment</th>
            <th>Total Marks</th>
            <th>Obtained Marks</th>
            <th>Weightage</th>
          </tr>
        </thead>
        <tbody>
          {marks.map((mark, index) => (
            <tr key={index}>
              <td>{getCourseName(mark.course)}</td>
              <td>{mark.typeOfAssessment}</td>
              <td>{mark.totalMarks}</td>
              <td>{mark.obtainedMarks}</td>
              <td>{mark.weightage}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentMarks;
