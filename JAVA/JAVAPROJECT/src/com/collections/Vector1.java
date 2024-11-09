package com.collections;

import java.util.*;
import java.util.Iterator;

public class Vector1 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		Vector <Object>vector =new Vector();
		vector.add(10);
		vector.add(20);
		vector.add("shiva");
		vector.add(123.45f);
		vector.add(30);
		vector.add(40);
		System.out.println(vector);
		
		System.out.println(vector.get(2));
		
		System.out.println(vector.size());
		
		System.out.println(vector.contains(30));
		
		System.out.println(vector.subList(1, 3));
		
		System.out.println(vector.remove(3));
		
		System.out.println(vector);
		
		vector.add(4, 143);
		
		System.out.println(vector);
		
		vector.remove(new Integer(143));
		
		System.out.println(vector);
		
		//WAY-1
		for(int i=0;i<vector.size();i++) {
			System.out.println(vector.get(i));
		}
		
		//WAY-2
		for(Object i:vector) {
			System.out.println(i);
		}
		System.out.println("---------------------");
		//WAY-3
		Iterator it=vector.iterator();
		while(it.hasNext()) {
			System.out.println(it.next());
		}
		System.out.println("------------------");
		
		//WAY-4
		Enumeration<Object> e=vector.elements();
		while(e.hasMoreElements()) {
			System.out.println(e.nextElement());
		}
		

	}

}
