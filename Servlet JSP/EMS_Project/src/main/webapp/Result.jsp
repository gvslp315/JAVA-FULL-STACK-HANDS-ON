<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@include file="Employee.jsp" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<%
String status=request.getParameter("status");
String msg=request.getParameter("msg");


if(status.equals("success")){
	out.println(msg);
	
}
if(status.equals("fail")){
	out.println(msg);
}
%>

</body>
</html>