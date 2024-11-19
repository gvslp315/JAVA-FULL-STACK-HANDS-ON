

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class Calculator
 */
@WebServlet("/Calculator")
public class Calculator extends HttpServlet {
	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		int n1=Integer.parseInt(request.getParameter("n1"));
		int n2=Integer.parseInt(request.getParameter("n2"));
		
		String triggerfrom=request.getParameter("calc");
		PrintWriter out=response.getWriter();

		
		if(triggerfrom.equals("Addition")) {
			RequestDispatcher rd=request.getRequestDispatcher("Calculator.jsp");
			rd.include(request, response);
			
			out.println("<font color='green'>"+(n1+n2)+"</font>");
		}
		if(triggerfrom.equals("Substraction")) {
			RequestDispatcher rd=request.getRequestDispatcher("Calculator.jsp");
			rd.include(request, response);
			out.println("<font color='green'>"+(n1-n2)+"</font>");
		}
		if(triggerfrom.equals("Multiplication")) {
			RequestDispatcher rd=request.getRequestDispatcher("Calculator.jsp");
			rd.include(request, response);
		
			out.println("<font color='green'>"+(n1*n2)+"</font>");
		}
		if(triggerfrom.equals("Division")) {
			RequestDispatcher rd=request.getRequestDispatcher("Calculator.jsp");
			rd.include(request, response);
			out.println("<font color='green'>"+(n1/n2)+"</font>");
		}
		
		out.close();
		

	}

}
