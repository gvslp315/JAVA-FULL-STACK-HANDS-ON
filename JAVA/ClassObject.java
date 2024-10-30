package com.basic;

public class ClassObject {
	int eid;
	String ename;
	float esal;
	ClassObject(int id,String name,float salary){
		eid=id;
		ename=name;
		esal=salary;
	}
	void display() {
		System.out.println("Emp ID: "+eid);
		System.out.println("Emp Name: "+ename);
		System.out.println("Emp Salary: "+esal);
	}


	public static void main(String[] args) {
		// TODO Auto-generated method stub
		ClassObject lp=new ClassObject(101,"gvslp",150000);
		lp.display();
 

	}

}
