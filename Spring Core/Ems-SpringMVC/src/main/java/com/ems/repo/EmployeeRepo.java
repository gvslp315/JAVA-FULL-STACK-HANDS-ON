package com.ems.repo;

import java.util.LinkedList;
import java.util.*;

import com.ems.model.Employee;

public class EmployeeRepo {
	
	LinkedList<Employee> list=new LinkedList();	
	Iterator<Employee> it;
	
	public boolean insertEmployee(Employee employee) {
		 boolean flag = list.add(employee);
		 return flag;
	}
	
	public boolean deleteEmployee(Employee employee) {
		boolean flag=false;
		it = list.iterator();
		 while(it.hasNext()) {
			 Employee e = it.next();
			 if(e.getEid()==employee.getEid()) {
				 list.remove(e);
				 flag = true;
				 break;
			 }
			 
		 }
		 return flag;
	}
	
	public boolean updateEmployee(Employee employee) {
		boolean flag=false;
		it=list.iterator();
		 while(it.hasNext()) {
			 Employee e = it.next();
			 if(e.getEid()==employee.getEid()) {
				 e.setEname(employee.getEname());
				 e.setEsalary(employee.getEsalary());
				 flag = true;
				 break;
			 }
			 
		 }
		 return flag;
	}
	
	public Employee findEmployee(Employee employee) {
		Employee emp=null;
		it=list.iterator();
		while(it.hasNext()) {
			 Employee e = it.next();
			 if(e.getEid()==employee.getEid()) {
				 emp=e;
			 }
			 
		 }
		return emp;
	}
	
	public LinkedList<Employee> findallEmployee() {
		
		return list;
	}


}
