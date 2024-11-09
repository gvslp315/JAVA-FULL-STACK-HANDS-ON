package com.java8;

interface Inter{
	int calculate(int x,int y);
}
public class FunctionalInterface {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Inter ref=(x,y)->x+y;
		System.out.println(ref.calculate(10, 20));
		System.out.println(ref.calculate(200, 300));
		
		ref=(x,y)->x-y;
		System.out.println(ref.calculate(50, 40));

	}

}
