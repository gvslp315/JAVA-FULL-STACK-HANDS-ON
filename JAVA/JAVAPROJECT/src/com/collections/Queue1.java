package com.collections;
import java.util.*;

public class Queue1 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Queue queue=new LinkedList();
		queue.offer(10);
		queue.offer(20);
		queue.offer(30);
		queue.offer(40);
		queue.offer(50);
		System.out.println(queue);
		queue.poll();
		System.out.println(queue);
		
		Deque dqueue=new LinkedList();
		dqueue.offer(10);
		dqueue.offer(20);
		dqueue.offer(30);
		dqueue.offer(40);
		dqueue.offer(50);
		System.out.println(dqueue);
		dqueue.offerFirst(1);
		dqueue.offerLast(2);
		System.out.println(dqueue);
		dqueue.pollFirst();
		dqueue.pollLast();
		System.out.println(dqueue);
		

		
		

		
		

	}

}
