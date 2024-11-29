package com.ems.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ems.model.Employee;
import com.ems.service.EmployeeService;

@RestController
@CrossOrigin(origins = "http://localhost:3000/")
public class EmployeeController {
	
	private EmployeeService employeeservice;

	@Autowired
	public EmployeeController(EmployeeService employeeservice) {
		super();
		this.employeeservice = employeeservice;
	}
	
	@PostMapping("/create-employee")
	public void doInsert(@RequestBody Employee employee) {
		employeeservice.createEmployee(employee);	
	}
	
	@PutMapping("/update-employee")
	public void doUpdate(@RequestBody Employee employee) {
		System.out.println(employee);
		employeeservice.updateEmployee(employee);	
	} 
	
	@DeleteMapping("/delete-employee/{empId}")
	public void doDelete(@PathVariable("empId")int empId) {
		
		 employeeservice.deleteEmployee(empId);	
	}
	
	@GetMapping("/find-employee/{empId}")
	public Employee doRead(@PathVariable("empId")int empId) {
		
		 return employeeservice.findEmployee(empId);
	}
	
	@GetMapping("/findall-employee")
	public List<Employee> doReadall() {
		
		 return employeeservice.findallEmployee();
	}
	
	

}
