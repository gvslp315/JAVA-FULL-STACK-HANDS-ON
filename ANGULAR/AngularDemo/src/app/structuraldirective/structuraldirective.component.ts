import { Component } from '@angular/core';

@Component({
  selector: 'app-structuraldirective',
  templateUrl: './structuraldirective.component.html',
  styleUrl: './structuraldirective.component.css'
})
export class StructuraldirectiveComponent {
  flag:boolean
  arr:string[];
  selecteditem1:string=""

  myStyle={};

  constructor(){
    this.flag=true
    this.arr=["shiva","omsai","koushik","ntr","dog"]
    this.myStyle={"color":"red"}

  }
  changeflag(){
    this.flag=!this.flag
  }
  

  selecteditem(e:string){
    this.selecteditem1=e
  }

 
}
