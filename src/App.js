import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import DashboardPage from './components/DashboardPage';
import AddPaper from './components/AddPaper';
import Admin from './components/Admin';
import Admnlogn from './components/Admlogn';
import Signup from './components/SingUp';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/addppr" element={<AddPaper />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/adminlogin" element={<Admnlogn />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
};

export default App;
