import { Component } from '@angular/core';

@Component({
  selector: 'app-powerboostercalculator',
  template: `
  <h2>Power Booster Calculator</h2>
  <div>Normal power: <input [(ngModel)]="power"></div>
  <div>Boost factor: <input [(ngModel)]="factor"></div>
  <p>
      Super Hero Power: {{power | exponentialStrength: factor}}
  </p>
  `,
  styleUrls: ['./powerboostercalculator.component.css']
})
export class PowerBoosterCalculatorComponent {
  power = 10;
  factor = 10;

}
