package com.dms.repo;

//import java.util.List;
//
//import org.springframework.data.jpa.repository.Modifying;
//import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
//import org.springframework.transaction.annotation.Transactional;

import com.dms.model.Department;



@Repository

public interface DepartmentRepo extends CrudRepository<Department,Integer> {
	
//	public  List<Department> findByEmpName(String empName); 
//	
//	@Transactional
//	public  void deleteByEmpName(String empName);
//	
//	@Query("from Employee where empSalary > :eSalary")
//	public  List<Department> findByEmpSalary(int eSalary); 
//
//	@Modifying
//	@Transactional
//	@Query("delete from Employee e where e.empSalary > :eSalary")
//	public void deleteByEmpSalary(int eSalary); 


		
	

}
