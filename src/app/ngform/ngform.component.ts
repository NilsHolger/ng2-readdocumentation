import { Component, OnInit } from '@angular/core';

class Hero {
  constructor(public id: number, public name: string, public power: string, public alterEgo?: string){}
}

@Component({
  selector: 'app-ngform',
  templateUrl: './ngform.component.html',
  styleUrls: ['./ngform.component.css']
})
export class NgFormComponent implements OnInit {

powers = ['really smart', 'really nice', 'super flexible', 'super hot', 'forward thinking innovative'];

model = new Hero(18, 'Dr. IQ', this.powers[0], 'Chuck Overstreet');

submitted = false;

onSubmit() { this.submitted = true; }

newHero(){
  this.model = new Hero(42, '', '');
}

//todo: remove this when we are done
get diagnostic() { return JSON.stringify(this.model);}

constructor() {
 }
ngOnInit() {
  }


}
