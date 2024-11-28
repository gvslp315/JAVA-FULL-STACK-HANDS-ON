package com.ems.controller;

import java.util.List;
import java.util.ListIterator;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ems.model.Employee;
import com.ems.repo.EmployeeRepo;

@RestController
@CrossOrigin(origins = "http://localhost:3000")

public class EmployeeController {
	
	@Autowired
	EmployeeRepo repo;
	
	@PostMapping("/create-employee")
	public Employee doInsert(@RequestBody Employee employee) {
		return repo.save(employee);	
	}
	
	@PutMapping("/update-employee")
	public Employee doUpdate(@RequestBody Employee employee) {
		System.out.println(employee);
		return repo.save(employee);	
	}
	
	@DeleteMapping("/delete-employee/{empId}")
	public void doDelete(@PathVariable("empId")int empId) {
		
		 repo.deleteById(empId);	
	}
	
	@GetMapping("/read-employee/{empId}")
	public Employee doRead(@PathVariable("empId")int empId) {
		
		 return repo.findById(empId).get();	
	}
	
	@GetMapping("/readall-employee")
	public List<Employee> doReadall() {
		
		 return (List<Employee>) repo.findAll();
	}
	
	@GetMapping("/find-employee-name/{empName}")
	public List<Employee> doFindByName(@PathVariable("empName")String empName) {
		
		 return  repo.findByEmpName(empName);
	}
	
	@DeleteMapping("/delete-employee-name/{empName}")
	public void doDeleteByName(@PathVariable("empName") String empName) {
		
		 repo.deleteByEmpName(empName);	
	}
	
	@GetMapping("/find-employee-salary/{empSalary}")
	public List<Employee> doFindBySalary(@PathVariable("empSalary")int  empSalary) {
		
		 return  repo.findByEmpSalary(empSalary);
	}
	
	@DeleteMapping("/delete-employee-salary/{empSalary}")
	public void doDeleteBySalary(@PathVariable("empSalary") int  empSalary) {
		  repo.deleteByEmpSalary(empSalary);
	}
	

}
