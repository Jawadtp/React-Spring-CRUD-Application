import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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

  function deleteEmployee(id)
  {
    let check = window.confirm("Are you sure you want to delete employee with ID "+id+"? This operation is not reversible.");
    if(!check) return
    fetch('http://localhost:8080/api/v1/employee/'+id, { method: 'DELETE' })
    .then(() => 
    {
        console.log("Successfully deleted")
        window.location.reload();
    })
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
                                <th scope="row">{employee['id']}</th>
                                <td>{employee['firstName']}</td>
                                <td>{employee['lastName']}</td>
                                <td>{employee['emailId']}</td>
                                <td>
                                    <Link to={'/employee/'+employee['id']} class="btn btn-warning">Update</Link>
                                    <button type="button" onClick={() => deleteEmployee(employee['id'])} class="btn deleteBtn btn-danger">Danger</button>
                                </td>
                                
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