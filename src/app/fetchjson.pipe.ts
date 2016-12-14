import { Pipe, PipeTransform } from '@angular/core';
import { Http } from '@angular/http';
import './rxjs-extensions';

@Pipe({
  name: 'fetch',
  pure: false 
})
export class FetchJSONPipe implements PipeTransform {
  private cachedData: any = null;
  private cachedUrl = '';

  constructor(private http: Http){}

  transform(url: string): any {
    if (url !== this.cachedUrl){
      this.cachedData = null;
      this.cachedUrl = url;
      this.http.get(url).map(result => result.json())
                        .subscribe(result => { 
                          console.log('IN PIPE' + result);
                          this.cachedData = result; });
    }   
    return this.cachedData;
  }
}
