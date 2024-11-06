package com.basic;

interface Vechile2{
	void noOfEngine();
	void noOfWheels();
	void brandName();
}
abstract class Bike2 implements Vechile2{
	public void noOfEngine() {
		System.out.println("i have only engine");
	}
}
class jeep extends Bike2{

	
	public void noOfWheels() {
		// TODO Auto-generated method stub
		System.out.println("i have four wheels");
		
	}

	
	public void brandName() {
		// TODO Auto-generated method stub
		System.out.println("brand name is maruthi");
		
	}
	
}

public class Interface {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		jeep c=new jeep();
		c.brandName();
		c.noOfEngine();
		c.noOfWheels();
		
		Vechile2 v=new jeep();
		v.brandName();

	}

}
