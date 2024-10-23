import { Component } from "react";
import Library from "../model/Library";
import axios from "axios";
class Insert extends Component{
    constructor(){
        super()
        this.state={
            bookId:'',
            bookName:'',
            bookLang:'',
            bookPrice:'',
            flag:false,
            bookIderror:'',
            bookNameerror:'',
            bookLangerror:'',
            bookPriceerror:''
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
    validateName=(bookName)=>{
        let reg=/^[a-zA-Z]+$/;
        if(bookName===''){
            return "BOOK NAME is Required";
        }
        else if(!reg.test(bookName)){
            return "Invalid BOOK NAME"
        }
        else{
            return null;
        }
    }
    validateLang =(bookLang)=>{
        let reg=/^[a-zA-Z]+$/;
        if(bookLang===''){
            return "BOOK LANGUAGE is Required";
        }
        else if(!reg.test(bookLang)){
            return "Invalid BOOK LANGUAGE"
        }
        else{
            return null;
        }

    }
    validatePrice =(bookPrice)=>{
        let reg=/^[0-9]+$/;
        if(bookPrice===''){
            return "BOOK PRICE is Required";
        }
        else if(!reg.test(bookPrice)){
            return "Invalid BOOK PRICE"
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
    changeName =(e)=>{
        this.setState({bookName:e.target.value})
        let error1=this.validateName(this.state.bookName)
        this.setState({bookNameerror:error1})
    }
    changeLang =(e)=>{
        this.setState({bookLang:e.target.value})
        let error2=this.validateLang(this.state.bookLang)
        this.setState({bookLangerror:error2})
    }
    changePrice =(e)=>{
        this.setState({bookPrice:e.target.value})
        let error3=this.validatePrice(this.state.bookPrice)
        this.setState({bookPriceerror:error3})
    }
    handleSubmit =(e)=>{
        e.preventDefault()
        let error=this.validateId(this.state.bookId)
        this.setState({bookIderror:error})
        let error1=this.validateName(this.state.bookName)
        this.setState({bookNameerror:error1})
        let error2=this.validateLang(this.state.bookLang)
        this.setState({bookLangerror:error2})
        let error3=this.validatePrice(this.state.bookPrice)
        this.setState({bookPriceerror:error3})
        if(!error&&!error1&&!error2&&!error3){
            this.setState({flag:true})
            let library=new Library()
            library.setId(this.state.bookId)
            library.setName(this.state.bookName);
            library.setLang(this.state.bookLang)
            library.setPrice(this.state.bookPrice)
            axios.post("http://localhost:3004/library",library)
            .then(() =>{
                document.getElementById("Result").innerHTML="<b> Object has been inserted Successfully</b>"
                })
                .catch((error) => {
                   console.error("There was an error inserting the BOOK!", error);
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
            <label for="bookname"><b>BOOK NAME</b></label>
            <input type="text" name="bname" class="form-control" value={this.state.bookName} onChange={this.changeName}></input>
            <font color="red"><b>{this.state.bookNameerror}</b></font>
            <br></br>
            <label for="bookLang"><b>BOOK LANGUAGE</b></label>
            <input type="text" name="blang" class="form-control" value={this.state.bookLang} onChange={this.changeLang}></input>
            <font color="red"><b>{this.state.bookLangerror}</b></font>
            <br></br>
            <label for="bookPrice"><b>BOOK PRICE</b></label>
            <input type="text" name="bprice" class="form-control" value={this.state.bookPrice} onChange={this.changePrice}></input>
            <font color="red"><b>{this.state.bookPriceerror}</b></font>
            <br></br>
            <button  type="submit" class="btn btn-primary"onClick={this.handleSubmit}>INSERT</button> 
            </form>
            {this.state.flag?
            <div>
                BOOK ID:{this.state.bookId}<br></br>
                BOOK NAME:{this.state.bookName}<br></br>
                BOOK LANGUAGE:{this.state.bookLang}<br></br>
                BOOK PRICE:{this.state.bookPrice}<br></br>
                <div id="Result"></div>
            </div>
            :''
                }
                <div></div>
            </div>
        )
    }
}
export default Insert