<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" />
</head>
<body>

<div col="container">
	<form action="LibraryController" method="post">
	<h1 color='red' align="center">LIBRARY BOOK MANAGEMENT SYSTEM</h1><br>
	Enter BOOK ID<input type="text" name="bookId" class="form-control" style="width:1000px"><br>
	Enter BOOK NAME<input type="text" name="bookName" class="form-control" style="width:1000px"><br>
	Enter BOOK LANGUAGE<input type="text" name="bookLang" class="form-control" style="width:1000px"><br>
	Enter BOOK LANGUAGE<input type="text" name="bookPrice" class="form-control" style="width:1000px"><br>
	
	<button class="btn btn-primary" value="insert" name="crud">Insert</button>&nbsp;&nbsp;
	<button class="btn btn-danger" value="delete" name="crud">Delete</button>&nbsp;&nbsp;
	<button class="btn btn-success" value="update" name="crud">Update</button>&nbsp;&nbsp;
	<button class="btn btn-secondary" value="find" name="crud">Find</button>&nbsp;&nbsp;
	<button class="btn btn-info" value="findall" name="crud">FindAll</button>&nbsp;&nbsp;
	</form>
</div>

</body>
</html>