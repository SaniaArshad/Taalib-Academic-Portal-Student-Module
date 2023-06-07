
import './App.css';
import React from 'react';
import ViewMarks from './components/ViewMarks';
import FeeChallanView from './components/FeeChallanView';
import Feedback from './components/Feedback';
import EnrollCourse from './components/EnrollCourse';
import FeePayment from './components/FeePayment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js'
import Attendance from './components/Attendance';
import LoginForm from './components/Login';
import Home from './components/Home';
import { BrowserRouter ,Routes, Route } from 'react-router-dom';


const stripePromise = loadStripe('pk_test_51N67W4A1O9euvKzl5siEPcCD0DBWllVT0pADzrN7HUAZDFz9WBpujQNFwoo2rVgdy4HWL35UV0DSaN5RhLfIFGbQ00E6kwjZnX');
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/ViewMarks" element={<ViewMarks />} />
        <Route path="/FeeChallanView" element={<FeeChallanView />} />
        <Route path="/Feedback" element={<Feedback />} />
        <Route path="/EnrollCourse" element={<EnrollCourse />} />
        <Route path="/FeePayment" element={<Elements stripe={stripePromise}><FeePayment/></Elements>} />
        <Route path="/Attendance" element={<Attendance />} />
        </Routes>
        </BrowserRouter>


    </div>
  );
}

export default App;
