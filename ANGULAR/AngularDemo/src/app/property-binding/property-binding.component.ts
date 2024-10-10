import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrl: './property-binding.component.css'
})
export class PropertyBindingComponent {
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

  changename(){
    this.name="koushik"
  }
  changeImage(){

    if(this.imagePath=="ntr.jpg"){
    this.imagePath="dog.jpg";
    }
    else{
      this.imagePath="ntr.jpg"
    }
  }

}
