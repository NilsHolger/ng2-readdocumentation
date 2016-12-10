import { Component, OnInit } from '@angular/core';
import { NgDiService } from '../ngdi.service';
import { Hero } from '../ngdi';



@Component({
  selector: 'app-iwantandroid',
  templateUrl: './iwantandroid.component.html',
  styleUrls: ['./iwantandroid.component.css']
})
export class IWantAndroidComponent implements OnInit {
  heroes: Hero[];
  constructor(private ngDiService: NgDiService) { 
    
  }

  ngOnInit() {
    this.getHeroes();
  }
  getHeroes() {
    this.heroes = this.ngDiService.getHeroes();
  }

}
