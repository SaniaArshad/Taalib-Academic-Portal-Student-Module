import React from "react";
import NavBar from "./nav";
import SideBar from "./sideBar";
import reglogo from "../images/new.png";
import editlogo from "../images/edit.png";
import deleteLogo from "../images/delete.png";
import viewLogo from "../images/file.png";
import { useNavigate } from "react-router-dom";
import "./manageStudent.css"

function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <NavBar />
      <div>
        <div className="row">
          <div className="col-md-2">
            <SideBar />
          </div>
          <div className="col-md-10">
            <br />
            <div className="container">
              <h1>Manage Students</h1>
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
                      style={{ paddingTop: 10, width: 100, height: 100 }}
                      src={reglogo}
                      className="card-img-top"
                    />
                    <div className="card-body">
                      <h5 className="card-title">View Marks</h5>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-4"
                  onClick={() => {
                    navigate("/ViewMarks");
                  }}
                >
                  <div className="card card-custom">
                    <img
                      style={{
                        paddingLeft: 10,
                        paddingTop: 10,
                        width: 100,
                        height: 100,
                      }}
                      src={editlogo}
                      className="card-img-top"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Edit Student Info</h5>
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
                  onClick={()=>navigate("/ManageStudents/DeleteStudent")}
                >
                  <div className="card card-custom">
                    <img
                      style={{ paddingTop: 10, width: 100, height: 100 }}
                      src={deleteLogo}
                      className="card-img-top"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Remove Student</h5>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-4"
                  onClick={() => {
                    navigate("/ManageStudents/ViewStudent");
                  }}
                >
                  <div className="card card-custom">
                    <img
                      style={{
                        paddingLeft: 10,
                        paddingTop: 10,
                        width: 100,
                        height: 100,
                      }}
                      src={viewLogo}
                      className="card-img-top"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Find a Student</h5>
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
