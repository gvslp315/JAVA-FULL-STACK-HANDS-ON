import { Component } from "react";

class Login extends Component{
    constructor(){
        super()
        this.state={
            userId:'',
            password:'',
            errorUser:'',
            errorPassword:'',
            flag:false
        }
    }
    changeUserid = (e) =>{
        this.setState({userId:e.target.value})
        let error=this.validateUserid(this.state.userId)
        this.setState({errorUser:error})

    }
    changePassword = (e) =>{
        this.setState({password:e.target.value})
        let error1=this.validatePassword(this.state.password)
        this.setState({errorPassword:error1})

    }
    validateUserid =(userid)=>{
        let reg=/^[0-9]+$/;
        if(userid===''){
            return "Userid is required";
        }
        else if(!reg.test(userid)){
            return "Invalid userid"
        }
        else{
            return null;
        }

    }
    validatePassword =(password)=>{
        let reg=/^[a-zA-Z]+$/;
        if(password===''){
            return "password is required";
        }
        else if(!reg.test(password)){
            return "Invalid password"
        }
        else{
            return null;
        }

    }

    handleSuccess = (e) =>{
        e.preventDefault()
        let error=this.validateUserid(this.state.userId)
        this.setState({errorUser:error})
        let error1=this.validatePassword(this.state.password)
        this.setState({errorPassword:error1})


        if(!error && !error1){
            this.setState({flag:true})
        }

    }

    render(){
        return(
            <div>
                <form>
                    <label for="userid"> USER ID</label>
                    <input type="text" value={this.state.userId} onChange={this.changeUserid}></input>
                    <br></br>
                    <div><font color='red'><b>{this.state.errorUser}</b></font></div>
                    <br></br>
                    <label for="Password"> PASSWORD</label>
                    <input type="password" value={this.state.password} onChange={this.changePassword}></input>
                    <br></br>
                    <div><font color='red'><b>{this.state.errorPassword}</b></font></div>
                    <br></br>
                    <button type="submit" onClick={this.handleSuccess}>LOGIN</button>

                </form>
                {this.state.flag ? 
                <div>
                    <br></br>
                   <font color="green"> <h1>Login has been done Succesfully</h1></font>
                </div>
                :''

                }
            </div>

        )
    }

}
export default Login;