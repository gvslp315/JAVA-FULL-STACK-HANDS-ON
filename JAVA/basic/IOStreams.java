package com.basic;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;

public class IOStreams {

	public static void main(String[] args) throws IOException {
		// TODO Auto-generated method stub
		FileInputStream fin=new FileInputStream("C://java workspace//file.txt/");
		FileOutputStream fout=new FileOutputStream("C:/java workspace/new file.txt");
		int ch;
		while((ch=fin.read())!=-1) {
			fout.write(ch);
			//System.out.println((char)ch);
		}
		fin.close();
		fout.close();
		System.out.println("file copied");
		
		
		

	}

}
