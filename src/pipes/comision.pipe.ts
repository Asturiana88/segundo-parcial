import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'comision'
})
export class ComisionPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    if (value > 20){
      return "mucha"
    }
    if (value >= 10){
      return "buena"
    }
    return "mala";
  }

}
