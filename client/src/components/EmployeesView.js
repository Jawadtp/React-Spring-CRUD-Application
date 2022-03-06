import React from 'react'

const EmployeesView = (props) => {
    return (
        <div className='employeesTableWrapper'>
            <h2 className='text-center'>List of Employees</h2>
            <br/>
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

                    {props.employees.map((employee, index) => {
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
        </div>
    )
}

export default EmployeesView