import { Component } from '@angular/core';

@Component({
  selector: 'lab1',
  template: `
    <input #str (keyup)="0">

    <button (click)="str.value=''">Clear</button>

    <p>{{str.value}}</p>
  `
})
export class Lab1Component {
}