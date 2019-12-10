import { Component } from '@angular/core';
import { OddComponent } from './odd/odd.component';
import { EvenComponent } from './even/even.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-project';
  
  timerEmitted(event) {
    if (event % 2 != 0) {
      let odd = new OddComponent();
      console.log("odd created");
    }
    else {
      let even = new EvenComponent();
      console.log("even created");
    }
  }
}
