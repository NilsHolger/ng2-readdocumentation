import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Hero } from '../hero';
import { Observable } from 'rxjs/observable';


@Injectable()
export class HttpClientTohService  {
    private heroesUrl = 'app/heroes';

    constructor(private http: Http){}

    getHeroes(): Observable<Hero[]> {
        return this.http.get(this.heroesUrl).map(this.extractData).catch(this.handleError);
    }

    addHero(name: string): Observable<Hero[]> {
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});
        return this.http.post(this.heroesUrl, {name}, options)
        .map(this.extractData).catch(this.handleError);
    }

    private extractData(res: Response){
        let body = res.json();
        return body.data || {};
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