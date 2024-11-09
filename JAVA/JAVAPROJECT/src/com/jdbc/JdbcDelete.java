package com.jdbc;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class JdbcDelete {

	public static void main(String[] args) throws ClassNotFoundException, SQLException {
		// TODO Auto-generated method stub
		
		//step1 loading the driver into the jvm
		
		Class.forName("org.postgresql.Driver");
		
		//step2 create the connection with DB
		
		Connection con=DriverManager.getConnection("jdbc:postgresql://localhost:5432/postgres",
	            "postgres", "postgres");
		
		//step3 creating a statement /prepared statement
		
		String sql="delete from employee where eid=?";
		PreparedStatement ps=con.prepareStatement(sql);
		
		//step-4 execute the query
		
		ps.setInt(1, 136);
		
		
		int n=ps.executeUpdate();
		if(n==1)
			System.out.println("record has been deleted");
		else
			System.out.println("record not deleted");
		

	}

}
