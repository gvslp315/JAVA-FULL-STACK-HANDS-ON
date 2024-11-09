package com.collections;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.LinkedList;

public class LinkedList1 {

	public static void main(String[] args) {
		LinkedList <Object>list =new LinkedList();
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
		
		System.out.println(list.remove(3));
		
		System.out.println(list);
		
		list.add(4, 143);
		
		System.out.println(list);
		
		list.remove(new Integer(143));
		
		System.out.println(list);
		
		//WAY-1
		for(int i=0;i<list.size();i++) {
			System.out.println(list.get(i));
		}
		
		//WAY-2
		for(Object i:list) {
			System.out.println(i);
		}
		System.out.println("---------------------");
		//WAY-3
		Iterator it=list.iterator();
		while(it.hasNext()) {
			System.out.println(it.next());
		}

	}

}
