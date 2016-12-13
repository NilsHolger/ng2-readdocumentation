import { Component} from '@angular/core';

@Component({
  selector: 'app-happybirthdayv1',
  template: `<p>SuperHeroic JavaScript Framework Angular V1's birthday is {{birthday | date: 'fullDate' }}</p>`,
  styleUrls: ['./happybirthdayv1.component.css']
})
export class Happybirthdayv1Component {
  title = 'we honor angular 1';
  birthday = new Date(2010, 10, 20);
  constructor() { }
}
