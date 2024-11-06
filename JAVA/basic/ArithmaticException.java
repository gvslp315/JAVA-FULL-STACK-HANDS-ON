package com.basic;

public class ArithmaticException {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		System.out.println("before exception");
		
		try {
				int a=10/0;
				int arr1[]=new int[-5];

				
			}
		catch(ArithmeticException e){
			System.out.println(e);
			
		}
		System.out.println("after exception");
		
		
		int arr[]= {10,20,30};
		System.out.println(arr[3]);
		
		int arr1[]=new int[-5];

	}

}
