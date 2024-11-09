package com.basic;

class Vechile{
	void noOfEngine() {
		System.out.println("i have one engine");
	}
}
class TwoWheeler extends Vechile{
	void noOfWheels(){
		System.out.println("i have two wheels");
	}
}
class Bike extends TwoWheeler{
	void brandName() {
		System.out.println("brand name is harley davidson");
	}
}


public class SingleInheritance {

	public static void main(String[] args) {
		Bike bike=new Bike();
		bike.noOfEngine();
		bike.noOfWheels();
		bike.brandName();
	

	}

}
