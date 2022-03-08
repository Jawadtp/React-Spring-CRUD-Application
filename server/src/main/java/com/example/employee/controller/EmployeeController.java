package com.example.employee.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.employee.repository.EmployeeRepository;
import com.example.employee.exception.ResourceNotFoundException;
import com.example.employee.model.Employee;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class EmployeeController 
{
    @Autowired
    private EmployeeRepository employeeRepository;

     
    @GetMapping("/employees")
    public List<Employee> getEmployees()
    {
       return employeeRepository.findAll();
    }

    @PostMapping("/employee")
    public Employee addEmployee(@RequestBody Employee employee)
    {
        return employeeRepository.save(employee);
    }

    @GetMapping("/employee/{id}")
    public Employee getEmployeeById(@PathVariable Long id)
    {
        return employeeRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Employee with this id could not be found. ID: "+id));
    }

    @PutMapping("employee/{id}")
    public ResponseEntity<Employee> updateEmployeeById(@RequestBody Employee employeeDetails, @PathVariable Long id)
    {
        Employee employee = employeeRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("Employee with thid id not found"));
        employee.setFirstName(employeeDetails.getFirstName());
        employee.setLastName(employeeDetails.getLastName());
        employee.setEmailId(employeeDetails.getEmailId());
        employeeRepository.save(employee);
        return ResponseEntity.ok(employee);
    }
/*
    @DeleteMapping("employee/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteEmployeeById(@PathVariable Long id)
    {
        Employee employee = employeeRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("Employee not found. ID: "+id));
       employeeRepository.delete(employee);
       Map<String,Boolean> response = new HashMap<>();
       response.put("Deleted", true);
       return ResponseEntity.ok(response);
    }
*/
    @DeleteMapping("employee/{id}")
    public void deleteEmployeeById(@PathVariable Long id)
    {
        Employee employee = employeeRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("Employee not found. ID: "+id));
       employeeRepository.delete(employee);
       
    }
}
