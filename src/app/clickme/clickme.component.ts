import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clickme',
  templateUrl: './clickme.component.html',
  styleUrls: ['./clickme.component.css']
})
export class ClickMeComponent implements OnInit {
  heroes = ['Flash', 'Superman', 'Tornado', 'Windstorm'];
  addHero(newHero: string){
    if (newHero){
      this.heroes.push(newHero);
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
