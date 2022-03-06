import React from 'react'
import { useState, useEffect } from 'react';

const EmployeesView = () => 
{
    const [employees, setEmployees] = useState([])

  async function fetchEmployees()
  {
    const response = await fetch('http://localhost:8080/api/v1/employees');
    const data = await response.json();
    console.log(data)
    setEmployees(data)
    
    
  }
  useEffect(() => 
  {
    fetchEmployees()
   
  },[]);

    return (
        <div className='employeesTableWrapper'>
            <h2 className='text-center'>List of Employees</h2>
            <br/>
            {!employees.length?'Loading..':
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Email ID</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>

                    {employees.map((employee, index) => {
                        return <>
                            <tr>
                                <th scope="row">{index + 1}</th>
                                <td>{employee['firstName']}</td>
                                <td>{employee['lastName']}</td>
                                <td>{employee['emailId']}</td>
                            </tr>
                        </>
                    })}


                </tbody>
            </table>
        }
        </div>
    )
}

export default EmployeesView