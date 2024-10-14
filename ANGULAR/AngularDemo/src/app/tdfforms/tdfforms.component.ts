import { Component } from '@angular/core';
import { Employee } from '../model/Employee';

@Component({
  selector: 'app-tdfforms',
  templateUrl: './tdfforms.component.html',
  styleUrl: './tdfforms.component.css'
})
export class TDFFormsComponent {
  employee:Employee
  flag:boolean
  constructor(){
    this.employee=new Employee()
    this.flag=false;
  }
onClickSubmit(data:any){
  this.employee.eid=data.eid;
  this.employee.ename=data.ename;
  this.employee.esalary=data.esalary;
  this.flag=true;
}
}
