import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../model/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  url:string
  employee:Employee=new Employee();
  employeeArr:Employee[]=[];

 constructor(private http:HttpClient) {
   this.url="http://localhost:1234/"
  }
  insertEmployee(employee:Employee){
  //  this.http.post(this.url+"create-employee",employee).subscribe()
  this.http.post(this.url+"create-employee", employee).subscribe();
  console.log(employee);
   return "employee details added successfully"

  }

  updateEmployee(employee:Employee){
   this.http.put(this.url+"update-employee",employee).subscribe();
   
     return "employee details updated successfully"
  }

  deleteEmployee(empId:number){
   this.http.delete(this.url+"delete-employee/"+empId).subscribe()
     return "employee details deleted successfully"

  }
  
  findEmployee(empId:number){
   
   this.http.get<Employee>(this.url+"read-employee/"+empId).subscribe(emp => this.employee = emp)
   return this.employee

  }

  findAllEmployee(){
   this.http.get<Employee[]>(this.url+"readall-employee").subscribe(empArr => this.employeeArr = empArr)
   return this.employeeArr

  }
}
