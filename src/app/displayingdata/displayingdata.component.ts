import { Component, OnInit } from '@angular/core';

class Hero {
  constructor(public id: number, public name: string){}
}

@Component({
  selector: 'app-displayingdata',
  templateUrl: './displayingdata.component.html',
  styleUrls: ['./displayingdata.component.css']
})
export class DisplayingDataComponent implements OnInit {
  title = 'Tour of Heroes';
  heroes = [
    new Hero(1, 'Flash'),
    new Hero(13, 'Superman'),
    new Hero(15, 'Spiderman'),
    // new Hero(20, 'Tornado')
  ];
  myHero = this.heroes[1];

  constructor() {

   }

  ngOnInit() {
  }

}
