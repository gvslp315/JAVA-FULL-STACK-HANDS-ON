import { Injectable } from '@angular/core';
import { Department } from '../model/Department';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DepartmentServiceService {


  url:string
  department:Department=new Department();
  departmentArr:Department[]=[];

 constructor(private http:HttpClient) {
   this.url="http://localhost:1234/"
  }
  insertDepartment(department:Department){
   this.http.post(this.url+"create-department",department).subscribe()
   return "Department details added successfully"

  }

  updateDepartment(department:Department){
   this.http.put(this.url+"update-department",department).subscribe()
     return "Department details updated successfully"
  }

  deleteDepartment(deptId:number){
   this.http.delete(this.url+"delete-department/"+deptId).subscribe()
     return "Department details deleted successfully"

  }
  
  findDepartment(deptId:number){
   
   this.http.get<Department>(this.url+"find-department/"+deptId).subscribe(emp => this.department = emp)
   return this.department

  }

  findAllDepartment(){
   this.http.get<Department[]>(this.url+"findall-department").subscribe(empArr => this.departmentArr = empArr)
   return this.departmentArr

  }
}
