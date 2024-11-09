package com.basic;



public class GarbageCollection {
	int count=1;
	
	GarbageCollection(){
		count++;
		System.out.println(count);
	}
	
	protected void finalize() {
		count--;
		System.out.println(count);
	}

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		GarbageCollection obj1=new GarbageCollection();
		GarbageCollection obj2=new GarbageCollection();
		
		obj1=null;
		System.gc();
		
		obj2=null;
		Runtime.getRuntime().gc();
		

	}

}
