package com.ems.bean;

public class Department {
	private String deptmanager;
	private String deptname;
	
	public Department() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Department(String deptmanager, String deptname) {
		super();
		this.deptmanager = deptmanager;
		this.deptname = deptname;
	}

	public String getDeptmanager() {
		return deptmanager;
	}

	public void setDeptmanager(String deptmanager) {
		this.deptmanager = deptmanager;
	}

	public String getDeptname() {
		return deptname;
	}

	public void setDeptname(String deptname) {
		this.deptname = deptname;
	}

	@Override
	public String toString() {
		return "Department [deptmanager=" + deptmanager + ", deptname=" + deptname + "]";
	}
	
	
	
	
	

}
