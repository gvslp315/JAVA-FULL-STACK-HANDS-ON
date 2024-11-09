package com.collections;

import java.util.HashSet;
import java.util.Iterator;
import java.util.LinkedHashSet;

public class LinkedHashSet1 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		LinkedHashSet set =new LinkedHashSet();
		
		set.add(10);
		set.add(20);
		set.add(30);
		set.add(40);
		set.add(50);
		System.out.println(set);
		
		Iterator it=set.iterator();
		while(it.hasNext()) {
			System.out.println(it.next());
		}
		
	}	

	}


