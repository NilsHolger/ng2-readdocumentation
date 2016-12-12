import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HttpClientTohPromiseService } from './httpclienttohpromise.service';

@Component({
  selector: 'app-httpclienttohlistpromise',
  templateUrl: './httpclienttohlistpromise.component.html',
  providers: [HttpClientTohPromiseService],
  styles: ['.error {color: red;}']
})
export class HttpClientTohListPromiseComponent implements OnInit {
  errorMessage: string;
  heroesPromise: Hero[];
  mode = 'Promise';

  constructor(private heroService: HttpClientTohPromiseService) { }

  getHeroes() {
    this.heroService.getHeroes().then(heroes => this.heroesPromise = heroes,
                                      error => this.errorMessage = <any>error);
  }

  addHero(name: string){
    if (!name) { return;}
    this.heroService.addHero(name).then(hero => this.heroesPromise.push(hero),
                                        error => this.errorMessage = <any>error);
  }
    ngOnInit() {
    this.getHeroes();
  }

}
