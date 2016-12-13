import { Component } from '@angular/core';

@Component({
  selector: 'app-powerbooster',
  template: `
  <h2>Power Booster</h2>
  <p>Super Math Power Boost: {{ 2 | exponentialStrength: 10 }}</p>
  `,
})
export class PowerBoosterComponent {

}
