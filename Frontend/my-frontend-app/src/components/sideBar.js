import React from "react";
import { Nav } from "react-bootstrap";
import logo from "../images/student.png";
import course from "../images/courses.png";
import eq from "../images/Equal-icon.png";
import file from "../images/Files-icon.png";
import school from "../images/school.png";
import studentinfo from "../images/studentinfo.png";
import "./sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <br></br>
      <Nav defaultActiveKey="/" className="flex-column">
        <Nav.Item style={{ paddingBottom: 10 }}>
          <Nav.Link href="/ViewMarks" className="text-light">
            <img
              src={logo}
              alt="student"
              width="30px"
              className="sidebar-icon"
              style={{ marginRight: "10px" }}
            />
            View Marks
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/FeeChallanView" className="text-light">
            <img
              src={course}
              alt="student"
              width="30px"
              className="sidebar-icon"
              style={{ marginRight: "10px" }}
            />
            View FeeChalan
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/Feedback" className="text-light">
            <img
              src={eq}
              alt="student"
              width="30px"
              className="sidebar-icon"
              style={{ marginRight: "10px" }}
            />
            Feedback
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/EnrollCourse" className="text-light">
            <img
              src={file}
              alt="student"
              width="30px"
              className="sidebar-icon"
              style={{ marginRight: "10px" }}
            />
            Enroll Course
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/FeePayment" className="text-light">
            <img
              src={studentinfo}
              alt="student"
              width="30px"
              className="sidebar-icon"
              style={{ marginRight: "10px" }}
            />
            Fee Payment
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/Attendance" className="text-light">
            <img
              src={school}
              alt="student"
              width="30px"
              className="sidebar-icon"
              style={{ marginRight: "10px" }}
            />
            View Attendance
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}

export default Sidebar;
