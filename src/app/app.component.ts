import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  inputNumber: number;
  modeSelected: string;

  answer: string;

  constructor() {}

  ngOnInit() {
    // default value
    this.modeSelected = 'P';
  }

  numberOnly(event: KeyboardEvent): boolean {
    const charCode = event.charCode;
    if (
      charCode === 45 ||
      charCode === 46 ||
      (charCode >= 48 && charCode <= 57)
    ) {
      return true;
    }
    return false;
  }

  changeInputNumber() {
    if (this.inputNumber < 0) {
      this.inputNumber = 1;
    } else {
      this.inputNumber = Math.round(+this.inputNumber);
    }
    this.calculation();
  }

  changeModeSelected() {
    this.calculation();
  }

  calculation() {
    this.answer = '';
    if (!!this.inputNumber && !!this.modeSelected) {
      if (this.modeSelected === 'P') {
        // Prime calculation
        this.answer = `${this.isPrime(this.inputNumber)}`;
      } else if (this.modeSelected === 'F') {
        // Fibonacci calculation
        this.answer = `${this.isFibonacci(this.inputNumber)}`;
      }
    }
  }

  isPrime(num: number): boolean {
    if (num <= 1) return false;
    const sqrt = Math.sqrt(num);
    for (let i = 2; i <= sqrt; i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

  isFibonacci(num: number): boolean {
    let n1 = 0,
      n2 = 1,
      nextTerm = -1;
    for (let i = 1; num > nextTerm; i++) {
      nextTerm = n1 + n2;
      // console.log(nextTerm);
      if (nextTerm === num) return true;
      n1 = n2;
      n2 = nextTerm;
    }
    return false;
  }
}
