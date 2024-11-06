package com.basic;

public class CreateThread2 {
	
	public void run() {
		for(int i=0;i<=5;i++) {
			System.out.println(Thread.currentThread()+" is running...");
			try {
				Thread.sleep(1000);
			} catch (InterruptedException e) {
				
			}
		}
	}

	public static void main(String[] args) throws InterruptedException {
		// TODO Auto-generated method stub

		CreateThread t1=new CreateThread();
		CreateThread t2=new CreateThread();
		
		t1.setName("T!");
		t2.setName("T2");
		
		t1.start();
		t2.start();
		
		Thread.sleep(200);
		System.out.println("main thread end");
	}

}
