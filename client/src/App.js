import './App.css';

import { useState, useEffect } from 'react';
import EmployeesView from './components/EmployeesView';

function App() 
{
  const [employees, setEmployees] = useState([])

  async function fetchEmployees()
  {
    const response = await fetch('http://localhost:8080/api/v1/employees');
    const data = await response.json();
    console.log(data)
    setEmployees(data)
    
    /*
    fetch('http://localhost:8080/api/v1/employees')
    .then(response => response.json())
    .then(data => setEmployees(data));
    */
  }
  useEffect(() => 
  {
    fetchEmployees()
    /*
    console.log("fetching data....")
    fetch('http://localhost:8080/api/v1/employees')
    .then(response => response.json())
    .then(data => setEmployees(data));
    */
  },[]);

  return (
    <div className="App">
      {employees.length?<EmployeesView employees={employees}/>:'loading'}
    </div>
  );
}

export default App;
