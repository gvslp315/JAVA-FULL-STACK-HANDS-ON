package com.basic;

class TwoTable extends Thread{


	public void run() {
		// TODO Auto-generated method stub
		
		for(int i=1;i<=10;i++) {
			System.out.println("2 x"+" "+i+"= "+(i*2));
		}
		try {
			Thread.sleep(1000);
		} catch (InterruptedException e) {
		
		}
		
	}
	
}


class FiveTable implements Runnable{


	public void run() {
		// TODO Auto-generated method stub
		
		for(int i=1;i<=10;i++) {
			System.out.println("5 x"+" "+i+"= "+(i*5));
		}
		try {
			Thread.sleep(1000);
		} catch (InterruptedException e) {
		
		}
		
	}
	
}


public class CreateThread4 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		TwoTable two=new TwoTable();
		two.start();
		
		Thread five =new Thread(new FiveTable());
		five.start();
		
		

	}

}
