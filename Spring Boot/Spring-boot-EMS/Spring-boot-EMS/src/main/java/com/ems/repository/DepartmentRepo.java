package com.ems.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.ems.model.Department;

@Repository
public interface DepartmentRepo extends CrudRepository<Department,Integer> {

}
