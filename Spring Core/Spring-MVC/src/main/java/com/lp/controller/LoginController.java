package com.lp.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.lp.model.Employee;
import com.lp.model.Login;

@Controller
public class LoginController {
	
	@RequestMapping("/loginform")
	public ModelAndView loginform(){
		ModelAndView mv=new ModelAndView();
		mv.setViewName("LoginForm");          //Welcome is the name of the file or view name;
		return mv; //normally here return will work as the forward in the jsp servlet
	}
	
	@RequestMapping("/login-data")
	public ModelAndView logindata(@ModelAttribute("login") Login login){
		ModelAndView mv=new ModelAndView();
		if(login.getUsername().equals("Admin") && login.getPassword().equals("123")) {
		mv.setViewName("LoginDetails");
		}
		else{
			mv.setViewName("LoginForm");//Welcome is the name of the file or view name;
			mv.addObject("msg","Login Failed");
		}
		return mv; //normally here return will work as the forward in the jsp servlet
	}

}
