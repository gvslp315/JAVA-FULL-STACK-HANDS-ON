package com.ems.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

import com.ems.bean.Employee;
import com.ems.util.DBUtil;

public class SampleDAO {
	public int insertEmployee(Employee employee) throws ClassNotFoundException, SQLException{
		Connection con=DBUtil.getDBConnection();
		String sql="insert into employee values(?,?,?)";
		PreparedStatement ps=con.prepareStatement(sql);
		ps.setInt(1, employee.getEid());
		ps.setString(2, employee.getEname());
		ps.setInt(3, employee.getEsalary());
		int n=ps.executeUpdate();
		return n;
	}
}
