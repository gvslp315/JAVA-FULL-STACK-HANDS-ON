import { Component } from '@angular/core';

@Component({
  selector: 'app-attributedirective',
  templateUrl: './attributedirective.component.html',
  styleUrl: './attributedirective.component.css'
})
export class AttributedirectiveComponent {
  myStyle={};
  myClass:string="myClass";
  constructor(){
    this.myStyle={"color":"red"}
    
  }

  changeStyle(){
    this.myStyle={"color":"green"}
  }

  changeClass(){
    this.myClass="myClass1"

  }
}
