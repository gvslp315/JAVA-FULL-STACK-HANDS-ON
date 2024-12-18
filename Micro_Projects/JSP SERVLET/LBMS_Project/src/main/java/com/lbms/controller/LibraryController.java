package com.lbms.controller;

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
import com.ems.bean.Library;
import com.lbms.dao.LibraryDAO;

/**
 * Servlet implementation class LibraryController
 */
@WebServlet("/LibraryController")
public class LibraryController extends HttpServlet {
	static LibraryDAO dao=new LibraryDAO();
	int bookId;
	String bookName;
	String bookLang;
	int bookPrice;
	int n;
	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		PrintWriter out=response.getWriter();
		String operation=request.getParameter("crud");

		if (operation.equalsIgnoreCase("insert")) {
			bookId = Integer.parseInt(request.getParameter("bookId"));
			bookName = request.getParameter("bookName");
			bookLang = request.getParameter("bookLang");
			bookPrice = Integer.parseInt(request.getParameter("bookPrice"));

			Library library = new Library(bookId, bookName, bookLang,bookPrice);
			try {
				n = dao.insertBook(library);
			} catch (ClassNotFoundException e) {
				
			} catch (SQLException e) {
				
			}
			if (n == 1) {
				RequestDispatcher rd = request.getRequestDispatcher("Library.jsp");
				rd.include(request, response);
				out.println("<br><h4><font color='green'>Record Inserted</font></h4>");
			} else {
				out.println("<br><font color='red'>Record Not Inserted</font>");
			}
		}
		
		if (operation.equalsIgnoreCase("delete")) {
			bookId = Integer.parseInt(request.getParameter("bookId"));
			try {
				n = dao.deleteBook(bookId);
			} catch (ClassNotFoundException e) {
				
			} catch (SQLException e) {
				
			}
			if (n == 1) {
				RequestDispatcher rd = request.getRequestDispatcher("Library.jsp");
				rd.include(request, response);
				out.println("<br><font color='green'>Record  Deleted</font>");
			} else {
				RequestDispatcher rd = request.getRequestDispatcher("Library.jsp");
				rd.include(request, response);
				out.println("<br><font color='red'>Record not  Deleted</font>");
			}
		}
		
		if (operation.equalsIgnoreCase("update")) {
			bookId = Integer.parseInt(request.getParameter("bookId"));
			bookName = request.getParameter("bookName");
			bookLang = request.getParameter("bookLang");
			bookPrice = Integer.parseInt(request.getParameter("bookPrice"));

			Library library = new Library(bookId, bookName, bookLang,bookPrice);
			try {
				n = dao.updateBook(library);
			} catch (ClassNotFoundException e) {
				
			} catch (SQLException e) {
				
			}
			if (n == 1) {
				RequestDispatcher rd = request.getRequestDispatcher("Library.jsp");
				rd.include(request, response);
				out.println("<br><font color='green'>Record Updated</font>");
			} else {
				out.println("<br><font color='red'>Record Not Updated</font>");
			}
		}
		

		if(operation.equalsIgnoreCase("find")) {
			bookId = Integer.parseInt(request.getParameter("bookId"));			
			Library library = null;
			try {
				library = dao.findBook(bookId);
			} catch (ClassNotFoundException e) {
				
			} catch (SQLException e) {
			}
			if (library == null) {
				RequestDispatcher rd = request.getRequestDispatcher("Library.jsp");
				rd.include(request, response);
				out.println("<br><font color='red'>Record Not found</font>");
			} else {
				RequestDispatcher rd = request.getRequestDispatcher("Library.jsp");
				rd.include(request, response);
				out.println("<br><font color='green'><b> Book Id:"+library.getBookId()+ "<br>Book Name :" + library.getBookName()+ "<br>Book Language: " + 
				library.getBookLang()+"<br>Book Price:"+library.getBookPrice()+"<b></font>");
 
			}
			
		}
		
		if(operation.equalsIgnoreCase("findall")) {
			List<Library> list = null;
			try {
				list = dao.findallBook();
			} catch (ClassNotFoundException e) {
				
			} catch (SQLException e) {
				
			}
			if (list.isEmpty()) {
				System.out.println("Records Not Found");
			} else {
				RequestDispatcher rd = request.getRequestDispatcher("Library.jsp");
				rd.include(request, response);
				for (Library l : list) {
					out.println("<br><font color='green'><b>"+l.getBookId()+ " " + l.getBookName()+ " " + l.getBookLang()+" "+l.getBookPrice()+"<b></font>");
 
					out.println();
				}
			}
		}

		
		
		
	}

}
