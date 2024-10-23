import Insert from "./InsertBook";
import Update from "./UpdateBook";
import Delete from "./DeleteBook";
import Find from "./FindBook";
import Findall from "./FindAllBook";
import {BrowserRouter,Routes,Route,Link} from "react-router-dom";
import { Component } from "react";

class Library extends Component{
    render(){
        return(
            <div class="test">
                <h1 align="center">CRUD OPERATIONS</h1>               
                <BrowserRouter>
                <nav align="center"> <Link class="btn btn-primary"  to="/insert">INSERT</Link>&nbsp;&nbsp;             
                    <Link class="btn btn-secondary" align="right" to="/update">UPDATE</Link>&nbsp;&nbsp;       
                    <Link class="btn btn-danger" align="right" to="/delete">DELETE</Link>&nbsp;&nbsp; 
                    <Link class="btn btn-info"  align="right" to="/find">FIND</Link>&nbsp;&nbsp;
                    <Link class="btn btn-warning"  align="right" to="/findall">FIND ALL</Link></nav>
                    <br></br>
                <Routes>
                    <Route path="/insert" element={<Insert></Insert>}>
                    </Route>
                    <Route path="/update" element={<Update></Update>}>
                    </Route>
                    <Route path="/delete" element={<Delete></Delete>}>
                    </Route>
                    <Route path="/find" element={<Find></Find>}>
                    </Route>
                    <Route path="/findall" element={<Findall></Findall>}>
                    </Route>
                </Routes>
                </BrowserRouter>
            </div>
        )
    }
}
export default Library