import './App.css';

import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import AddEmployee from './components/AddEmployee';
import UpdateEmployee from './components/UpdateEmployee';
import EmployeesView from './components/EmployeesView';


function App() {

  return (
    <div className="App">
      <Navbar />

      <Router>
        <Routes>
          <Route path="/" element={<EmployeesView/>} />
          <Route path="/add-employee" element={<AddEmployee />} />
          <Route path="/employee/:id" element={<UpdateEmployee/>} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
