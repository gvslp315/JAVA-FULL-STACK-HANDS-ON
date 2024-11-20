package com.ems.bean;

import org.springframework.beans.factory.BeanFactory;
import org.springframework.beans.factory.xml.XmlBeanFactory;
import org.springframework.context.*;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.core.io.*;

public class MainClass {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
//		Resource resource=new ClassPathResource("Beans.xml");
//		BeanFactory factory=new XmlBeanFactory(resource);
		
		ApplicationContext context=new ClassPathXmlApplicationContext("Beans.xml");
//		
//		Employee emp1=(Employee)context.getBean("emp1");
//		System.out.println(emp1);
//		
//		Employee emp2=(Employee)context.getBean("emp2");
//		System.out.println(emp2);
//		
//		Employee emp3=(Employee)context.getBean("emp3");
//		System.out.println(emp3);
//		
		Employee emp4=(Employee)context.getBean("emp4");
		System.out.println(emp4);

//		ApplicationContext context=new ClassPathXmlApplicationContext("QuestionBean.xml");
//		Question question=(Question)context.getBean("question");
//		System.out.println(question);
//		
//		Question question1=(Question)context.getBean("question1");
//		System.out.println(question1);
////		
//		ApplicationContext context=new ClassPathXmlApplicationContext("QuestionBean.xml");
//		Book book=(Book)context.getBean("author");
//		System.out.println(book);
//		
//		Book book1=(Book)context.getBean("author");
//		System.out.println(book1);
//		ApplicationContext context=new ClassPathXmlApplicationContext("QuestionBean.xml");
//		Hello hello1=(Hello)context.getBean("hello");
//		System.out.println(hello1.getMsg());
//		hello1.setMsg("welcome all");
//		System.out.println(hello1.getMsg());
//		
//		Hello hello2=(Hello)context.getBean("hello");
//		System.out.println(hello2.getMsg());


		

	}

}
