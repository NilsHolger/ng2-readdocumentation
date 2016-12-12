import { Injectable } from '@angular/core';
import { Jsonp, URLSearchParams, Response } from '@angular/http';
import { Observable } from 'rxjs/observable';

@Injectable()
export class WikipediaService {
  constructor(private jsonp: Jsonp) { }
  search(term: string){
        let wikiUrl = 'https://en.wikipedia.org/w/api.php';
        let params = new URLSearchParams();
        params.set('search', term); //user's search value
        params.set('action', 'opensearch');
        params.set('format', 'json');
        params.set('callback', 'JSONP_CALLBACK');
        return this.jsonp.get(wikiUrl, { search: params})
        .map(response => <string[]> response.json()[1]).catch(this.handleError);
  }
     private handleError(error: Response | any){
        let errMsg: string;
        if (error instanceof Response){
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ' '} ${err}`;
        } else {
            errMsg = error.message ?  error.message : error.toString();
        }
        console.log(errMsg);
        return Observable.throw(errMsg);
    }

}
