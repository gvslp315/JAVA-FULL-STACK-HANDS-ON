package com.ems.service;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;


@Service
@FeignClient(url="http://localhost:1234",name="SB-DMS-Project")
public interface DepartmentService {
	@GetMapping("/get-dept")
	public String getDepartement();
	
	@GetMapping("/get-details/{deptId}")
	public String getDepartementDeatils(@PathVariable("deptId") int deptId);

}
