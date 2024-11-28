import { Department } from "./Department"

export class Employee{
    empId:number=0
    empName:string="null"
    empSalary:number=0
    dept:Department = new Department();
}