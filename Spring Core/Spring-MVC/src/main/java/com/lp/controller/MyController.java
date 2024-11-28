package com.lp.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.lp.model.Employee;

@Controller

public class MyController {
	
	@RequestMapping("/welcome")
	
	public ModelAndView sayWelcome(){
		ModelAndView mv=new ModelAndView();
		mv.setViewName("Welcome");          //Welcome is the name of the file or view name;
		return mv; //normally here return will work as the forward in the jsp servlet
	}
	
	@RequestMapping("/hello")
	
	public ModelAndView hello(){
		ModelAndView mv=new ModelAndView();
		mv.setViewName("Hello");          //Welcome is the name of the file or view name;
		return mv; //normally here return will work as the forward in the jsp servlet
	}
	
	@RequestMapping("/employee")
	
	public ModelAndView employee(){
		ModelAndView mv=new ModelAndView();
		mv.setViewName("EmployeeForm");          //Welcome is the name of the file or view name;
		return mv; //normally here return will work as the forward in the jsp servlet
	}
	
@RequestMapping("/employee-data")
	
	public ModelAndView readEmployee(@ModelAttribute("employee") Employee employee){
		ModelAndView mv=new ModelAndView();
		
		mv.setViewName("EmployeeDetails");
		mv.addObject("employee", employee);
		return mv; //normally here return will work as the forward in the jsp servlet
	}

}










