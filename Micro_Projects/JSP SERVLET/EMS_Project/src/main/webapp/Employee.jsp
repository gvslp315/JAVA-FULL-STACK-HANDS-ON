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
<div class="container">
	<form action="EmployeeController" method="post" >
	<h1 color='red' align="center">Employee Management System</h1><br>
	Enter Employee Id<input type="text" name="eid" class="form-control" style="width:1000px"><br>
	Enter Employee Name<input type="text" name="ename" class="form-control" style="width:1000px"><br>
	<div >
	Enter Employee Salary<input type="text" name="esalary" class="form-control" style="width:1000px"><br>
	</div>
	
	<button class="btn btn-primary" value="insert" name="crud">Insert</button>&nbsp;&nbsp;
	<button class="btn btn-danger" value="delete" name="crud">Delete</button>&nbsp;&nbsp;
	<button class="btn btn-success" value="update" name="crud">Update</button>&nbsp;&nbsp;
	<button class="btn btn-secondary" value="find" name="crud">Find</button>&nbsp;&nbsp;
	<button class="btn btn-info" value="findall" name="crud">FindAll</button>&nbsp;&nbsp;
	</form>
	</div>

</body>
</html>