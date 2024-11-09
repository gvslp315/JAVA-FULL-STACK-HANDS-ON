package com.basic;

public class CreateThread extends Thread {
	
	
public void run() {
	for(int i=0;i<=5;i++) {
		System.out.println("my thread is running...");
		try {
			Thread.sleep(1000);
		} catch (InterruptedException e) {
			
		}
	}
}

	public static void main(String[] args) throws InterruptedException {
		// TODO Auto-generated method stub
		
		CreateThread t1=new CreateThread();
		
		t1.start();
		
		Thread.sleep(200);
		System.out.println("main thread end");

	}

}
