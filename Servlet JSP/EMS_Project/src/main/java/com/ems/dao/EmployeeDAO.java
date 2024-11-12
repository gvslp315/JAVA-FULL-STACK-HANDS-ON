package com.ems.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.LinkedList;
import java.util.List;

import com.ems.bean.Employee;
import com.ems.util.DBUtil;

public class EmployeeDAO {
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
	
	public int deleteEmployee(int eid) throws ClassNotFoundException, SQLException{
		Connection con=DBUtil.getDBConnection();
		String sql="delete from employee where eid=?";
		PreparedStatement ps=con.prepareStatement(sql);
		ps.setInt(1, eid);
	
		int n=ps.executeUpdate();
		return n;
	}
	
	public int updateEmployee(Employee employee) throws ClassNotFoundException, SQLException{
		Connection con=DBUtil.getDBConnection();
		String sql="update employee set ename=?,esalary=? where eid=?";
		PreparedStatement ps=con.prepareStatement(sql);
		ps.setString(1, employee.getEname());
		ps.setInt(2, employee.getEsalary());
		ps.setInt(3, employee.getEid());
		int n=ps.executeUpdate();
		return n;
	}
	
	public Employee findEmployee(int eid) throws ClassNotFoundException, SQLException{
		Employee emp=null;
		Connection con=DBUtil.getDBConnection();
		String sql="select *from employee where eid=?";
		PreparedStatement ps=con.prepareStatement(sql);
		ps.setInt(1, eid);
	
		ResultSet rs=ps.executeQuery();
		if(rs.next()) {
			emp=new Employee();
			emp.setEid(rs.getInt("eid"));
			emp.setEname(rs.getString("ename"));
			emp.setEsalary(rs.getInt("esalary"));	
		}
		return emp;
		
	}
	
	public List<Employee> findallEmployee() throws ClassNotFoundException, SQLException{
		List <Employee> list=new LinkedList();
		Connection con=DBUtil.getDBConnection();
		String sql="select *from employee";
		PreparedStatement ps=con.prepareStatement(sql);
	
		ResultSet rs=ps.executeQuery();
		while(rs.next()) {
			Employee emp=new Employee();
			emp.setEid(rs.getInt("eid"));
			emp.setEname(rs.getString("ename"));
			emp.setEsalary(rs.getInt("esalary"));	
			
			list.add(emp);
		}
		return list;
		
	}
	

}
