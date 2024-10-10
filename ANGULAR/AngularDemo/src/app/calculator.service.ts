import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  getAdd(a:number,b:number){
    let sum=a+b
    return sum;
  }

  getSub(a:number,b:number){
    let sub=a-b
    return sub;
  }
  constructor() { }
}
