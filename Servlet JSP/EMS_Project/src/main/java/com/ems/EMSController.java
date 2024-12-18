package com.ems;

import java.io.IOException;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.ems.bean.Employee;
import com.ems.dao.SampleDAO;

/**
 * Servlet implementation class EMSController
 */
@WebServlet("/EMSController")
public class EMSController extends HttpServlet {
	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		SampleDAO dao=new SampleDAO();
		String op=request.getParameter("crud");
		if(op.equals("insert")) {
			Employee emp=new Employee(Integer.parseInt(request.getParameter("eid")),request.getParameter("ename"),
					Integer.parseInt(request.getParameter("esalary")));
			int n;
			try {
				n = dao.insertEmployee(emp);
				if(n==1) {
					response.sendRedirect("Result.jsp?status=success&msg=Record Inserted");
				}
				else {
					response.sendRedirect("Result.jsp?status=fail&msg=Record Not Inserted");

				}
			} catch (ClassNotFoundException | SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			
		}
	}

}
