package com.lp;

public class Parent {
	
	private int pid;
	private String pname;
	
	public Parent() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public Parent(int pid, String pname) {
		super();
		this.pid = pid;
		this.pname = pname;
	}

	public int getPid() {
		return pid;
	}

	public void setPid(int pid) {
		this.pid = pid;
	}

	public String getPname() {
		return pname;
	}

	public void setPname(String pname) {
		this.pname = pname;
	}

	@Override
	public String toString() {
		return "Parent [pid=" + pid + ", pname=" + pname + "]";
	}
	
	
	
	

}
