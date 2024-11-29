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

import com.ems.model.Department;
import com.ems.service.DepartmentService;

@RestController
@CrossOrigin
public class DepartmentController {
	
	DepartmentService deptService;
	
	@Autowired
	public DepartmentController(DepartmentService deptService) {
		super();
		this.deptService = deptService;
	}
	
	@PostMapping("/create-department")
	public Department doInsert(@RequestBody Department department) {
		return  deptService.createdepartment(department);	
	}
	
	@PutMapping("/update-department")
	public void doUpdate(@RequestBody  Department department) {
		deptService.updateDepartment(department);	
	}
	
	@DeleteMapping("/delete-department/{empId}")
	public void doDelete(@PathVariable("empId")int empId) {
		
		 deptService.deleteDepartment(empId);	
	}
	
	@GetMapping("/find-department/{empId}")
	public Department doRead(@PathVariable("empId")int empId) {
		
		 return deptService.findDepartment(empId);
	}
	
	@GetMapping("/findall-department")
	public List<Department> doReadall() {
		
		 return deptService.findallDepartment();
	}
	
	
	

}
