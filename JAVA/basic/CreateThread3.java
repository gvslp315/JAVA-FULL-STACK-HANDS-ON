package com.basic;

public class CreateThread3 implements Runnable{
	
	public void run() {
		for(int i=0;i<=5;i++) {
			System.out.println(Thread.currentThread()+" is running...");
			try {
				if(Thread.currentThread().getName().equals("T1")) {
					Thread.sleep(500);
				}
				else {
					Thread.sleep(1000);
				}
				
			} catch (InterruptedException e) {
				
			}
		}
	}

	public static void main(String[] args) throws InterruptedException {
		// TODO Auto-generated method stub
		
		Thread t1=new Thread(new CreateThread3());
		Thread t2=new Thread(new CreateThread3());
		
		t1.setName("T!");
		t2.setName("T2");
		
		t1.start();
		t2.start();
		
		t2.suspend();
		
		t1.join();
		
		t2.resume();
		
		
		System.out.println("main thread end");

	}

}
