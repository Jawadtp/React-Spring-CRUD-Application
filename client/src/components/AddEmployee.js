import React from 'react'

import { useState } from 'react'
import { Link } from 'react-router-dom'

const AddEmployee = () => {
    const [employee, setEmployee] = useState({ firstName: "", lastName: "", emailId: "" })

    async function addEmployee() {
        const response = await fetch('http://localhost:8080/api/v1/employee', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(employee)
        });
        console.log(response)
    }


    return (
        <div className="addEmployeeWrapper">
            <form>
                <div className='text-center'>
                    Add Employee
                </div>
                <div class="form-group">
                    <label for="firstName">First name</label>
                    <input onChange={(e) => setEmployee({ ...employee, firstName: e.target.value })} value={employee.firstName} type="text" class="form-control" id="firstName" placeholder="Enter employee's first name" />
                </div>
                <div class="form-group">
                    <label for="lastName">Last name</label>
                    <input onChange={(e) => setEmployee({ ...employee, lastName: e.target.value })} value={employee.lastName} type="text" class="form-control" id="lastName" placeholder="Enter employee's last name" />
                </div>

                <div class="form-group">
                    <label for="emailId">Email ID</label>
                    <input onChange={(e) => setEmployee({ ...employee, emailId: e.target.value })} value={employee.emailId} type="email" class="form-control" id="emailId" placeholder="Enter employee's email ID" />
                </div>

                <br />
                <Link to="/" class="btn btn-warning">Cancel</Link>
                <button type="button" onClick={addEmployee} class="btn btn-primary addEmployeeBtn">Add Employee</button>

            </form>
        </div>
    )
}

export default AddEmployee