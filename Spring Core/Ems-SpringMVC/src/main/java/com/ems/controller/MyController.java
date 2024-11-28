package com.ems.controller;

import java.util.LinkedList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import com.ems.model.Employee;
import com.ems.repo.EmployeeRepo;

@Controller
public class MyController {

	@Autowired
	EmployeeRepo repo;

	@RequestMapping("/employeeform")
	public ModelAndView employee() {
		ModelAndView mv = new ModelAndView();
		mv.setViewName("EmployeeForm"); // Welcome is the name of the file or view name;
		return mv; // normally here return will work as the forward in the jsp servlet
	}

	@RequestMapping("/employeeoutput")
	public ModelAndView employeeoutput(@RequestParam("crud") String crud,
			@ModelAttribute("employee") Employee employee) {
		ModelAndView mv = new ModelAndView();
		mv.setViewName("EmployeeOutput");

		if (crud.equalsIgnoreCase("insert") && repo.insertEmployee(employee)) {

			mv.addObject("msg", "Object has been inserted successfully");
		}
		
	 if (crud.equalsIgnoreCase("delete") && repo.deleteEmployee(employee)) {
			mv.addObject("msg", "Object has been deleted successfully");
		}
	 if (crud.equalsIgnoreCase("update") && repo.updateEmployee(employee)) {
			mv.addObject("msg", "Object has been updated successfully");
			mv.addObject("emp", employee);
		}
	 if (crud.equalsIgnoreCase("find")) {
		 Employee emp=repo.findEmployee(employee);
			mv.addObject("msg", "Object has been fetched successfully");
			mv.addObject("emp", emp);

		 
	 }

	 if (crud.equalsIgnoreCase("findall") ) {
			LinkedList<Employee> emp=repo.findallEmployee();
			mv.addObject("emp",emp);
			mv.setViewName("EmployeeOutput");
		}
		

		return mv; // normally here return will work as the forward in the jsp servlet
	}

}
