import { Component } from "react";

import axios from "axios";
class Findall extends Component{
    constructor(){
        super()
        this.state={
            flag:false,
            result:[]
        }
    }
    handleSubmit =(e)=>{
        e.preventDefault()
            this.setState({flag:true})
            axios.get("http://localhost:3004/library")
            .then((response) =>{
                console.log(response.data);         
                this.setState({result: response.data})
            })
            .catch((error) => {
               console.error("There was an error find the employee!", error);
           });
            e.preventDefault();  
    }
    render(){
        return(
            <div>
                <hr></hr>
          <nav align="center" > <button  type="submit" class="btn btn-info" onClick={this.handleSubmit}>FIND ALL</button></nav>
            {this.state.flag?
             <table border="4" style={{ marginTop: "20px", width: "100%" }}>
             <thead>
               <tr>
                 <th>BOOK ID</th>
                 <th>BOOK Name</th>
                 <th>BOOK LANGUAGE</th>
                 <th>BOOK PRICE</th>
               </tr>
             </thead>
             <tbody>
               {this.state.result.map((library) => (
                 <tr key={library.id}>
                   <td>{library.id}</td>
                   <td>{library.name}</td>
                   <td>{library.lang}</td>
                   <td>{library.price}</td>
                 </tr>
               ))}
             </tbody>
           </table>
            :''
                }
                <div></div>
            </div>
        )
    }
}
export default Findall