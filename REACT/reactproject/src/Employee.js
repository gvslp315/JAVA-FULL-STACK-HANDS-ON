import { Component } from "react";

class Employee extends Component{
    constructor(){
        super()
        this.state={
            eid:'',
            empName:'',
            empSalary:'',
            result:'',
            flag:false

        }
        this.Employee = this.Employee.bind(this);

    }
    Employee() {
        return(
            <div>
         this.setState(result : this.state.eid);
        </div>
        )

    }
    handleSubmit = (e) =>{
        e.preventDefault();
        this.setState({flag:true})

    }
    render(){
        return(
            <div align="center" width="80%">
                <form>
                <label for="empid">Employee ID</label>
                <input type="text" value={this.state.eid} onChange={(e)=>this.setState({eid:e.target.value})}></input>
                <br></br>
                <label for="empname">Employee NAME</label>
                <input type="text" value={this.state.empName} onChange={(e)=>this.setState({empName:e.target.value})}></input>
                <br></br>
                <label for="empsalary">Employee SALARY</label>
                <input type="text" value={this.state.empSalary} onChange={(e)=>this.setState({empSalary:e.target.value})}></input>
                <br></br>
                <button type="submit" onClick={this.handleSubmit}>SUBMIT</button>
                
                </form>
                <br></br>
                {this.state.flag ? 
                <div>
                    <br></br>Employee Id:{this.state.eid}
                    <br></br>Employee Name:{this.state.empName}
                    <br></br>Employee SALARY:{this.state.empSalary}
                </div>
                :''

                }
                

            </div>
        )
    }
}
export default Employee;

