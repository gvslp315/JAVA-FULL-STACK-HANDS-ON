package com.basic;
import java.util.*;

public class Array {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		int arr[]=new int[5];
		int sum=0;
		Scanner sc=new Scanner(System.in);
		
		System.out.println("enter the no of elements");
		for(int i=0;i<arr.length;i++) {
			arr[i]=sc.nextInt();
		}
		
		System.out.println("array elements are");
		for(int i=0;i<arr.length;i++) {
			System.out.println(arr[i]);
			sum=sum+arr[i];
			
		}
		System.out.println("sum of am array "+sum);
		

	}

}
