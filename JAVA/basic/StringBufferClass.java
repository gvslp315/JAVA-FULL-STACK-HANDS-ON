package com.basic;

public class StringBufferClass {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		String s1=new String("java");
		s1=s1.concat(" world");
		System.out.println(s1);
		
		StringBuffer sb=new StringBuffer("java");
		sb.append(" world");
		System.out.println(sb);

	}

}
