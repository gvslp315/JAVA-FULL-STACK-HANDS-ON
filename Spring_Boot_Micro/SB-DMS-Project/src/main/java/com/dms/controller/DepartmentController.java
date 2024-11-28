package com.dms.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.dms.model.Department;
import com.dms.repo.DepartmentRepo;

@RestController



public class DepartmentController {
	
	@Autowired
	DepartmentRepo repo;
	
	
	@PostMapping("/create-department")
	public Department doInsert(@RequestBody Department department) {
		return  repo.save(department);	
	}
	
	@PostMapping("/update-department")
	public void doUpdate(@RequestBody  Department department) {
		repo.save(department);	
	}
	
	@DeleteMapping("/delete-department/{deptId}")
	public void doDelete(@PathVariable("deptId")int deptId) {
		
		 repo.deleteById(deptId);	
	}
	
	@GetMapping("/find-department/{deptId}")
	public Department doRead(@PathVariable("deptId")int deptId) {
		
		 return repo.findById(deptId).get();
	}
	
	@GetMapping("/findall-department")
	public List<Department> doReadall() {
		
		 return (List<Department>) repo.findAll();
	}
	
	@GetMapping("/get-dept")
	public String getDepartement() {
		return "data coming from department";
	}
	
	@GetMapping("/get-details/{deptId}")
	public String getDepartementDetails(@PathVariable("deptId")int deptId) {
		Department dep =repo.findById(deptId).get();
		return dep.getDeptId()+"  "+dep.getDeptName();
	}

}
