<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<%

String userName=request.getParameter("name");
String password=request.getParameter("pwd");
	if(userName.equals("Admin") && password.equals("123")){
	%>
		<jsp:forward page="LoginSuccess.jsp"></jsp:forward>
	<%
		}
		else{
	%>
		<jsp:include page="Login.jsp"></jsp:include>
	<%
	out.println("Invalid usernamer or password");
	}
	%>


</body>
</html>