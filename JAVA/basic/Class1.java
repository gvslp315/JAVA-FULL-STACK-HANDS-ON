package com.basic;

class Mobile{
	private String brandName;
	private int price;
	
	Mobile(String brandName,int price){
		this.brandName=brandName;
		this.price=price;
	}
	
	public String getBrandName() {
		return brandName;
	}
	
	public void setBrandName(String brandName) {
		this.brandName = brandName;
	}
	
	public int getPrice() {
		return price;
	}
	
	public void setPrice(int price) {
		this.price = price;
	}
	
	void display() {
		System.out.println("brand name  "+brandName);
		System.out.println("price "+price);
	}
}

public class Class1 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Mobile samsung=new Mobile("samsung",123456);
		samsung.display();
		

	}

}
