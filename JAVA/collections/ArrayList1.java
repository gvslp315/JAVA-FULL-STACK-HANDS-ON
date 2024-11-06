package com.collections;
import java.util.*;

public class ArrayList1 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		ArrayList <Object>list =new ArrayList();
		list.add(10);
		list.add(20);
		list.add("shiva");
		list.add(123.45f);
		list.add(30);
		list.add(40);
		System.out.println(list);
		System.out.println(list.get(2));
		System.out.println(list.size());
		System.out.println(list.contains(30));
		System.out.println(list.subList(1, 3));

	}

}
