package com.basic;

class Wheels{
	void noOfWheels() {
		System.out.println("I have four wheels");
	}
	void brandName() {
		System.out.println("nothing");
	}
}
class Car extends Wheels{
	void brandName() {
		System.out.println("brand name BMW");
		
	}
	
}

public class DynamicMethodDis {

	public static void main(String[] args) {
		Wheels wheel=new Car();
		wheel.noOfWheels();
		wheel.brandName();
		
		//reverse of dynamic method dispatch is not possible
	

	}

}
