import { Component } from '@angular/core';
import { CalculatorService } from '../calculator.service';
import { FactorialService } from '../factorial.service';

@Component({
  selector: 'app-servicecompone',
  templateUrl: './servicecompone.component.html',
  styleUrl: './servicecompone.component.css'
})
export class ServicecomponeComponent {
  add:number
  sub:number
  factorial:number[]=[]
  input:number=0;
  
constructor(private calc:CalculatorService,private fact:FactorialService){

  this.add=calc.getAdd(10,20);
  this.sub=calc.getSub(50,10);
  

}
getfactorial(){
  this.factorial=this.fact.getFact(this.input)
}
}
