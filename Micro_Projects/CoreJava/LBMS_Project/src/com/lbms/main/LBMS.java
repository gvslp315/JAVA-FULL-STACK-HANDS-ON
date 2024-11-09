package com.lbms.main;

import java.sql.SQLException;
import java.util.List;
import java.util.Scanner;

import com.ems.bean.Employee;
import com.ems.main.EMS;
import com.lbms.bean.Library;
import com.lbms.dao.LibraryDAO;

public class LBMS {
	
	static Scanner sc=new Scanner(System.in);
	
	static LibraryDAO dao=new LibraryDAO();

	public static int menu() {
		System.out.println("Select your option");
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
	
	public static Library insertBook() {
		System.out.println("Enter Book ID , Book Name, Book Language, Book Price");
		return new Library(sc.nextInt(),sc.next(),sc.next(),sc.nextInt());
	}
	
	public static int deleteBook() {
		System.out.println("Enter the Book Id");
		return sc.nextInt();
		
	}
	
	public static Library updateBook() {
		System.out.println("Enter Book ID , Book Name, Book Language, Book Price");
		return new Library(sc.nextInt(),sc.next(),sc.next(),sc.nextInt());
	}
	
	public static int findBook() {
		System.out.println("Enter the Book Id");
		return sc.nextInt();
		
	}
	
	public static void main(String[] args) throws ClassNotFoundException, SQLException {
		// TODO Auto-generated method stub
		
		String msg="";
		do {
		switch(LBMS.menu()) {
		
		case 1:
			Library library=insertBook();
			int n=dao.insertBook(library);
			
			if(n==1)
				System.out.println("record inserted");
			else
				System.out.println("record not inserted");
			break;
			
		case 2:
			
			int bookid=deleteBook();
			 n=dao.deleteBook(bookid);
			
			if(n==1)
				System.out.println("record deleted");
			else
				System.out.println("record not deleted");
			break;
			
		case 3:
			
			Library library1=updateBook();
			 n=dao.updateBook(library1);
			
			if(n==1)
				System.out.println("record Updated");
			else
				System.out.println("record not updated");
			break;
			
		case 4:
			int bookid1=findBook();
			 Library temp=dao.findEmployee(bookid1);
			 if(temp==null) {
				 System.out.println("record not found");
			 }
			 else {
				 System.out.println(temp.getBookId()+"  "+temp.getBookName()+"  "+temp.getBookLang()+"  "+temp.getBookPrice());
			 }
			break;
		
		case 5:
			

			List <Library> list=dao.findallBook();
			for(Library b:list) {
				System.out.println(b.getBookId()+" "+b.getBookName()+"  "+b.getBookLang()+" "+b.getBookPrice());
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
