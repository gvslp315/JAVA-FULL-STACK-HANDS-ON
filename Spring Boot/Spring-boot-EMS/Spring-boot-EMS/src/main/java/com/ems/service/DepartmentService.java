package com.ems.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.ems.model.Department;
import com.ems.model.Employee;
import com.ems.repository.DepartmentRepo;

@Service
public class DepartmentService {
	
	DepartmentRepo repo;
	
	

	public DepartmentService(DepartmentRepo repo) {
		super();
		this.repo = repo;
	}



	public Department createdepartment(Department department) {
		
		return (Department) repo.save(department);
	}



	public void updateDepartment( Department department) {
		repo.save(department);
		
	}



	public void deleteDepartment(int deptId) {
		repo.deleteById(deptId);
		
	}



	public Department findDepartment(int deptId) {
		// TODO Auto-generated method stub
		return repo.findById(deptId).get();
	}



	public List<Department> findallDepartment() {
		// TODO Auto-generated method stub
		return (List<Department>) repo.findAll();
	}

}
