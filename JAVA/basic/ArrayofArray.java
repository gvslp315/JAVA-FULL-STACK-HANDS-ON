package com.basic;

public class ArrayofArray {
	public static void main(String args[]) {
		int arr[][]=new int[3][];
		arr[0]= new int[ ]{1,2,3};
		arr[1]= new int[] {4,7};
		arr[2]=new int[] {6,5,8,0};
		for(int i=0;i<arr.length;i++) {
			for(int j=0;j<arr[i].length;j++) {
				System.out.print(arr[i][j]+" ");
			}
			System.out.println();
		}
		float a=10.23f;
		double b=10.23;
		System.out.println(a==b);
		
	}

}
