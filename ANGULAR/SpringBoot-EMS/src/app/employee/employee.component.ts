import { Component } from '@angular/core';
import { Employee } from '../../model/Employee';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {

  result:string=""

  employee:Employee
  employeeArr: Employee[] = []; 
  flag:boolean

  constructor(private empService:EmployeeServiceService){
    this.employee=new Employee();
    this.flag=false
  }
  insertEmployee(Data:any){
    this.employee.empId=Data.empId;
    this.employee.empName=Data.empName;
    this.employee.empSalary=Data.empSalary;
    //this.empService.insertEmployee(this.employee)
    this.employee.dept.deptId=Data.deptId;
    this.result=this.empService.insertEmployee(this.employee)

  }

  updateEmployee(Data:any){
    this.employee.empId=Data.empId;
    this.employee.empName=Data.empName;
    this.employee.empSalary=Data.empSalary
    this.employee.dept.deptId=Data.deptId

    this.result=this.empService.updateEmployee(this.employee)

  }

  deleteEmployee(Data:any){
    this.result=this.empService.deleteEmployee(Data.empId)

  }

  findEmployee(Data:any){
    let employee:Employee=this.empService.findEmployee(Data.empId)
    this.result=employee.empId +"   "+ employee.empName +"     "+employee.empSalary
  }
  
  findAllEmployee(){
    this.employeeArr=this.empService.findAllEmployee()
    this.flag=true
  }

}
