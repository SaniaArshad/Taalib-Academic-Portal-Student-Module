import React, { useState, useEffect } from "react";
import { Nav } from "react-bootstrap";
import pro from "../images/profile.png";
import logo from "../images/student.png";
import course from "../images/courses.png";

function Sidebar() {

  return (
    <div
      className="sidebar bg-dark d-flex flex-column vh-100"
    >
      <br></br>
      <Nav defaultActiveKey="/" className="flex-column">
        <Nav.Item style={{ paddingBottom: 10 }}>
          <Nav.Link href="/Home" className="text-light">
            <img
              src={pro}
              alt="student"
              width="30px"
              className="sidebar-icon"
              style={{ marginRight: "10px" }}
            />
            My Profile
          </Nav.Link>
        </Nav.Item>
        <Nav.Item style={{ paddingBottom: 10 }}>
          <Nav.Link href="/ManageStudents" className="text-light">
            <img
              src={logo}
              alt="student"
              width="30px"
              className="sidebar-icon"
              style={{ marginRight: "10px" }}
            />
            EnrollCourse
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/ManageCourses" className="text-light">
            <img
              src={course}
              alt="student"
              width="30px"
              className="sidebar-icon"
              style={{ marginRight: "10px" }}
            />
            Manage Course
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}

export default Sidebar;
