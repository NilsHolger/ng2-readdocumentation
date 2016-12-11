import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = "Android will help save the world. We have to figure out how to get Android on all desktops as fast as possible Open Source Heroes ..."
  subTitle = " like Free USB Sticks for everybody?"
  constructor() { }

  ngOnInit() {
  }

}
