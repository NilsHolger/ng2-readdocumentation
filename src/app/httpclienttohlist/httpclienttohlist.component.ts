import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HttpClientTohService } from './httpclienttoh.service';

@Component({
  selector: 'app-httpclienttohlist',
  templateUrl: './httpclienttohlist.component.html',
  providers: [HttpClientTohService],
  styles: ['.error {color: red;}']
})
export class HttpClientTohListComponent implements OnInit {
  heroes: Hero[];
  errorMessage: string;
  mode = 'Observable';
  constructor(private heroService: HttpClientTohService) {}

  getHeroes(){
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes,
                                           error => this.errorMessage = <any>error);
  }

  addHero(name: string) {
    if (!name) {return;}
    this.heroService.addHero(name).subscribe(hero => this.heroes.push(hero),
                                    error => this.errorMessage = <any>error);
  }

  ngOnInit() {
    this.getHeroes();
  }

}
