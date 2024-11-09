package com.basic;

public class StringClass {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		String s1="Java";
		String s2=new String("java");
		String s3="welcome to java programming";
		
		System.out.println(s1.equals(s2));   //false
		System.out.println(s1.equalsIgnoreCase(s2));//true
		System.out.println(s1.charAt(1));
		
		System.out.println(s1.startsWith("Ja"));//true
		System.out.println(s1.endsWith("va"));//true
		
		System.out.println(s1.toLowerCase());
		System.out.println(s1.toUpperCase());
		
		System.out.println(s1.replace('a', 'l'));
		
		System.out.println(s3.substring(4));
		System.out.println(s3.substring(6, 15));
		
		System.out.println(s3.split(" "));

	}

}
