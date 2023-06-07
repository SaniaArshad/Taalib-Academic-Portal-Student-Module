import React from "react";
import NavBar from "./nav";
import SideBar from "./sideBar";
import feedbackLogo from "../images/feedback.png";
import paymentLogo from "../images/payment.png";
import attendance from "../images/attendance.png";
import enrollcourse from "../images/enrollcourse.png";
import feedback from "../images/feedback.png";
import viewfee from "../images/viewfee.png";
import marks from "../images/marks.png";
import { useNavigate } from "react-router-dom";
import "./manageStudent.css";
import Sidebar from './sideBar';
import Nav from './nav';

function Home() {
  const navigate = useNavigate();
  return (
    <div>
        <Nav />
    <Sidebar/>
      <div>
        <div className="row">
          <div className="col-md-2">
          </div>
          <div className="col-md-10">
            <br />
            <div className="container">
              <h1>Student Academic Portal</h1>
              <br />
              <div className="row">
                <div
                  className="col-md-4"
                  onClick={() => {
                    navigate("/ViewMarks");
                  }}
                >
                  <div className="card card-custom">
                    <img
                      style={{ paddingTop: 10, width: 100, height: 100 ,display: "block",marginLeft: "auto",marginRight: "auto"}}
                      src={marks}
                      className="card-img-top"
                      alt="View Marks"
                    />
                    <div className="card-body">
                      <h5 className="card-title">View Marks</h5>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-4"
                  onClick={() => {
                    navigate("/Attendance");
                  }}
                >
                  <div className="card card-custom">
                    <img
                      style={{ paddingTop: 10, width: 100, height: 100 ,display: "block",marginLeft: "auto",marginRight: "auto"}}
                      src={attendance}
                      className="card-img-top"
                      alt="View Attendance"
                    />
                    <div className="card-body">
                      <h5 className="card-title">View Attendance</h5>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-4"
                  onClick={() => {
                    navigate("/Feedback");
                  }}
                >
                  <div className="card card-custom">
                    <img
                      style={{ paddingTop: 10, width: 100, height: 100 ,display: "block",marginLeft: "auto",marginRight: "auto"}}
                      src={feedbackLogo}
                      className="card-img-top"
                      alt="Feedback"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Feedback</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <br />
            <div className="container">
              <div className="row">
                <div
                  className="col-md-4"
                  onClick={() => navigate("/EnrollCourse")}
                >
                  <div className="card card-custom">
                    <img
                      style={{ paddingTop: 10, width: 100, height: 100 ,display: "block",marginLeft: "auto",marginRight: "auto"}}
                      src={enrollcourse}
                      className="card-img-top"
                      alt="Enroll Course"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Enroll Course</h5>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-4"
                  onClick={() => {
                    navigate("/FeeChallanView");
                  }}
                >
                  <div className="card card-custom">
                    <img
                     style={{ paddingTop: 10, width: 100, height: 100 ,display: "block",marginLeft: "auto",marginRight: "auto"}}
                      src={viewfee}
                      className="card-img-top"
                      alt="View FeeChalan"
                    />
                    <div className="card-body">
                      <h5 className="card-title">View FeeChalan</h5>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-4"
                  onClick={() => {
                    navigate("/FeePayment");
                  }}
                >
                  <div className="card card-custom">
                    <img
                      style={{ paddingTop: 10, width: 100, height: 100 ,display: "block",marginLeft: "auto",marginRight: "auto"}}
                      src={paymentLogo}
                      className="card-img-top"
                      alt="Fee Payment"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Fee Payment</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
