package com.java8;

interface MyInterface{
	void myMethod1();
	default void myMethod2() {
		System.out.println("me method 2");
	}
	static void myMethod3() {
		System.out.println("My method 3");
	}
	
}

class MyClass implements MyInterface{

	
	public void myMethod1() {
		System.out.println("Abstract method");
	
	}
	
	public void myMethod2() {
		System.out.println("default method");
		
	}
	void myMethod3() {
		System.out.println("static method");
	}
	
}

public class Interface {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		MyInterface obj=new MyClass();
		obj.myMethod1();
		obj.myMethod2();
		MyInterface.myMethod3();

	}

}
