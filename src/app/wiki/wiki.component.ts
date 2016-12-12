import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { WikipediaService } from '../wikipedia.service';

@Component({
  selector: 'app-wiki',
  templateUrl: './wiki.component.html',
  styleUrls: ['./wiki.component.css']
})
export class WikiComponent {
  title = 'Wikipedia Demo';
  fetches = 'Fetches after every keystroke';
  items: Observable<string[]>;

  search(term: string){
    this.items = this.wikipediaService.search(term);
  }

  constructor(private wikipediaService: WikipediaService) { }

}
