package com.basic;

import java.util.Scanner;

class InvalidAgeException extends Exception{
	
	public String toString() {
		return "not eligible for vote";
	}
	
}

public class CustomException {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		try {
			System.out.println("enter your age: ");
			Scanner sc=new Scanner(System.in);
			int age=sc.nextInt();
			if(age<18) {
				throw new InvalidAgeException();
			}
		}
		catch(InvalidAgeException e){
			System.out.println(e);
		}

	}

}
