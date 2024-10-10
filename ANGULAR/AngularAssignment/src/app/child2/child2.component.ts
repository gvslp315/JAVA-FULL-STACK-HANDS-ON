import { Component } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrl: './child2.component.css'
})
export class Child2Component {
  child2title:string;
  myClass:string="myclass"
  myStyle={};

  constructor(){
    this.child2title="I Am a Parent Component"
    this.myStyle={ "background-color":"yellow","width":150,"height":"150px","border-radius":"25%","border":"5px solid black"}
  }
  

}
