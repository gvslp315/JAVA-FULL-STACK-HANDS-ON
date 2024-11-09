package com.ems.main;

import java.sql.SQLException;
import java.util.*;

import com.ems.bean.Employee;
import com.ems.dao.EmployeeDao;

public class EMS {
	
	static Scanner sc=new Scanner(System.in);
	static EmployeeDao dao=new EmployeeDao();
	
	public static int menu() {
		System.out.println("1 -> Insert");
		System.out.println("2 -> Delete");
		System.out.println("3 -> Update");
		System.out.println("4 -> Find");
		System.out.println("5 -> FindAll");
		System.out.println("6 -> Exit the Application");
		System.out.println("enter your choice");
		int choice=sc.nextInt();
		return choice;
	}
	
	public static Employee insertEmployee() {
		System.out.println("Enter the Employee Id ,Employee Name,Employee Salary");
//		Employee employee=new Employee(sc.nextInt(),sc.next(),sc.nextInt());
//		return employee;
		return new Employee(sc.nextInt(),sc.next(),sc.nextInt());
		
	}
	
	public static int deleteEmployee() {
		System.out.println("Enter the Employee Id");
		return sc.nextInt();
		
	}
	
	public static Employee updateEmployee() {
		System.out.println("Enter the Employee ID ,Employee Name,Employee Salary");
//		Employee employee=new Employee(sc.nextInt(),sc.next(),sc.nextInt());
//		return employee;
		return new Employee(sc.nextInt(),sc.next(),sc.nextInt());
		
	}
	
	public static int findEmployee() {
		System.out.println("Enter the Employee Id");
		return sc.nextInt();
		
	}
	
	

	public static void main(String[] args) throws ClassNotFoundException, SQLException {
		// TODO Auto-generated method stub
		
		String msg="";
		int n;
		do {
		switch(EMS.menu()) {
		
		case 1:
			Employee employee=insertEmployee();
			 n=dao.insertEmployee(employee);
			
			if(n==1)
				System.out.println("record inserted");
			else
				System.out.println("record not inserted");
			break;
			
		case 2:
			
			int eid=deleteEmployee();
			 n=dao.deleteEmployee(eid);
			
			if(n==1)
				System.out.println("record deleted");
			else
				System.out.println("record not deleted");
			break;
			
		case 3:
			
			Employee employee1=updateEmployee();
			 n=dao.updateEmployee(employee1);
			
			if(n==1)
				System.out.println("record Updated");
			else
				System.out.println("record not updated");
			
			break;
		case 4:
			
			int eid1=findEmployee();
			 Employee temp=dao.findEmployee(eid1);
			 if(temp==null) {
				 System.out.println("record not found");
			 }
			 else {
				 System.out.println(temp.getEid()+"  "+temp.getEname()+"  "+temp.getEsalary());
			 }
			break;
			
		case 5:
			
			List <Employee> list=dao.findallEmployee();
			for(Employee e:list) {
				System.out.println(e.getEid()+" "+e.getEname()+"  "+e.getEsalary());
			}
			
			break;
		case 6:
			System.exit(0);
			break;
	
		}
		System.out.println("Do you want  to Continue {yes/no}");
		 msg=sc.next();
		}while(msg.equalsIgnoreCase("yes"));
		

	}

}
