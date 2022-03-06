import React from 'react'

import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <a class="navbar-brand" href="#">The Employee Directory</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto mx-4">
                    <li class="nav-item active">
                        <a class="nav-link" href="/">View Employees <span class="sr-only">(current)</span></a>

                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" href="/add-employee">Add Employee <span class="sr-only">(current)</span></a>
                    </li>
                  
                   
                   
                </ul>
                
            </div>
        </nav>
    )
}

export default Navbar