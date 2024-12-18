import { Injectable } from '@angular/core';
import { Employee } from '../model/Employee';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  url:string
   employee:Employee=new Employee();
   employeeArr:Employee[]=[];

  constructor(private http:HttpClient) {
    this.url="http://localhost:1212/"
   }
   insertEmployee(employee:Employee){
    this.http.post(this.url+"create-employee",employee).subscribe()
    return "employee details added successfully"

   }

   updateEmployee(employee:Employee){
    this.http.put(this.url+"update-employee",employee).subscribe()
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

   findEmployeeByName(empName:any){
    
    this.http.get<Employee[]>(this.url+"find-employee-name/"+empName).subscribe(empArr => this.employeeArr = empArr)
    return this.employeeArr

   }

   deleteEmployeeByName(empName:any){
    this.http.delete(this.url+"delete-employee-name/"+empName).subscribe()
      return "employee details deleted successfully"

   }

   findEmployeeBySalary(empSalary:any){
    
    this.http.get<Employee[]>(this.url+"find-employee-salary/"+empSalary).subscribe(empArr => this.employeeArr = empArr)
    return this.employeeArr

   }

   deleteEmployeeBySalary(empSalary:any){
    this.http.delete(this.url+"delete-employee-salary/"+empSalary).subscribe()
      return "employee details deleted successfully"

   }
}
