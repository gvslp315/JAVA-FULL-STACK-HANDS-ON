import { Component } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.css'
})
export class Child1Component {
  
  child1title:string;
  myClass:string="myclass"

  constructor(){
    this.child1title="I Am a Child of Parent Component"
  }

}
