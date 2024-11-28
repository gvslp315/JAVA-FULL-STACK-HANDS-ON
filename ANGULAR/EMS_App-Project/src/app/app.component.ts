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
    this.employee.empId=Data.empId;
    this.employee.empName=Data.empName;
    this.employee.empSalary=Data.empSalary
    //this.empService.insertEmployee(this.employee)
    this.result=this.empService.insertEmployee(this.employee)

  }

  updateEmployee(Data:any){
    this.employee.empId=Data.empId;
    this.employee.empName=Data.empName;
    this.employee.empSalary=Data.empSalary
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

  findEmployeeByName(Data:any){
    this.employeeArr=this.empService.findEmployeeByName(Data.empName)
    this.flag=true
  }

  deleteEmployeeByName(Data:any){
    this.result=this.empService.deleteEmployeeByName(Data.empName)

  }

  findEmployeeBySalary(Data:any){
    this.employeeArr=this.empService.findEmployeeBySalary(Data.empSalary)
    this.flag=true
  }

  deleteEmployeeBySalary(Data:any){
    this.result=this.empService.deleteEmployeeBySalary(Data.empSalary)

  }
            
}
