package com.java8;

class MyInter{
	void myMethod();
}

public class MethodRef {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		MethodRef obj=new MethodRef();
		MyInter ref=obj::method1;
		ref.myMethod();
		
		ref =MethodRef::method2;
		ref.myMethod();
		
		ref =MethodRef::new;
		ref.myMethod();
		

	}

}
