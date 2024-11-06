package com.basic;

import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;

public class StreamsClass {

	public static void main(String[] args) throws IOException {
		// TODO Auto-generated method stub
		FileReader fin=new FileReader("C://java workspace//file.txt/");
		FileWriter fout=new FileWriter("C:/java workspace/new file.txt");
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
