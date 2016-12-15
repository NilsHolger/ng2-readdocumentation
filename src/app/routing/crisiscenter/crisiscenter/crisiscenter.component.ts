import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crisiscenter',
  template: `
      <h2>CRISIS CENTER</h2>
      <router-outlet></router-outlet>
  `,
  styleUrls: ['./crisiscenter.component.css']
})
export class CrisisCenterRouterComponent implements OnInit {


//continue here https://angular.io/docs/ts/latest/guide/router.html#!#child-routing-component
  constructor() { }

  ngOnInit() {
  }

}
