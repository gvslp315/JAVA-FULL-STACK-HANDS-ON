import Department from "./Department";
 
class Employee {
    empId;
    empName;
    empSalary;
    deptId;
    department = Department;
    constructor() {
       this.empId=0;
       this.empName="";
       this.empSalary=0;
       this.depNo=0;
       this.dep = new Department();
    }
 
    setId(empId){
       this.empId=empId;
    }
    setName(empName){
       this.empName=empName;
    }
    setSalary(empSalary){
       this.empSalary=empSalary;
    }
 
    setDepNo(deptId) {
      this.dep.deptId = deptId;
  }
}
export default Employee;
 