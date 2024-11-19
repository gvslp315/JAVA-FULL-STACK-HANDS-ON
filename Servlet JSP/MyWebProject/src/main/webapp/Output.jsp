<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
        <%@ include file="Input.jsp" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
 <p><a href="input.jsp">Go back and try another number</a></p>
<%
	String num=request.getParameter("input");
	int n=Integer.parseInt(num);
	int factorial=1;

	out.println("<table border='1'>");
	out.println("<tr><th>Number</th><th>Factorial></th>");
	   for (int i = 1; i <= n; i++) {
           factorial*=i;
           out.println("<tr><td>" + i + "</td><td>" + factorial + "</td></tr>");
       }
	  out.println("<table>");
	
	 
	%>

</body>
</html>