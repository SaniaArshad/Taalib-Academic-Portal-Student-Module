import React, { useState, useEffect } from 'react';
import axios from 'axios';// Import the CSS file for styling

const Attendance = () => {
  const [attendance, setAttendance] = useState([]);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // Fetch attendance data
    fetchAttendance();
  }, []);

  const fetchAttendance = async () => {
    try {
      const response = await axios.get('http://localhost:3000/students/attendance/646234b4d447489736e0d784');
      console.log("data", response.data);
      setAttendance(response.data.attendance);
      fetchCourses(); // Fetch courses after fetching attendance
    } catch (error) {
      console.error(error);
    }
  };

  const fetchCourses = async () => {
    try {
      const response = await axios.get('http://localhost:3000/courses');
      console.log("courses", response.data);
      setCourses(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const getCourseName = (courseId) => {
    const course = courses.find((course) => course._id === courseId);
    return course ? course.name : 'Unknown Course';
  };

  return (
    <div className="attendance-container">
      <h1 className="attendance-heading">Attendance</h1>
      <table className="attendance-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Course</th>
            <th>Present</th>
          </tr>
        </thead>
        <tbody>
          {attendance.map((item) => (
            <tr key={item._id}>
              <td>{item.date}</td>
              <td>{getCourseName(item.course)}</td>
              <td>{item.isPresent ? 'Yes' : 'No'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Attendance;
