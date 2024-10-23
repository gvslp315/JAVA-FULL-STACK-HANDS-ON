import { Component } from "react";
import Library from "../model/Library";
import axios from "axios";
class Delete extends Component{
    constructor(){
        super()
        this.state={
            bookId:'',
            flag:false,
            bookIderror:'', 
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
            let library=new Library()
            library.setId(this.state.bookId)
            library.setName(this.state.bookName);
            library.setLang(this.state.bookLang)
            library.setPrice(this.state.bookPrice)
            axios.delete("http://localhost:3004/library/"+this.state.bookId)
            .then(() =>{
                document.getElementById("Result").innerHTML="<b> Object has been Deleted Successfully</b>"
                })
                .catch((error) => {
                   console.error("There was an error Updating the employee!", error);
               });
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
       <nav align="center">     <button  type="submit" class="btn btn-danger" onClick={this.handleSubmit}>DELETE</button> </nav>
            </form>
            {this.state.flag?
                <div id="Result"></div>
            :''
                }
                <div></div>
            </div>
        )
    }
}
export default Delete