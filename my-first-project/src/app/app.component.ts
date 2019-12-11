import { Component, ViewChild, ViewContainerRef, ComponentRef, ComponentFactoryResolver } from '@angular/core';
import { OddComponent } from './odd/odd.component';
import { EvenComponent } from './even/even.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-project';
  
  @ViewChild('content', {read: ViewContainerRef, static: false}) target: ViewContainerRef;
  private componentRef: ComponentRef<any>;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
    
  }

  timerEmitted(event) {
    if (event % 2 != 0) {
      let odd = this.componentFactoryResolver.resolveComponentFactory(OddComponent);
      console.log("odd created");
      this.componentRef = this.target.createComponent(odd);
    }
    else {
      let even = this.componentFactoryResolver.resolveComponentFactory(EvenComponent);
      console.log("even created");
      this.componentRef = this.target.createComponent(even);
    }
  }
}
