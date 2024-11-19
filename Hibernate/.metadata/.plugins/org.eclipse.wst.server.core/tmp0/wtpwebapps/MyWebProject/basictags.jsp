<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>

<%-- Declaration tagg --%>
<%! 
int a=10,b=20;
String name="lp";

%>

<%--Scriptlet tagg --%>
<%
int sum=a+b;
if(a>b)
	out.println("A");  
else
	out.println("B");
%>

<br>Addition
<%=
sum
%>
<br>
Welcome   <%= name %>


</body>
</html>