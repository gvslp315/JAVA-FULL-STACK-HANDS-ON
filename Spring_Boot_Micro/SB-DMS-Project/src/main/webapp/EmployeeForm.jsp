<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>

<link rel="stylesheet"
	href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" />

</head>
<body>
	<div class="container">
		<form action="employeeoutput">
			<h1>Employee Management System</h1>
			Employee Name<input type="text" class="form-control" name="eid" />
			Employee Name<input type="text" class="form-control" name="ename" />
			Employee Name<input type="text" class="form-control" name="esalary" />
			<input type="submit" value="insert" class="btn btn-primary" name="crud"/>
			&nbsp;
			<input type="submit" value="delete" class="btn btn-danger" name="crud"/>
			&nbsp;&nbsp;
			<input type="submit" value="update" class="btn btn-success" name="crud"/>
			&nbsp;&nbsp;
			<input type="submit" value="find" class="btn btn-info" name="crud"/>
			&nbsp;&nbsp;
			<input type="submit" value="findall" class="btn btn-secondary" name="crud"/>
			&nbsp;&nbsp;

		</form>
	</div>

</body>
</html>