package com.java8;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.Date;

public class DateApi {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Date date=new Date();
		System.out.println(date);
		
		//new method
		LocalDate date1=LocalDate.now();
		System.out.println(date1);
		System.out.println(date1.getYear());
		System.out.println(date1.getMonth());
		
		LocalTime time=LocalTime.now();
		System.out.println(time);
		System.out.println(time.getHour());
		System.out.println(time.getMinute());
		
		LocalDateTime dt=LocalDateTime.now();
		System.out.println(dt);
		
		
		

	}

}
