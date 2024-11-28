<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
        <%@ page isELIgnored="false" %>
    
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>

<form action="login-data">

USER NAME<input type="text" name="username">
<br>
PASSWORD<input type="password" name="password">
<br>
<input type="submit" value="submit">
</form>

<h1>${msg}</h1>

</body>
</html>