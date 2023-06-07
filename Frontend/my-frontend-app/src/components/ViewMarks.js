import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Attendance.css'; // Import the CSS file for styling
import Sidebar from './sideBar';
import Nav from './nav';

const StudentMarks = () => {
  const [marks, setMarks] = useState([]);
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState('');
  const students = JSON.parse(localStorage.getItem('user')); 
  const studentId = students.student._id;
  const token = students.token;

  useEffect(() => {
    const fetchMarks = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/students/marks/${studentId}`, {
          headers: { token: token },
        });
        setMarks(response.data.marks);
        setCourses(response.data.courses);
      } catch (err) {
        setError(err.response.data.message);
      }
    };
    fetchMarks();
  }, [studentId, token]);

  const getCourseName = (courseId) => {
    const course = courses.find((course) => course._id === courseId);
    return course ? course.name : 'Unknown Course';
  };

  return (
    <div>
      <Nav />
      <Sidebar />
      <br></br>
      <h2 className="attendance-heading">Student Marks</h2>
      <div className="student-marks-container">
        
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
    </div>
  );
};

export default StudentMarks;
