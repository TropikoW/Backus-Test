import { Component,OnInit } from '@angular/core';
import { Calculator } from './calculator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'test_services';
  ngOnInit() {
    const calculator = new Calculator();
    const multiply = calculator.multiply(3,3);
    console.log(multiply);
  }
}
