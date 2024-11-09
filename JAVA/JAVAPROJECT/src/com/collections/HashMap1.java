package com.collections;

import java.util.*;
import java.util.Map.Entry;

public class HashMap1 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		HashMap map=new HashMap();
		map.put(1,"ajava");
		map.put(55, "pythonn");
		map.put(40,"c");
		map.put(10,"lp");
		map.put(9, "shiva");
		map.put(1,"koushik");
		System.out.println(map);
		
		System.out.println(map.get(10));
		
		//WAY_!
		Set <Object> keys=map.keySet();
		System.out.println(keys);
		
		for(Object k:keys){
			System.out.println(k+"==>"+map.get(k));
			
		}
		
		//WAY-2
		
		Set <Entry<Integer,String>> set=map.entrySet();
		System.out.println(set);
		
		for(Entry<Integer,String> entry:set) {
			System.out.println(entry.getKey()+"===>"+entry.getValue());
		}
		

	}

}
