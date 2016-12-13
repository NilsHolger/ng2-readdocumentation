import { Component } from '@angular/core';


@Component({
  selector: 'app-afterview',
  template: '<input [(ngModel)] = "hero">',
  styleUrls: ['./afterview.component.css']
})
export class AfterViewComponent {
    hero = 'Flash'; 
  constructor() { }
}
