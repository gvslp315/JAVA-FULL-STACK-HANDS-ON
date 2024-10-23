import { Component } from "react";
import axios from "axios";
class Find extends Component{
    constructor(){
        super()
        this.state={
            bookId:'',
            flag:false,
            bookIderror:'',
            result:[]
        }
    }
    validateId =(bookId)=>{
        let reg=/^[0-9]+$/;
        if(bookId===''){
            return "BOOK ID is Required";
        }
        else if(!reg.test(bookId)){
            return "Invalid bookid"
        }
        else{
            return null;
        }
    }
    changeId =(e)=>{
        this.setState({bookId:e.target.value})
        let error=this.validateId(this.state.bookId)
        this.setState({bookIderror:error})
    }
    handleSubmit =(e)=>{
        e.preventDefault()
        let error=this.validateId(this.state.bookId)
        this.setState({bookIderror:error})
        if(!error){
            this.setState({flag:true})
            axios.get("http://localhost:3004/library/"+this.state.bookId)
            .then((response) =>{
                console.log(response.data); 
                this.setState({result: response.data})
            })
            .catch((error) => {
               console.error("There was an error find the employee!", error);
           });
            e.preventDefault();
        }
    }
    render(){
        return(
            <div>
                <h1 align="center">LIBRARY BOOK MANAGEMENT SYSTEM</h1>
            <form className="form-group">
            <label for="bookid"><b>BOOK ID</b></label>
            <input type="text"  name="bid"  class="form-control" value={this.state.bookId} onChange={this.changeId}></input>
            <font color="red"><b>{this.state.bookIderror}</b></font>
            <br></br>
            <br></br>
         <nav align="center">  <button  type="submit" class="btn btn-warning" onClick={this.handleSubmit}>FIND</button></nav>   
            </form>
            {this.state.flag?
                <div id="Result" align="center">
                    <pre><h3>BOOK ID:          {this.state.result.id}</h3></pre>
                    <pre><h3>BOOK Name:        {this.state.result.name}</h3></pre>
                    <pre> <h3>BOOK LANGUAGE:    {this.state.result.lang}</h3></pre>
                    <pre><h3>BOOK Price:       {this.state.result.price}</h3></pre>
                </div>
            
            :''
                }
                <div></div>
            </div>
        )
    }

}
export default Find