package com.basic;

interface One{
	int a=10; 
	int c=30;//by default variables are public static final
	
}

interface Two{
	int b=20;  
	int c=40;
}

interface Three extends One,Two{
	void sun();   //by default methods are abstract
}

class Parent implements Three{

	
	public void sun() {
		// TODO Auto-generated method stub
		System.out.println(a+b);
		System.out.println(One.c+Two.c);
		
	}
	
}
public class MultipleInhert {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Parent p=new Parent();
		p.sun();

	}

}
