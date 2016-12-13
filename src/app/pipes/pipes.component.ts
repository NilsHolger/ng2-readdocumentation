import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {
  title = 'we honor angular';
  birthday = new Date(1988, 4, 15);
  constructor() { }


}
