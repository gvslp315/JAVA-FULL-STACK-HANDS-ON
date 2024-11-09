package com.lbms.util;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DBUtil {
	public static Connection getConnection() throws ClassNotFoundException, SQLException{

		Class.forName("org.postgresql.Driver");
		
		//step2 create the connection with DB
		
		Connection con=DriverManager.getConnection("jdbc:postgresql://localhost:5432/postgres",
	            "postgres", "postgres");
		return con;
	}

}
