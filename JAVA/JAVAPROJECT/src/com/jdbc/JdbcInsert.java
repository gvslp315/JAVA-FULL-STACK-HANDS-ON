package com.jdbc;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class JdbcInsert {

	public static void main(String[] args) throws SQLException, ClassNotFoundException {
		// TODO Auto-generated method stub
		
		//step1 loading the driver into the jvm
		
		Class.forName("org.postgresql.Driver");
		
		//step2 create the connection with DB
		
		Connection con=DriverManager.getConnection("jdbc:postgresql://localhost:5432/postgres",
	            "postgres", "postgres");
		
		//step3 creating a statement /prepared statement
		
		String sql="insert into employee values(?,?,?)";
		PreparedStatement ps=con.prepareStatement(sql);
		
		//step-4 execute the query
		
		ps.setInt(1, 140);
		ps.setString(2, "srujan");
		ps.setInt(3, 70000);
		
		int n=ps.executeUpdate();
		if(n==1)
			System.out.println("record has been inserted");
		else
			System.out.println("record not inserted");
		
		

	}

}
