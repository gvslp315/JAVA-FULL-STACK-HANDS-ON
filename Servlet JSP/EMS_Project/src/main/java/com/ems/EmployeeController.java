package com.ems;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.SQLException;
import java.util.List;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.ems.bean.Employee;
import com.ems.dao.EmployeeDAO;

/**
 * Servlet implementation class EmployeeController
 */
@WebServlet("/EmployeeController")
public class EmployeeController  extends HttpServlet  {
	static EmployeeDAO dao = new EmployeeDAO();
	 	int eid;
		String ename;
		int esalary;
		int n;
	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) 
			throws  ServletException, IOException {
		// TODO Auto-generated method stub
		
		PrintWriter out=response.getWriter();
		String operation=request.getParameter("crud");
		
		
		if (operation.equalsIgnoreCase("insert")) {
			eid = Integer.parseInt(request.getParameter("eid"));
			ename = request.getParameter("ename");
			esalary = Integer.parseInt(request.getParameter("esalary"));
			Employee emp = new Employee(eid, ename, esalary);
			try {
				n = dao.insertEmployee(emp);
			} catch (ClassNotFoundException e) {
				
			} catch (SQLException e) {
				
			}
			if (n == 1) {
				RequestDispatcher rd = request.getRequestDispatcher("Employee.jsp");
				rd.include(request, response);
				response.sendRedirect("");;
				out.println("<br><h3><font align='center' color='green'>Record Inserted</font></h3>");
			} else {
				out.println("<br><font color='red'>Record Not Inserted</font>");
			}
		}
		
		if (operation.equalsIgnoreCase("update")) {
			eid = Integer.parseInt(request.getParameter("eid"));
			ename = request.getParameter("ename");
			esalary = Integer.parseInt(request.getParameter("esalary"));
			Employee emp = new Employee(eid, ename, esalary);
			try {
				n = dao.updateEmployee(emp);
			} catch (ClassNotFoundException e) {
				
			} catch (SQLException e) {
				
			}
			if (n == 1) {
				RequestDispatcher rd = request.getRequestDispatcher("Employee.jsp");
				rd.include(request, response);
				out.println("<br><font color='green'>Record Updated</font>");
			} else {
				out.println("<br><font color='red'>Record Not Updated</font>");
			}
		}
		
		if (operation.equalsIgnoreCase("delete")) {
			eid = Integer.parseInt(request.getParameter("eid"));
			try {
				n = dao.deleteEmployee(eid);
			} catch (ClassNotFoundException e) {
				
			} catch (SQLException e) {
				
			}
			if (n == 1) {
				RequestDispatcher rd = request.getRequestDispatcher("Employee.jsp");
				rd.include(request, response);
				out.println("<br><font color='green'>Record Deleted</font>");
			} else {
				RequestDispatcher rd = request.getRequestDispatcher("Employee.jsp");
				rd.include(request, response);
				out.println("<br><font color='red'>Record Not Deleted</font>");
			}
		}
		
		if(operation.equalsIgnoreCase("find")) {
			eid = Integer.parseInt(request.getParameter("eid"));
			Employee employee = null;
			try {
				employee = dao.findEmployee(eid);
			} catch (ClassNotFoundException e) {
				
			} catch (SQLException e) {
			}
			if (employee == null) {
				RequestDispatcher rd = request.getRequestDispatcher("Employee.jsp");
				rd.include(request, response);
				out.println("<br><font color='red'>Record Not found</font>");
			} else {
				RequestDispatcher rd = request.getRequestDispatcher("Employee.jsp");
				rd.include(request, response);
				out.println("<br><font color='green'><b> Emplpyee Id"+employee.getEid() + "<br>Employee Name " + employee.getEname() + "<br>Employee Salary " + employee.getEsalary()+"<b></font>");
 
			}
			
		}
		
		if(operation.equalsIgnoreCase("findall")) {
			List<Employee> list = null;
			try {
				list = dao.findallEmployee();
			} catch (ClassNotFoundException e) {
				
			} catch (SQLException e) {
				
			}
			if (list.isEmpty()) {
				System.out.println("Records Not Found");
			} else {
				RequestDispatcher rd = request.getRequestDispatcher("Employee.jsp");
				rd.include(request, response);
				for (Employee e : list) {
					out.println("<br><font color='green'><b>"+e.getEid() + " " + e.getEname() + " " + e.getEsalary()+"<b></font>");
 
					out.println();
				}
			}
		}
		
		
	}

}
