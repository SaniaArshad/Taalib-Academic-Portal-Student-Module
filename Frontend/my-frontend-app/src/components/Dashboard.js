import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from './Login';
import Attendance from './Attendance';
import EnrollCourse from './EnrollCourse';
import FeeChallanView from './FeeChallanView';
import Feedback from './Feedback';
import FeePayment from './FeePayment';
import ViewMarks from './ViewMarks';

const StudentDashboard = () => {
  // Check if the user is authenticated
  const isAuthenticated = localStorage.getItem('token');

  return (
    <div>
      <h1>Student Dashboard</h1>
      <Switch>
        <Route exact path="/dashboard">
          {isAuthenticated ? <Redirect to="/dashboard/attendance" /> : <Redirect to="/dashboard/login" />}
        </Route>
        <Route path="/dashboard/login" component={Login} />
        <Route path="/dashboard/attendance" component={Attendance} />
        <Route path="/dashboard/enroll" component={EnrollCourse} />
        <Route path="/dashboard/feechallan" component={FeeChallanView} />
        <Route path="/dashboard/feedback" component={Feedback} />
        <Route path="/dashboard/feepayment" component={FeePayment} />
        <Route path="/dashboard/viewmarks" component={ViewMarks} />
      </Switch>
    </div>
  );
};

export default StudentDashboard;
