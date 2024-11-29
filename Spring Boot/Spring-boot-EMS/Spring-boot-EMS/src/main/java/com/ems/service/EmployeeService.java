package com.ems.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ems.model.Employee;
import com.ems.repository.EmployeeRepo;

@Service
public class EmployeeService {
	
	EmployeeRepo repo;
	
	@Autowired
	public EmployeeService(EmployeeRepo repo) {
		super();
		this.repo = repo;
	}


	public void createEmployee(Employee employee) {
		  repo.save(employee);
	}


	public void updateEmployee(Employee employee) {
		repo.save(employee);
		
	}


	public void deleteEmployee(int empId) {
		repo.deleteById(empId);
		
	}


	public Employee findEmployee(int empId) {
		// TODO Auto-generated method stub
		return repo.findById(empId).get();
	}


	public List<Employee> findallEmployee() {
		// TODO Auto-generated method stub
		return (List<Employee>) repo.findAll();
	}

}
