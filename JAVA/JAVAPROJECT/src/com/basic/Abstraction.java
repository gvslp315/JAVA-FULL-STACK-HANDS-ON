package com.basic;

abstract class myAbstract{
	void m1() {
		System.out.println("normal method");
	}
	abstract void m2();
	abstract void m3();
	
}

class normalClass extends myAbstract{

	
	void m2() {
		// TODO Auto-generated method stub
		System.out.println("abstarct class method");
		
	}

	
	void m3() {
		// TODO Auto-generated method stub
		System.out.println("abstract class method");
	}
	
}

public class Abstraction {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		normalClass nc=new normalClass();
		nc.m2();
		nc.m1();

	}

}
