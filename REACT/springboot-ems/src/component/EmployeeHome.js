
import {BrowserRouter,Routes,Route,Link} from "react-router-dom";
import { Component } from "react";

import Insert from "./InsertEmployee";

class Employee extends Component{
    render(){
        return(
            <BrowserRouter>
            <div>
                <br></br>
                <br></br>
                    <nav align="center">  <Link class="btn btn-primary" to="/insert">INSERT</Link>&nbsp;&nbsp;
                    </nav>
                    <Routes>
                    <Route path="/insert" element={<Insert></Insert>}>
                    </Route>
                    </Routes>
            </div>
            </BrowserRouter> 
        )
    }
}
export default Employee