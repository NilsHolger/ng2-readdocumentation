import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/observable';
import {Subject} from 'rxjs/subject';

import {Hero} from '../hero';
import {HeroSearchService} from '../herosearch.service';

@Component({
  selector: 'app-herosearch',
  templateUrl: './herosearch.component.html',
  styleUrls: ['./herosearch.component.css']
})
export class HeroSearchComponent implements OnInit {
  heroes: Observable<Hero[]>;
  private searchTerms = new Subject<string>();


  constructor(
      private heroSearchService: HeroSearchService, private router: Router) {}

  // push a search term in observable stream
  search(term: string): void { this.searchTerms.next(term); }

  ngOnInit(): void {
    this.heroes =
        this.searchTerms
            .debounceTime(300)       // wait for 300ms pause in events
            .distinctUntilChanged()  // ignore if next search term is same as
                                     // previous
            .switchMap(
                term => term  // switch to new observable each time
                    // return the http search observable
                    ?
                    this.heroSearchService.search(term)
                    // or the observable of empty heroes if no search term
                    :
                    Observable.of<Hero[]>([]))
                    .catch(error => {
                      console.log(error);
                      return Observable.of<Hero[]>([]);
                    })
  }

  gotoDetail(hero: Hero): void {
    let link = ['/detail', hero.id];
    this.router.navigate(link);
  }
}
