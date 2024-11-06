package com.basic;

public class Exception1 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		System.out.println("before exception");
		
		try {
			throw new Error();
				
				
			}
		catch(ArithmeticException e) {
			System.out.println("a");
		}
		catch(Exception e){
			System.out.println(e);
			
		}
		catch(Error e) {
			System.out.println(e);
		}
		catch(Throwable e) {
			System.out.println(e);
		}
		System.out.println("after exception");
		
	}

}
