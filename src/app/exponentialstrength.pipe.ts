import { Pipe, PipeTransform } from '@angular/core';

/*
raise the value exponentially
takes an exponent argument that defaults to one
usage:
value | exponentialStrength: exponent
example:
{{2 | exponentialStrength: 10}}
formats to 1024
2*2*2*2*2*2*2*2*2*2
*/

@Pipe({
  name: 'exponentialStrength'
})
export class ExponentialStrengthPipe implements PipeTransform {
      transform(value: number, exponent: string): number {
      let exp = parseFloat(exponent);
      return Math.pow(value, isNaN(exp) ? 1 : exp);
  } 
}
