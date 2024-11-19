<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<%@include file="Calculator.jsp" %>

<%

String op=request.getParameter("calc");
int n1=Integer.parseInt(request.getParameter("n1"));
int n2=Integer.parseInt(request.getParameter("n2"));
if(op.equals("Addition"))
	out.println("<br>Addition :"+(n1+n2));
if(op.equals("Substraction"))
	out.println("<br>Substraction :"+(n1-n2));
if(op.equals("Multiplication"))
	out.println("<br>Multiplication :"+(n1*n2));
if(op.equals("Division"))
	out.println("<br>Division :"+(n1/n2));


%>

</body>
</html>