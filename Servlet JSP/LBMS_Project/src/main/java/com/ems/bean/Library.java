package com.ems.bean;

public class Library {
		private int bookId;
		private String bookName;
		private String bookLang;
		private int bookPrice;
		
		public Library() {
			super();
			// TODO Auto-generated constructor stub
		}

		public Library(int bookId, String bookName, String bookLang, int bookPrice) {
			super();
			this.bookId = bookId;
			this.bookName = bookName;
			this.bookLang = bookLang;
			this.bookPrice = bookPrice;
		}

		public int getBookId() {
			return bookId;
		}

		public void setBookId(int bookId) {
			this.bookId = bookId;
		}

		public String getBookName() {
			return bookName;
		}

		public void setBookName(String bookName) {
			this.bookName = bookName;
		}

		public String getBookLang() {
			return bookLang;
		}

		public void setBookLang(String bookLang) {
			this.bookLang = bookLang;
		}

		public int getBookPrice() {
			return bookPrice;
		}

		public void setBookPrice(int bookPrice) {
			this.bookPrice = bookPrice;
		}

	}



