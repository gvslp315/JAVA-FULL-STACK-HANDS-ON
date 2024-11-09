package com.jdbc;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class JdbcSelect {
	public static void main(String args[]) throws ClassNotFoundException, SQLException {
		
		//step1 loading the driver into the jvm
		
		Class.forName("org.postgresql.Driver");
		
		//step2 create the connection with DB
		
		Connection con=DriverManager.getConnection("jdbc:postgresql://localhost:5432/postgres",
	            "postgres", "postgres");
		
		//step3 creating a statement /prepared statement
		
		String sql="select *from employee";
		PreparedStatement ps=con.prepareStatement(sql);
		
		//step-4 execute the query
		

		
		//int n=ps.executeUpdate();
		
	ResultSet rs=ps.executeQuery();
	while(rs.next()) {
		System.out.println(rs.getInt("eid")+" "+rs.getString("ename")+" "+rs.getInt("esalary"));
	}
		
	}

}
