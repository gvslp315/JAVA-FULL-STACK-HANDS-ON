import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {

  parenttitle:string;
  myClass:string="myclass"

  constructor(){
    this.parenttitle="I Am a Parent Component"
  }

}
