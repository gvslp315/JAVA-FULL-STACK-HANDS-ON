package com.lp;

public class Student {
	private int sid;
	private String sname;
	private Parent parent;
	
	public Student() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Student(int sid, String sname, Parent parent) {
		super();
		this.sid = sid;
		this.sname = sname;
		this.parent = parent;
	}

	public int getSid() {
		return sid;
	}

	public void setSid(int sid) {
		this.sid = sid;
	}

	public String getSname() {
		return sname;
	}

	public void setSname(String sname) {
		this.sname = sname;
	}

	public Parent getParent() {
		return parent;
	}

	public void setParent(Parent parent) {
		this.parent = parent;
	}

	@Override
	public String toString() {
		return "Student [sid=" + sid + ", sname=" + sname + ", parent=" + parent + "]";
	}
	
	
	
	
	
	

}
