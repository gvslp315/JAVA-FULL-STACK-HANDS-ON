package com.ems.repo;

import java.util.List;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.ems.model.Employee;



@Repository

public interface EmployeeRepo extends CrudRepository<Employee,Integer> {
	
	public  List<Employee> findByEmpName(String empName); 
	
	@Transactional
	public  void deleteByEmpName(String empName);
	
	@Query("from Employee where empSalary > :eSalary")
	public  List<Employee> findByEmpSalary(int eSalary); 

	@Modifying
	@Transactional
	@Query("delete from Employee e where e.empSalary > :eSalary")
	public void deleteByEmpSalary(int eSalary); 


		
	

}
