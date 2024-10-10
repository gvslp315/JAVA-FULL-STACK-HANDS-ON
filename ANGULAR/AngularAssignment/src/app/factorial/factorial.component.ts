import { Component } from '@angular/core';

@Component({
  selector: 'app-factorial',
  templateUrl: './factorial.component.html',
  styleUrl: './factorial.component.css'
})
export class FactorialComponent {

 
  number: number = 0;
  results: { number: number; factorial: number }[] = [];

  calculateFactorial(n: number): number {
    if (n < 0) {
      return -1; // Factorial is not defined for negative numbers
    }
    if (n === 0 || n === 1) {
      return 1;
    }
    return n * this.calculateFactorial(n - 1);
  }

  onSubmit() {
    const factorial = this.calculateFactorial(this.number);
    this.results.push({ number: this.number, factorial });
  }

}
