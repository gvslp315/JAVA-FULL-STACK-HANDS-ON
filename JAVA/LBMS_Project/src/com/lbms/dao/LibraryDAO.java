package com.lbms.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.LinkedList;
import java.util.List;

import com.ems.bean.Employee;
import com.lbms.bean.Library;
import com.lbms.util.DBUtil;

public class LibraryDAO {
	
	public int insertBook(Library library) throws SQLException, ClassNotFoundException {
		
		Connection con=DBUtil.getConnection();
		String sql="insert into library values(?,?,?,?)";
		PreparedStatement ps=con.prepareStatement(sql);
		ps.setInt(1,library.getBookId());
		ps.setString(2, library.getBookName());
		ps.setString(3, library.getBookLang());
		ps.setInt(4, library.getBookPrice());
		int n=ps.executeUpdate();
		return n;	
	}
	
	public int deleteBook(int bookid) throws ClassNotFoundException, SQLException{
		Connection con=DBUtil.getConnection();
		String sql="delete from library where bookid=?";
		PreparedStatement ps=con.prepareStatement(sql);
		ps.setInt(1, bookid);
	
		int n=ps.executeUpdate();
		return n;
	}
	
	public int updateBook(Library library) throws SQLException, ClassNotFoundException {
		
		Connection con=DBUtil.getConnection();
		String sql="update library set bookname=?,booklang=?,bookprice=? where bookid=?";
		PreparedStatement ps=con.prepareStatement(sql);
		ps.setString(1, library.getBookName());
		ps.setString(2, library.getBookLang());
		ps.setInt(3, library.getBookPrice());
		ps.setInt(4,library.getBookId());

		int n=ps.executeUpdate();
		return n;	
	}

	public Library findEmployee(int bookid) throws ClassNotFoundException, SQLException{
	Library book=null;
	Connection con=DBUtil.getConnection();
	String sql="select *from library where bookid=?";
	PreparedStatement ps=con.prepareStatement(sql);
	ps.setInt(1, bookid);

	ResultSet rs=ps.executeQuery();
	if(rs.next()) {
		book=new Library();
		book.setBookId(rs.getInt("bookid"));
		book.setBookName(rs.getString("bookname"));
		book.setBookLang(rs.getString("booklang"));
		book.setBookPrice(rs.getInt("bookprice"));
		
	}
	return book;
}
	
	public List<Library> findallBook() throws ClassNotFoundException, SQLException{
		List <Library> list=new LinkedList();
		Connection con=DBUtil.getConnection();
		String sql="select *from library";
		PreparedStatement ps=con.prepareStatement(sql);
	
		ResultSet rs=ps.executeQuery();
		while(rs.next()) {
			Library book=new Library();
			book.setBookId(rs.getInt("bookid"));
			book.setBookName(rs.getString("bookname"));
			book.setBookLang(rs.getString("booklang"));
			book.setBookPrice(rs.getInt("bookprice"));
			
			list.add(book);
		}
		return list;
		
	}

}
