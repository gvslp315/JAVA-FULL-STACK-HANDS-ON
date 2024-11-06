package com.basic;

class Dog{
	static void Bark() {
		System.out.println("dog is barking");
	}
}
class cat extends Dog{
	//@Override
	static void Bark() {
		System.out.println("cat is barking");
	}
}

public class Override {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Dog c=new cat();
		c.Bark();
		

	}

}
