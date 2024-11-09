package com.basic;

class TwoWheeler1{
	TwoWheeler1(){
		this(10);
		System.out.println("I am two wheeler class");
	}
	TwoWheeler1(int a){
		System.out.println(" i am two wheeler --1");
	}
}
class Bike1 extends TwoWheeler1{
	Bike1(){
		super(5);
		System.out.println("i am bike class");
	}
}

public class Inheritance {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Bike1 bike=new Bike1();

	}

}
