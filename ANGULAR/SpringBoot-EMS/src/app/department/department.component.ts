import { Component } from '@angular/core';
import { Department } from '../../model/Department';
import { DepartmentServiceService } from '../department-service.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrl: './department.component.css'
})
export class DepartmentComponent {

  department:Department;
  result:string=""
  departmentArr:Department[]=[];
  flag:boolean=false;
  constructor(private depService:DepartmentServiceService){
    this.department=new Department();
  }
  insertDepartment(data:any){
   this.department.deptId=data.deptId;
   this.department.deptName=data.deptName;
   this.result=this.depService.insertDepartment(this.department);
  }
  updateDepartment(data:any){
   this.department.deptId=data.deptId;
   this.department.deptName=data.deptName;
   this.result=this.depService.updateDepartment(this.department);
  }
 
  deleteDepartment(data:any){
    this.result=this.depService.deleteDepartment(data.deptId);
  }
  findDepartment(data:any){
    let department:Department= this.depService.findDepartment(data.deptId);
    this.result="Department Number:"+department.deptId+"  Department Name:"+department.deptName;
  }
  findAllDepartment(){
    this.departmentArr=this.depService.findAllDepartment();
    this.flag=true;
  }

}
