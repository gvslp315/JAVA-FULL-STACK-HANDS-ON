package com.basic;

public class ObjectClone implements Cloneable  {
	
	int id;
	String name;
	float salary;
	
	ObjectClone(int id,String name,float salary){
		this.id=id;
		this.name=name;
		this.salary=salary;
		
	}
	
	void display() {
		System.out.println("employee id "+id);
		System.out.println("employee name "+name);
		System.out.println("employee salary "+salary);
	}
	public static void main(String[] args) throws CloneNotSupportedException {
		// TODO Auto-generated method stub
		ObjectClone obj1=new ObjectClone(143,"lakshmi pathi",123.4f);
		obj1.display();
		
		ObjectClone obj2=(ObjectClone) obj1.clone();
		obj2.display();
	
		

	}

}
