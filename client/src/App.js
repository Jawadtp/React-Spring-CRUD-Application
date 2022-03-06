import './App.css';

import { useState, useEffect } from 'react';
import EmployeesView from './components/EmployeesView';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import AddEmployee from './components/AddEmployee';


function App() 
{
  
  return (
    <div className="App">
      <Navbar/>

      <Router>
        <Routes>
          <Route path="/" element={<EmployeesView/>}/>
          <Route path="/add-employee" element={<AddEmployee/>}/>

        </Routes>
      </Router>

    </div>
  );
}

export default App;
