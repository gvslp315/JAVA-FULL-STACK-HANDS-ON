package com.collections;

import java.util.Collections;
import java.util.Iterator;
import java.util.LinkedHashSet;
import java.util.TreeSet;

public class TreeSet1 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
	TreeSet set =new TreeSet(Collections.reverseOrder());
	
		set.add(90);
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
		System.out.println(set);

	

	}

}
