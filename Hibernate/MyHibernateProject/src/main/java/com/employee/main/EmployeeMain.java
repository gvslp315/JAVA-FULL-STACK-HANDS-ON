package com.employee.main;

import java.util.Iterator;
import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.SQLQuery;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;
import org.hibernate.criterion.Restrictions;
import org.hibernate.query.Query;

import com.employee.pojo.Employee;

public class EmployeeMain {

	public static void main(String[] args) {
		Configuration config = new Configuration();
		config.configure("employee.config.xml");

		SessionFactory factory = config.buildSessionFactory();

		Session session = factory.openSession();
		Transaction tn = session.beginTransaction();

//		Employee emp = new Employee();
//		emp.setEid(102);
		///emp.setEname("Chandra");
		//emp.setEsalary(50000);
		//session.update(emp);
		//System.out.println("Object Saved");
		
//		session.delete(emp);
//		
//		Employee employee=session.get(Employee.class, 137);
//		System.out.println(employee.getEid()+" "+employee.getEname()+"  "+employee.getEsalary());
//		System.out.println(emp);
		
//		Select query using HQL
		
//		List<Employee> list=session.createQuery("FROM Employee").list();
//		System.out.println(list);
		
//Find query using the HQL 
//		Query query=session.createQuery("from Employee where eid=137");
//		List<Employee> list=query.list();
//		System.out.println(list);
	
		
//		int id=138;
//
//		Query query=session.createQuery("from Employee where eid=:idno");
//		query.setParameter("idno", id);
//		List<Employee> list=query.list();
//		System.out.println(list);	

	//Update query using HQL
//		int id=138;
//		String name="priya";
//		int salary=23456;
//		Query query=session.createQuery("update Employee set ename=:name,esalary=:salary where eid=:id");
//		query.setParameter("id",id);
//		query.setParameter("name",name);
//		query.setParameter("salary",salary);
//		int n=query.executeUpdate();
//		//List<Employee> list=query.list();
//		//System.out.println(list);
//		System.out.println(n);
		
		//DELETE query using HQL
		
//		int id=138;
//		Query query=session.createQuery("delete from Employee  where id=:id");
//		query.setParameter("id",id);
//		int n=query.executeUpdate();
		
		//SELECT SPECIFIC COLUMNS  FROM THE TABLE
		
//		int id=140;
//		Query query=session.createQuery("select obj.ename,obj.esalary from Employee obj where obj.id=:id ");
//		query.setParameter("id",id);
//		List<Employee> list=query.list();
//		Iterator it=list.iterator();
//		while(it.hasNext()) {
//			Object data[]=(Object[])it.next();
//			System.out.println(data[0]+" "+data[1]);
//		}
//		System.out.println(list);
		
		
//		HIBERNATE CRITERIA QUERY LANGUAGE
		
//		Criteria query=session.createCriteria(Employee.class);
//		query.add(Restrictions.eq("eid", 101));
//		List<Employee> list=query.list();
//		Iterator<Employee> it=list.iterator();
//		while(it.hasNext()) {
//			Employee emp=it.next();
//			System.out.println(emp.getEid()+" "+emp.getEname()+" "+emp.getEsalary());
//			
//			Object data[]=(Object[])it.next();
//			System.out.println(data[0]+" "+data[1]);
//		}
//		System.out.println(list);
		
		//NATIVE SQL QUERY
		SQLQuery query=session.createSQLQuery("select *from employee");
		query.addEntity(Employee.class);
		List<Employee> list=query.list();
		Iterator<Employee> it=list.iterator();
		while(it.hasNext()) {
			Employee emp=it.next();
			System.out.println(emp.getEid()+" "+emp.getEname()+" "+emp.getEsalary());
		}
		tn.commit();
		session.close();
		factory.close();


	}

}
