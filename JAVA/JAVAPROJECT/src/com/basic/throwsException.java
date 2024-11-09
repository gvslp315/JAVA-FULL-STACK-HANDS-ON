package com.basic;

import java.io.FileNotFoundException;
import java.io.FileReader;
import java.sql.SQLException;

public class throwsException {
	
	static void myMethod() throws FileNotFoundException ,SQLException{
		FileReader fr=new FileReader(abc.txt);
	}

	public static void main(String[] args) throws FileNotFoundException, SQLException {
		// TODO Auto-generated method 
		throwsException.myMethod();
		

	}

}
