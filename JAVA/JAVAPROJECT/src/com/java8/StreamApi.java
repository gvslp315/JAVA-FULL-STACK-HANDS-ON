package com.java8;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class StreamApi {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		List<Integer> list=Arrays.asList(11,12,13,14,15);
		System.out.println(list);
		
		List<Integer> evenlist=list.stream().filter(x->x%2==0).collect(Collectors.toList());
		System.out.println(evenlist);
		
		List<String> names=Arrays.asList("shiva","lakshmipathi","pmsai","nitin");
		List<Integer> nameslist=nameslist.stream().filter(n->n.contains('a')).collect(Collectors.toList());
		System.out.println(nameslist);
		
		
		

	}

}
