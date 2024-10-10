import { Component } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrl: './string-interpolation.component.css'
})
export class StringInterpolationComponent {

  name :string="lakshmi pathi";

  Age:any;
  imagePath:any;


  constructor(){
    this.Age=50
    this.imagePath="ntr.jpg"
  }


  emp={name:"shiva",
    id:101,
    salary:100000
  }

  add(a:any,b:any):any{
    let sum=a+b;
    return sum;
  }

}
