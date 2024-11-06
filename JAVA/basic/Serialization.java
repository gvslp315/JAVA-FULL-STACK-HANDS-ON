package com.basic;

import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;
import java.io.Serializable;

class Employee implements Serializable{
	
	int eid;
	String ename;
	transient int esalary;
	
	Employee(int eid,String ename,int esalary){
		super();
		this.eid=eid;
		this.ename=ename;
		this.esalary=esalary;
	}
	public void display() {
		System.out.println("employee id :"+eid);
		System.out.println("employee name :"+ename);
		System.out.println("employee salary :"+esalary);

	}
}

public class Serialization {

	public static void main(String[] args) throws IOException, ClassNotFoundException {
		// TODO Auto-generated method stub
		Employee emp=new Employee(136,"lp",12345);
		FileOutputStream fout=new FileOutputStream("C:/java workspace/Serialization.txt");
		ObjectOutputStream objout=new ObjectOutputStream(fout);
		objout.writeObject(emp);
		objout.close();
		fout.close();
		System.out.println("object serialized");
		
		FileInputStream fin=new FileInputStream("C:/java workspace/Serialization.txt");
		ObjectInputStream objin=new ObjectInputStream(fin);
		Employee emp1=(Employee) objin.readObject();
		objin.close();
		fin.close();
		emp1.display();
		//System.out.println("object serialized");
		
				
		

	}

}
