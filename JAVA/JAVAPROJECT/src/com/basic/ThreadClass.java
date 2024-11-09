package com.basic;



public class ThreadClass extends Thread {
	


	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Thread t=Thread.currentThread();
		System.out.println(t.getName());
		System.out.println(t);
		System.out.println(t.getPriority());
		
		
		ThreadClass t1=new ThreadClass();
		System.out.println(t1.getName());
		System.out.println(t1.getPriority());
		
		t1.setName("instagram");
		t1.setPriority(9);
		
		System.out.println(t1.getName());
		System.out.println(t1.getPriority());
		

	}

}
