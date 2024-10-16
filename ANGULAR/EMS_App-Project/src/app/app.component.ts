import { Component } from '@angular/core';
import { Employee } from '../model/Employee';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'EMS_App-Project';
  result:string=""

  employee:Employee
  employeeArr: Employee[] = []; 
  flag:boolean

  constructor(private empService:EmployeeService){
    this.employee=new Employee()
    this.flag=false
  }
  insertEmployee(Data:any){
    this.employee.id=Data.id;
    this.employee.empName=Data.empName;
    this.employee.empSalary=Data.empSalary
    //this.empService.insertEmployee(this.employee)
    this.result=this.empService.insertEmployee(this.employee)

  }

  updateEmployee(Data:any){
    this.employee.id=Data.id;
    this.employee.empName=Data.empName;
    this.employee.empSalary=Data.empSalary
    this.result=this.empService.updateEmployee(this.employee)

  }

  deleteEmployee(Data:any){
    this.result=this.empService.deleteEmployee(Data.id)

  }

  findEmployee(Data:any){
    let employee:Employee=this.empService.findEmployee(Data.id)
    this.result=employee.id +"   "+ employee.empName +"     "+employee.empSalary
  }
  
  findAllEmployee(){
    this.employeeArr=this.empService.findAllEmployee()
    this.flag=true
  }
            
}
