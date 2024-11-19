package com.employee.dao;

import org.hibernate.Session;
import org.hibernate.Transaction;

import com.employee.pojo.Employee;

public class EmployeeDAO {
	 public void saveStudent(Employee employee) {
	        // Get session and transaction
	        Session session = HibernateUtil.getSessionFactory().openSession();
	        Transaction transaction = session.beginTransaction();
	        
	        try {
	            session.save(student); // Save student to database
	            transaction.commit(); // Commit the transaction
	        } catch (Exception e) {
	            transaction.rollback(); // Rollback on failure
	            e.printStackTrace();
	        } finally {
	            session.close(); // Close the session
	        }
	    }

}
