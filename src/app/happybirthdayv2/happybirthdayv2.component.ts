import { Component } from '@angular/core';

@Component({
  selector: 'app-happybirthdayv2',
  template: `
  <p>SuperHeroic JavaScript Framework Angular V2's birthday is {{ birthday | date: format }}</p>
  <button (click)="toggleFormat()">Toggle Format</button>
  `,
  styleUrls: ['./happybirthdayv2.component.css']
})
export class Happybirthdayv2Component {
  title = "we honor angular 2";
  birthday = new Date(2015, 4, 30);
  toggle = true; // start with true === fullDate

  get format() { return this.toggle ? 'fullDate' : 'shortDate'; }
  toggleFormat() { this.toggle = !this.toggle; }


}
