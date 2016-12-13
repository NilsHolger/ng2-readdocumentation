import { Component } from '@angular/core';

@Component({
  selector: 'app-makechild',
  template: '<input [(ngModel)]="target">',
  styleUrls: ['./makechild.component.css']
})
export class MakeChildComponent {
  target: string = 'rXms';
  constructor() { }
}
