package com.employee.pojo;

import javax.persistence.*;

@Entity
@Table(name = "employee") 

public class Employee {
	
	 @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)  // Auto-generated primary key
	    private int eid;

	    @Column(name = "ename")
	    private String ename;

	    @Column(name = "esalary")
	    private String esalary;
	    
	    public Employee(){}

		public int getEid() {
			return eid;
		}

		public void setEid(int eid) {
			this.eid = eid;
		}

		public String getEname() {
			return ename;
		}

		public void setEname(String ename) {
			this.ename = ename;
		}

		public String getEsalary() {
			return esalary;
		}

		public void setEsalary(String esalary) {
			this.esalary = esalary;
		}
	    
	    

}
